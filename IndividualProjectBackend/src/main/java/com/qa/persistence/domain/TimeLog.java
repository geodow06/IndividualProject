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
@Table(name="TIMELOG")
public class TimeLog {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "time_id")
	private Long time_id;

	@Column(name = "Times")
	private String time;

	@ManyToOne
	@JoinColumn(name = "user_id", nullable=false)
	private User user;

	@ManyToOne
	@JoinColumn(name = "alg_id", nullable=false)
	private Algorithm algorithm;

	public TimeLog() {

	}

	public Algorithm getAlgorithm() {
		return algorithm;
	}

	public void setAlgorithm(Algorithm algorithm) {
		this.algorithm = algorithm;
	}

	public TimeLog(Long time_id, String time, User user, Algorithm algorithm) {
		super();
		this.time_id = time_id;
		this.time = time;
		this.user = user;
		this.algorithm = algorithm;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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