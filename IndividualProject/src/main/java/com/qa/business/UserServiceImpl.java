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
import com.qa.persistence.domain.User;
import com.qa.persistence.repository.AlgorithmRepository;
import com.qa.persistence.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

//	@Override
//	public User createUser(String user) {
//		User aUser = new User();
//		aUser.setUser_name();
//		
//
//		return userRepo.save(aUser);
//	} 

	@Override
	public User createUser(String userName, String userPassword) {
		User aUser = new User();
		aUser.setUserName(userName);
		aUser.setUserPassword(userPassword);
		return userRepo.save(aUser);
	}

	@Override
	public List<User> getAllUsers() {

		return userRepo.findAll();
	}

	@Override
	public User getAUser(Long userID) {
		List<User> allUsers = getAllUsers();
		User theUser = new User(); 
		for(int i=0;i<allUsers.size();i++) { 
			if(allUsers.get(i).getUserID()==userID) { 
				theUser=allUsers.get(i);
			}
		}
		return theUser; 
		
//		return userRepo.findById(userID);
	}

	@Override
	public String updateUser(String userName, String userPassword, Long userID) {

		User aUser = getAUser(userID);
		if (aUser != null) {
			User newUser = aUser;

			newUser.setUserName(userName);
			newUser.setUserPassword(userPassword);
			userRepo.save(newUser);
		} else {

		}
		return "User " + userID + " updated";
	}

	@Override
	public String deleteUser(Long userID) {
		userRepo.deleteById(userID);
		return "User " + userID + " deleted.";
	}

	@Override
	public List<Algorithm> getUserAlgs(Long userID) {
		User aUser = getAUser(userID);
		List<User> allUsers = getAllUsers();
		if (aUser != null) {
			
			List<Algorithm> algList =  aUser.getUserAlgs();
			return algList;
		} else {
			return null;
		}
	}

	@Override
	public String getRandomScramble(Long userID) {
		List<Algorithm> userAlgs = getUserAlgs(userID);
		int next = (int) Math.floor(Math.random() * userAlgs.size());
		Algorithm nextAlg = userAlgs.get(next);

		return nextAlg.getScramble();

	}

	@Override
	public List<TimeLog> getUserAlgTimes(Long userID, Long algID) {
		List<Algorithm> userAlgs = getUserAlgs(userID);
		List<TimeLog> algTimes = new ArrayList<TimeLog>();
		for (int i = 0; i < userAlgs.size(); i++) {
			if (userAlgs.get(i).getAlgID() == algID) {
				algTimes = userAlgs.get(i).getTimeLogs(); 
				

			} else {
				continue;
			}
		}
		return algTimes;

	}

}
