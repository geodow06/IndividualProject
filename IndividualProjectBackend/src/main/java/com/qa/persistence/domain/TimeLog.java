package com.qa.persistence.domain;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "TimeLog")
public class TimeLog {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "time_id")
	private Long time_id;

	@Column(name = "Times")
	private String time;

	// @ManyToOne
	// @JoinColumn(name = "user_id", nullable=false)
	// private User user;
	//
	// @ManyToOne
	// @JoinColumn(name = "alg_id", nullable=false)
	// private Algorithm algorithm;

	// @OneToMany
	// @JoinColumn(name = "user_id", nullable = false, insertable = false, updatable
	// = false)
	// @OnDelete(action = OnDeleteAction.CASCADE)
	// private Set<User> users;
	@Column(name = "alg_id")
	private Long alg_id;

	public TimeLog(Long time_id, String time, Long alg_id) {
		super();
		this.time_id = time_id;
		this.time = time;
		this.alg_id = alg_id;
	}

	public TimeLog() {

	}

	public Long getAlg_id() {
		return alg_id;
	}

	public void setAlg_id(Long alg_id) {
		this.alg_id = alg_id;
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