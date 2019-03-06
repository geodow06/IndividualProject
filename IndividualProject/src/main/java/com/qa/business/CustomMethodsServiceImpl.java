package com.qa.business;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.persistence.domain.User;
import com.qa.persistence.repository.CustomMethodsRepository;
import com.qa.persistence.repository.UserRepository;

@Service
public class CustomMethodsServiceImpl implements CustomMethodsService {

	@Autowired
	private UserServiceImpl svc;

	@Override
	public boolean checkUsernames(String username) {

		List<String> usernames = getAllUsernames();

//		for (String str : usernames) {
//			if (str.trim().toLowerCase().contains(username.trim().toLowerCase()))
//				return true;
//		}
//		return false; 
//		usernames.get(i).trim().toLowerCase().equals(username.trim().toLowerCase())
		for (int i = 0; i < usernames.size(); i++) {
			if (usernames.get(i).toLowerCase().equals(username.toLowerCase())) {
				return true;
			}
		}
		return false;

	}

	public List<String> getAllUsernames() {
		List<User> users = svc.getAllUsers();
		List<String> usernames = new ArrayList<>();
//		for (int i = 0; i < users.size(); i++) {
//			usernames.add(users.get(i).getUserName());
//		}
//		return usernames; 

		for (User user : users) {
			usernames.add(user.getUserName());
		}
		return usernames;
	}
}
