package ca.sheridancollege.project35.web.rest;

import java.io.FileOutputStream;
import java.util.Base64;
import java.util.Base64.Decoder;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.project35.domain.Recording;
import ca.sheridancollege.project35.services.RecordingService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/recording")
public class RecordingController {

	private RecordingService recordingService;

	// Get all recordings
	@GetMapping(value = { "", "/" })
	public List<Recording> getAllRecordings() {
		return recordingService.findAll();
	}

	// Post the recording from RecordRTC to DB
	@PostMapping(value = { "", "/" })
	public Recording postRecording(@RequestBody Recording recording) {
		return recordingService.save(recording);
	}

	// Save recording locally
	@GetMapping("/save/{id}")
	public void save(@RequestBody String id) throws Exception {
		try {
			Decoder decoder = Base64.getDecoder();
			Recording record = recordingService.findById(id).get();
			byte[] decodedByte = decoder.decode(record.getBase64string().split(",")[1]);
			FileOutputStream fos = new FileOutputStream("MyAudio.wav");
			System.out.println("downloading..");
			fos.write(decodedByte);
			fos.close();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		System.out.println("downloaded..");
	}
	
	@PostMapping("/delete/{id}")
	public void findById(@PathVariable String id) {
		recordingService.deleteById(id);
	}

}

//@PostMapping(value = { "", "/" })
//public Recording save(@RequestBody Recording recording) throws IOException{
//
//    int num = 0;
//
//    if(recordingRepository.findTopByOrderByIdDesc() == null) {
//        num = 1;
//    } else {
//        num = (int) (recordingRepository.findTopByOrderByIdDesc().getId() + 1);
//    }
//
//    String filePath = "src/main/resources/recording_" + num + ".wav";
//    System.out.println("incoming audio ...");
//    Decoder decoder = Base64.getDecoder();
//    byte[] decodedByte = decoder.decode(recording.getBase64string().split(",")[1]);
//    FileOutputStream fos = new FileOutputStream(filePath);
//    fos.write(decodedByte);
//    fos.close();
//
//    recording.setBase64string(filePath);
//    return recordingRepository.save(recording);
//}
