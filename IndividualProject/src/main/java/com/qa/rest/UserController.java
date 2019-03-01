package com.qa.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.business.TimeLogServiceImpl;
import com.qa.business.UserServiceImpl;
import com.qa.persistence.domain.User;

@RestController
public class UserController {
	@Autowired
	public UserServiceImpl svc; 
	
	@RequestMapping("/addUser/{userName}/{userPassword}")
	public User createUser(@PathVariable String userName, @PathVariable String userPassword) {
		
		return svc.createUser(userName, userPassword);
	}

	@RequestMapping("/getAllUsers")
	public List<User> getAllUsers() {
	
		return svc.getAllUsers();
	}
//	@RequestMapping(value = " /getAUser/{userId}", method=RequestMethod.GET)
	@RequestMapping("/getAUser/{userID}")
	public Optional<User> getAUser(@PathVariable Long userID) {
		
		return svc.getAUser(userID);
	}

	@RequestMapping("/updateUser/{userName}/{userPassword}/{userID}")
	public String updateUser(@PathVariable String userName, @PathVariable String userPassword, @PathVariable Long userId) {
		
		return svc.updateUser(userName, userPassword, userId);
	}

	@RequestMapping("/deleteUser/{userID}")
	public String deleteUser(@PathVariable Long userID) {
		
		return svc.deleteUser(userID);
	}

}
