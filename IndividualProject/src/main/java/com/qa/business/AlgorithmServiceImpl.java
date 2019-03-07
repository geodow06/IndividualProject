package com.qa.business;

import java.util.ArrayList;
import java.util.Arrays;
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
	public String createAlgorithm(String name, String moves, String scramble, Long userID) {
		Algorithm anAlgorithm = new Algorithm();
		anAlgorithm.setMoves(moves);
		anAlgorithm.setName(name);
		anAlgorithm.setScramble(scramble);
		anAlgorithm.setUserID(userID);
		algRepo.save(anAlgorithm);
		return "Algorithm " + name + " successfully created";
	}

	@Override
	public List<Algorithm> getAllAlgorithms() {

		return algRepo.findAll();
	}

	@Override
	public Algorithm getAnAlgorithm(Long algID) {

		return algRepo.findById(algID).get();
	}

	@Override
	public String updateAlgorithm(String name, String moves, String scramble, Long algID) {

		Optional<Algorithm> anAlgorithm = algRepo.findById(algID);

		if (anAlgorithm.isPresent()) {
			Algorithm newAlgorithm = anAlgorithm.get();

			newAlgorithm.setMoves(moves);
			newAlgorithm.setName(name);
			newAlgorithm.setScramble(scramble);

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

	@Override
	public Long getRandomAlgID(Long userID) {
		List<Algorithm> allAlgs = getAllAlgorithms();
		List<Long> algIDs = new ArrayList<>();
		for (Algorithm alg : allAlgs) {
			algIDs.add(alg.getAlgID());
		}
		Integer iD = (int) Math.floor(Math.random() * algIDs.size());

		return algIDs.get(iD);
	}

	@Override
	public Algorithm getRandomAlgorithm(Long userID) {
		Algorithm randomAlg = algRepo.findById(getRandomAlgID(userID)).get();
		return randomAlg;
	}

	@Override
	public String addDefaultAlgorithms(Long userID) {
		List<Algorithm> defaultAlgorithms = Arrays.asList();
		return "Deafault algorithms added";

	}

}
