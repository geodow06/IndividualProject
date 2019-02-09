package com.qa.persistence.domain;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class Algorithm {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long alg_id;
	private String alg_name;
	private String alg_moves;
	private String alg_scramble;

	public Algorithm() {

	}

	public Algorithm(String alg_name, String alg_moves, String alg_scramble) {
		this.alg_name = alg_name;
		this.alg_moves = alg_moves;
		this.alg_scramble = alg_scramble;

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

}
