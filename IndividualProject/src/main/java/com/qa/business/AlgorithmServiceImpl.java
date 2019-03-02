package com.qa.business;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import org.springframework.stereotype.Service;

import com.qa.persistence.domain.Algorithm;
import com.qa.persistence.domain.TimeLog;
import com.qa.persistence.repository.AlgorithmRepository;

@Service
public class AlgorithmServiceImpl implements AlgorithmService {
	@Autowired
	private AlgorithmRepository algRepo;

	@Override
	public Algorithm createAlgorithm(String name, String moves, String scramble, Long userID) {
		Algorithm anAlgorithm = new Algorithm();
		anAlgorithm.setMoves(moves);
		anAlgorithm.setName(name);
		anAlgorithm.setScramble(scramble);
		anAlgorithm.setUserID(userID);
		return algRepo.save(anAlgorithm);
	}

	@Override
	public List<Algorithm> getAllAlgorithms() {

		return algRepo.findAll();
	}

	@Override
	public Optional<Algorithm> getAnAlgorithm(Long algID) {

		return algRepo.findById(algID);
	}

	@Override
	public String updateAlgorithm(String name, String moves, String scramble, Long userID, Long algID) {

		Optional<Algorithm> anAlgorithm = algRepo.findById(algID);

		if (anAlgorithm.isPresent()) {
			Algorithm newAlgorithm = anAlgorithm.get();

			newAlgorithm.setMoves(moves);
			newAlgorithm.setName(name);
			newAlgorithm.setScramble(scramble);
			newAlgorithm.setUserID(userID);
			algRepo.save(newAlgorithm);
		} else {

		}

		return "Algorithm " + algID + " updated";
	}

	@Override
	public String deleteAlgorithm(Long algID) {
		algRepo.deleteById(algID);
		return "Algorithm " + algID + " deleted.";
	}

}
