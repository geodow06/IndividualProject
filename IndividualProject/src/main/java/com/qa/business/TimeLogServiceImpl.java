package com.qa.business;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import org.springframework.stereotype.Service;

import com.qa.persistence.domain.Algorithm;
import com.qa.persistence.domain.TimeLog;
import com.qa.persistence.repository.AlgorithmRepository;
import com.qa.persistence.repository.TimeLogRepository;

@Service
public class TimeLogServiceImpl implements TimeLogService {

	@Autowired
	private TimeLogRepository timeRepo;

	@Override
	public TimeLog createTimeLog(String time, Long algID) {
		TimeLog aTimeLog = new TimeLog();
		aTimeLog.setTime(time);
		aTimeLog.setAlgID(algID);
		return timeRepo.save(aTimeLog);
	}

	@Override
	public List<TimeLog> getAllTimeLogs() {
		// TODO Auto-generated method stub
		return timeRepo.findAll();
	}

	@Override
	public Optional<TimeLog> getATimeLog(Long timeID) {
		// TODO Auto-generated method stub
		return timeRepo.findById(timeID);
	}

	@Override
	public String get3Avg(Long userId, Long algID) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String updateTimeLog(String time, Long timeID) {
		// TODO Auto-generated method stub
		return "TimeLog " + timeID + " updated";
	}

	@Override
	public String deleteTimeLog(Long timeID) {
		timeRepo.deleteById(timeID);
		return "Time " + timeID + " deleted.";
	}

}
