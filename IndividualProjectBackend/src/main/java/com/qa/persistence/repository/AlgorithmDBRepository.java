package com.qa.persistence.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.apache.log4j.Logger;

import com.qa.persistence.domain.Algorithm;
import com.qa.persistence.domain.TimeLog;
import com.qa.util.JSONUtil;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

@Transactional(SUPPORTS)
@Default

public class AlgorithmDBRepository implements AlgorithmRepository {

	@PersistenceContext(unitName = "primary")
	private EntityManager manager;

	@Inject
	private JSONUtil util;

	@Transactional(REQUIRED)
	public String createAlgorithm(String algorithm) {

		Algorithm aAlgorithm = util.getObjectForJSON(algorithm, Algorithm.class);
		manager.persist(aAlgorithm);
		return "{\"message\": \"An account number cannot contain the number 9\"}";
	}

	public String getAllAlgorithms() {
		Query query = manager.createQuery("Select a FROM Algorithm a");
		Collection<Algorithm> algorithms = (Collection<Algorithm>) query.getResultList();
		return util.getJSONForObject(algorithms);
	}

	public String getAAlgorithm(Long alg_id) {

		return util.getJSONForObject(manager.find(Algorithm.class, alg_id));
	}

	@Transactional(REQUIRED)
	public String updateAlgorithm(String algorithm, Long alg_id) {
		deleteAlgorithm(alg_id);
		createAlgorithm(algorithm);
		return "{\"message\": \"Algorithm " + alg_id + " updated\"}";
	}

	@Transactional(REQUIRED)
	public String deleteAlgorithm(Long alg_id) {
		// need to cascade
		Algorithm algorithmInDB = util.getObjectForJSON(getAAlgorithm(alg_id), Algorithm.class);
		// TimeLog timeInDB = util.getObjectForJSON(getATime(time_id), TimeLog.class);
		//
		// if(manager.contains(manager.find(TimeLog.class, time_id))) {
		// manager.remove(manager.find(TimeLog.class, time_id));
		// }
		//
		// return "{\"message\": \"user sucessfully deleted\"}";
		if (manager.contains(manager.find(Algorithm.class, alg_id))) {
			manager.remove(manager.find(Algorithm.class, alg_id));
			return "{\"message\": \"Algorithm sucessfully deleted\"}";
		} else {
			return "{\"message\": \"Algorithm not deleted\"}";
		}

	}

	public int cycleAlgorithms(String alg_name) {
		Query query = manager.createQuery("SELECT a FROM Algorithm a");
		Collection<Algorithm> algorithms = (Collection<Algorithm>) query.getResultList();
		List<Algorithm> validList = algorithms.parallelStream().filter(n -> n.getAlg_name().contentEquals(alg_name))
				.collect(Collectors.toList());
		return validList.size();
	}

}
