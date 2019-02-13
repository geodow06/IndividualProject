package com.qa.business.service;

import javax.inject.Inject;

import org.apache.log4j.Logger;

import com.qa.persistence.repository.AlgorithmRepository;

public class AlgorithmServiceImpl implements AlgorithmService {

	@Inject
	private AlgorithmRepository repo;

	public String createAlgorithm(String algorithm) {
		if (algorithm.contains("U3")) {
			return "can't add this Algorithm";
		}
		return repo.createAlgorithm(algorithm);
	}

	@Override
	public String getAllAlgorihtms() {

		return repo.getAllAlgorihtms();
	}

	@Override
	public String getAAlgorithm(Long alg_id) {

		return repo.getAAlgorithm(alg_id);
	}

	@Override
	public String updateAlgorithm(String algorithm, Long alg_id) {

		return repo.updateAlgorithm(algorithm, alg_id);
	}

	@Override
	public String deleteAlgorithm(Long alg_id) {

		return repo.deleteAlgorithm(alg_id);
	}

	@Override
	public int cycleAlgorithms(String alg_name) {

		return repo.cycleAlgorithms(alg_name);
	}
}
