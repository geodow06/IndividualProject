package com.qa.persistence.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class User {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "user_id")
	private Long user_id;
	
	@Column(name = "Username")
	private String user_name;
	
	@Column(name = "Password")
	private String user_password;

	public List<TimeLog> getTimeListUser() {
		return timeListUser;
	}

	public void setTimeListUser(List<TimeLog> timeListUser) {
		this.timeListUser = timeListUser;
	}

	@OneToMany(mappedBy = "user_id")
	private List<TimeLog> timeListUser;

	public User() {

	}

	public User(String user_name, String user_password) {
		this.user_name = user_name;
		this.user_password = user_password;

	}

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
