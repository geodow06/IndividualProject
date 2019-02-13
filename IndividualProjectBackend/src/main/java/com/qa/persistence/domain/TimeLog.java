package com.qa.persistence.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TimeLog")
public class TimeLog {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "time_id")
	private Long time_id;

	@Column(name = "Times")
	private String time;

	@JoinColumn(name = "User_Id", referencedColumnName = "user_id")
	@ManyToOne
	private User user_id;

	@JoinColumn(name = "alg_id", referencedColumnName = "alg_id")
	@ManyToOne
	private Algorithm alg_id;

	public TimeLog() {

	}

	public TimeLog(Long time_id, String time, User user_id, Algorithm alg_id) {
		super();
		this.time_id = time_id;
		this.time = time;
		this.user_id = user_id;
		this.alg_id = alg_id;
	}

	public Algorithm getAlg_id() {
		return alg_id;
	}

	public void setAlg_id(Algorithm alg_id) {
		this.alg_id = alg_id;
	}

	public User getUser_id() {
		return user_id;
	}

	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}

	public Long getTime_id() {
		return time_id;
	}

	public void setTime_id(Long time_id) {
		this.time_id = time_id;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

}