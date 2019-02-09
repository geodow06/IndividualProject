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

//import com.qa.business.service.RecipeService;

import com.qa.persistence.domain.User;
import com.qa.util.JSONUtil;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

@Transactional(SUPPORTS)
@Default

public class UserDBRepository implements UserRepository {

	@PersistenceContext(unitName = "primary")
	private EntityManager manager;

	@Inject
	private JSONUtil util;

	@Transactional(REQUIRED)
	public String createUser(String user) {
		User aUser = util.getObjectForJSON(user, User.class);
		manager.persist(aUser);
		return "{\"message\": \"user has been succesfully added\"}";
	}

	public String getAllUsers() {
		Query query = manager.createQuery("Select a FROM User a");
		Collection<User> users = (Collection<User>) query.getResultList();

		return util.getJSONForObject(users);
	}

	public String getAUser(Long user_id) {

		return util.getJSONForObject(manager.find(User.class, user_id));
	}

	public String updateUser(String user, Long user_id) {
		// not yet
		return null;
	}

	@Transactional(REQUIRED)
	public String deleteUser(Long user_id) {
		User userInDB = util.getObjectForJSON(getAUser(user_id), User.class);

		if (manager.contains(manager.find(User.class, user_id))) {
			manager.remove(manager.find(User.class, user_id));
		}

		return "{\"message\": \"user sucessfully deleted\"}";
	}

	public int cycleUsers(String user_name) {
		Query query = manager.createQuery("SELECT a FROM User a");
		Collection<User> users = (Collection<User>) query.getResultList();
		List<User> validList = users.parallelStream().filter(n -> n.getUser_name().contentEquals(user_name))
				.collect(Collectors.toList());
		return validList.size();
	}

}
