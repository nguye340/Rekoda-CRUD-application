package ca.sheridancollege.project35.domain;

import java.time.LocalDate;

//import javax.persistence.Lob;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import ca.sheridancollege.project35.services.DateTodayService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Recording {
	
	@Transient
	@JsonIgnore
	private DateTodayService dateTodayService = new DateTodayService();
	
	@Id
	private String id;
	
	@NonNull
	private String base64string;
	
	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE) 
	private LocalDate date; 
	
	public void setDate(LocalDate date) {
		this.date = dateTodayService.assignTodaysDate(date); 
	}
	
	public Recording(@NonNull String id, @NonNull String base64string, @NonNull LocalDate date) {
		this.id = id;
		this.base64string = base64string;
		this.date = dateTodayService.assignTodaysDate(date);  
	}

}
