package ca.sheridancollege.project35.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ca.sheridancollege.project35.domain.Recording;

@Service
public interface RecordingService {
//	public Recording findByName(String name); 
	public List<Recording> findAll();
	public Optional<Recording> findById(String id);
	public Recording save(Recording appointment);
	public void deleteById(String id);
}
