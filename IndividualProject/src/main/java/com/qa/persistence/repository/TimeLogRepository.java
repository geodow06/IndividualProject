package com.qa.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.qa.persistence.domain.TimeLog;

@Repository
public interface TimeLogRepository extends JpaRepository<TimeLog, Long> {

}