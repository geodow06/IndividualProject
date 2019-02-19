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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "Algorithm")

public class Algorithm {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "alg_id")
	private Long alg_id;

	@Column(name = "Name")
	private String alg_name;

	@Column(name = "Moves")
	private String alg_moves;

	@Column(name = "Scramble")
	private String alg_scramble;

	@OneToMany(fetch = FetchType.EAGER)
	// @OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "alg_id", nullable = false, insertable = false, updatable = false)
	private Set<TimeLog> alg_times;

	@Column(name = "user_id")
	private Long user_id;

	public Algorithm() {

	}

	public Algorithm(Long alg_id, String alg_name, String alg_moves, String alg_scramble, Set<TimeLog> alg_times,
			Long user_id) {
		super();
		this.alg_id = alg_id;
		this.alg_name = alg_name;
		this.alg_moves = alg_moves;
		this.alg_scramble = alg_scramble;
		this.alg_times = alg_times;
		this.user_id = user_id;
	}

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public Long getAlg_id() {
		return alg_id;
	}

	public void setAlg_id(Long alg_id) {
		this.alg_id = alg_id;
	}

	public String getAlg_name() {
		return alg_name;
	}

	public void setAlg_name(String alg_name) {
		this.alg_name = alg_name;
	}

	public String getAlg_moves() {
		return alg_moves;
	}

	public void setAlg_moves(String alg_moves) {
		this.alg_moves = alg_moves;
	}

	public String getAlg_scramble() {
		return alg_scramble;
	}

	public void setAlg_scramble(String alg_scramble) {
		this.alg_scramble = alg_scramble;
	}

	public Set<TimeLog> getAlg_times() {
		return alg_times;
	}

	public void setAlg_times(Set<TimeLog> times) {
		this.alg_times = times;
	}

}
