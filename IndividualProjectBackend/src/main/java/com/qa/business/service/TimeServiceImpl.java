package com.qa.business.service;

import javax.inject.Inject;

import org.apache.log4j.Logger;

import com.qa.persistence.repository.TimeRepository;

public class TimeServiceImpl implements TimeService {

	@Inject
	private TimeRepository repo;

	@Override
	public String createTime(String time) {

		return repo.createTime(time);
	}

	@Override
	public String getAllTimes() {

		return repo.getAllTimes();
	}

	@Override
	public String getATime(Long time_id) {

		return repo.getATime(time_id);
	}

	@Override
	public String get3Avg(Long user_id, Long alg_id) {
		return repo.get3Avg(user_id, alg_id);
	}

	@Override
	public String updateTime(String time, Long time_id) {

		return repo.updateTime(time, time_id);
	}

	@Override
	public String deleteTime(Long time_id) {

		return repo.deleteTime(time_id);
	}

}
