package com.qa.persistence.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collection;
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

//import com.qa.business.service.RecipeService;

import com.qa.persistence.domain.Algorithm;
import com.qa.util.JSONUtil;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

@Transactional(SUPPORTS) 
@Default

public class AlgorithmDBRepository implements AlgorithmRepository{

	@PersistenceContext(unitName = "primary") 
	private EntityManager manager; 
	
	@Inject 
	private JSONUtil util;
	
	@Transactional(REQUIRED)
	public String createAlgorithm(String algorithm) {
	    Algorithm aAlgorithm = util.getObjectForJSON(algorithm, Algorithm.class); 
	    manager.persist(aAlgorithm);
		return "{\"message\": \"algorithm has been succesfully added\"}";
	}

	public String getAllAlgorihtms() {
		Query query = manager.createQuery("Select a FROM Recipe a"); 
		Collection<Algorithm> algorithms = (Collection<Algorithm>) query.getResultList();
		return util.getJSONForObject(algorithms);
	}

	public String getAAlgorithm(Long alg_id) {
	
		return util.getJSONForObject(manager.find(Algorithm.class, alg_id));
	}

	public String updateAlgorithm(String algorithm, Long alg_id) {
		String query = manager.merge(algorithm);
		return "updated fam";
	}
	
	@Transactional(REQUIRED)
	public String deleteAlgorithm(Long alg_id) {
		Algorithm algorithmInDB = util.getObjectForJSON(getAAlgorithm(alg_id), Algorithm.class);
		
		if(manager.contains(manager.find(Algorithm.class, alg_id))) { 
			manager.remove(manager.find(Algorithm.class, alg_id));
		}
		return "{\"message\": \"algorithm sucessfully deleted\"}";
	}

	public int cycleAlgorithms(String alg_name) {
		Query query = manager.createQuery("SELECT a FROM Algorithm a");
		Collection<Algorithm> algorithms = (Collection<Algorithm>) query.getResultList();
		List<Algorithm> validList = algorithms.parallelStream().filter(n -> n.getAlg_name().contentEquals(alg_name)).collect(Collectors.toList());
		return validList.size();
	}

}