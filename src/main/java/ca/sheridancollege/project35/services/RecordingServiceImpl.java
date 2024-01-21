package ca.sheridancollege.project35.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ca.sheridancollege.project35.domain.Recording;
import ca.sheridancollege.project35.repository.RecordingRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class RecordingServiceImpl implements RecordingService {

	private RecordingRepository recordingRepository;

	@Override
	public Recording save(Recording appointment) {
		return recordingRepository.save(appointment);
	}

	@Override
	public Optional<Recording> findById(String id) {
		return recordingRepository.findById(id);
	}

	@Override
	public List<Recording> findAll() {
		return recordingRepository.findAll();
	}

	@Override
	public void deleteById(String id) {
		recordingRepository.deleteById(id);
	}


}
