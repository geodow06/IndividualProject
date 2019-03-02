package com.qa.persistence.domain;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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

	@OneToMany(fetch = FetchType.EAGER)
	// @OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "user_id", nullable = false, insertable = false, updatable = false)
	@Column(name = "user_algs")
	private Set<Algorithm> user_algs;

	public User() {

	}

	public User(Long user_id, String user_name, String user_password, Set<Algorithm> user_algs) {
		super();
		this.user_id = user_id;
		this.user_name = user_name;
		this.user_password = user_password;
		this.user_algs = user_algs;
	}

	public Long getUser_id() {
		return user_id;
	}

	public Set<Algorithm> getUser_algs() {
		return user_algs;
	}

	public void setUser_algs(Set<Algorithm> user_algs) {
		this.user_algs = user_algs;
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
