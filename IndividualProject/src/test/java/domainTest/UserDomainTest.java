package domainTest;

import static org.junit.Assert.assertEquals;

import java.util.HashSet;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;

import com.qa.persistence.domain.Algorithm;
import com.qa.persistence.domain.User;

public class UserDomainTest {

	User user;

	Set<Algorithm> userAlgs = new HashSet<Algorithm>();
	Long userID = 1L;
	String password = "password";
	String username = "username";

	@Before
	public void setup() {
		Algorithm alg1 = new Algorithm();
		Algorithm alg2 = new Algorithm();
		userAlgs.add(alg1);
		userAlgs.add(alg2);
		user = new User(1L, username, password, userAlgs);

	}

	@Test
	public void setAndGetUserTest() {

		assertEquals(userID, user.getUserID());
		assertEquals(username, user.getUserName());
		assertEquals(password, user.getUserPassword());
		assertEquals(userAlgs, user.getUserAlgs());

	}

}
