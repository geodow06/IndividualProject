package com.qa.business.service;

public interface TimeService {
	// C
	String createTime(String time);

	// R
	String getAllTimes();

	String getATime(Long time_id);

	// U
	String updateTime(String time, Long time_id);

	// D
	String deleteTime(Long time_id);

//	int cycleUsers(String user_name);
}
