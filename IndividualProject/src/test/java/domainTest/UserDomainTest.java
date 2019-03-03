package domainTest;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import com.qa.persistence.domain.Algorithm;
import com.qa.persistence.domain.User;

public class UserDomainTest {

	User user;

	List<Algorithm> userAlgs = new ArrayList<Algorithm>();
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
