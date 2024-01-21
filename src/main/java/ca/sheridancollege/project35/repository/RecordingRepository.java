package ca.sheridancollege.project35.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.project35.domain.Recording;

@Repository
public interface RecordingRepository extends MongoRepository<Recording, String>{
}
