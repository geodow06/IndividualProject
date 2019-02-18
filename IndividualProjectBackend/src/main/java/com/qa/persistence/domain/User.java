package com.qa.persistence.domain;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "USER")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long user_id;

	@Column(name = "Username")
	private String user_name;

	@Column(name = "Password")
	private String user_password;

	// @OneToMany(mappedBy = "user")
	// private Set<TimeLog> userTimeLogs;

	// public User(Long user_id, String user_name, String user_password,
	// Set<TimeLog> userTimeLogs) {
	// super();
	// this.user_id = user_id;
	// this.user_name = user_name;
	// this.user_password = user_password;
	// this.userTimeLogs = userTimeLogs;
	// }

	public User() {

	}

	public User(Long user_id, String user_name, String user_password, Long time_id) {
		super();
		this.user_id = user_id;
		this.user_name = user_name;
		this.user_password = user_password;

	}

	// public Set<TimeLog> getUserTimeLogs() {
	// return userTimeLogs;
	// }
	//
	// public void setUserTimeLogs(Set<TimeLog> userTimeLogs) {
	// this.userTimeLogs = userTimeLogs;
	// }

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getUser_password() {
		return user_password;
	}

	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}

}
