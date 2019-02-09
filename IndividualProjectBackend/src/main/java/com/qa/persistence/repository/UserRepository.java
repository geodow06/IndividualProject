package com.qa.persistence.repository;

public interface UserRepository {
	// C
	String createUser(String user);

	// R
	String getAllUsers();

	String getAUser(Long user_id);

	// U
	String updateUser(String user, Long user_id);

	// D
	String deleteUser(Long user_id);

	int cycleUsers(String user_name);
}
