package com.qa.business.service;

import javax.inject.Inject; 

import org.apache.log4j.Logger;

import com.qa.persistence.repository.UserRepository;

public class UserServiceImpl implements UserService{

	@Inject 
	private UserRepository repo;
	
	public String createUser(String user) {
		if(user.contains("Gadd")) { 
			return "No Gadds Allowed";
		}
		return repo.createUser(user);
	}

	@Override
	public String getAllUsers() {
		
		return repo.getAllUsers();
	}

	@Override
	public String getAUser(Long user_id) {
		
		return repo.getAUser(user_id);
	}

	@Override
	public String updateUser(String user, Long user_id) {
		
		return repo.updateUser(user, user_id);
	}

	@Override
	public String deleteUser(Long user_id) {
		
		return repo.deleteUser(user_id);
	}

	@Override
	public int cycleUsers(String user_name) {
		
		return repo.cycleUsers(user_name);
	}
	
}
