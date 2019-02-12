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

import com.qa.persistence.domain.Time;

import com.qa.business.service.TimeService;


import com.qa.util.JSONUtil;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

@Transactional(SUPPORTS) 
@Default

public class TimeDBRepository implements TimeRepository{ 
	
	@PersistenceContext(unitName = "primary") 
	private EntityManager manager; 
	
	@Inject 
	private JSONUtil util;

	@Transactional(REQUIRED)
	public String createTime(String time) {
		Time aTime = util.getObjectForJSON(time, Time.class);
		manager.persist(aTime);
		return "{\"message\": \"time has been succesfully added\"}";
	}

	
	public String getAllTimes() {
		Query query = manager.createQuery("Select a FROM Time a");
		Collection<Time> times = (Collection<Time>) query.getResultList();
		return util.getJSONForObject(times);
	}

	
	public String getATime(Long time_id) {
		
		return util.getJSONForObject(manager.find(Time.class, time_id));
	}

	public String get3Avg(Long user_id, Long alg_id) { 
		Query query = manager.createQuery("select alg_id, avg(time) from (select a from times where user_id="+user_id+") as user1 where alg_id="+alg_id+" order by time desc Limit 3");
		int avgTime = query.getFirstResult();
		return util.getJSONForObject(avgTime);
	}
	
	public String updateTime(String time, Long time_id) {
		// not yet
		return null;
	}

	@Transactional(REQUIRED)
	public String deleteTime(Long time_id) {
		Time timeInDB = util.getObjectForJSON(getATime(time_id), Time.class); 
		
		if(manager.contains(manager.find(Time.class, time_id))) { 
			manager.remove(manager.find(Time.class, time_id));
		}
		
		return "{\"message\": \"user sucessfully deleted\"}";
	} 
	
	

}
