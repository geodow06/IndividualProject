package com.qa.persistence.domain;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;
//import java.sql.Time;

@Entity
public class Time {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long time_id;
	private Time time;

	public Time() {

	}

	public Time(Time time) {
		this.time = time;

	}

	public Long getTime_id() {
		return time_id;
	}

	public void setTime_id(Long time_id) {
		this.time_id = time_id;
	}

	public Time getTime() {
		return time;
	}

	public void setTime(Time time) {
		this.time = time;
	}

}