package com.qa.business;

import java.util.List;
import java.util.Optional;
import com.qa.persistence.domain.*;

public interface UserService {
	// C
	public User createUser(String userName, String userPassword);

	// R
	public List<User> getAllUsers();

	public Optional<User> getAUser(Long userID);

	// U
	public String updateUser(String userName, String userPassword, Long userId);

	// D
	public String deleteUser(Long userID);

//	public int cycleUsers(String user_name);
}
