package restTest;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.qa.business.AlgorithmServiceImpl;
import com.qa.business.UserServiceImpl;
import com.qa.persistence.domain.User;
import com.qa.rest.UserController;

@RunWith(MockitoJUnitRunner.class)
public class UserEndpointTest {
	private static final String testString = "test";
	private static final String testUserName = "username";
	private static final String testUserPassword = "password";
	private static final Long testLong = 1L;
	@InjectMocks
	UserController uCon;

	@Mock
	UserServiceImpl svc;

	@Mock
	User user;

	@Before
	public void setup() {
//		uCon.svc;
	}

	@Test
	public void testGetAllUsers() {
		List<User> MOCK_LIST = Arrays.asList(user, user, user);
		Mockito.when(svc.getAllUsers()).thenReturn(MOCK_LIST);
		assertEquals(MOCK_LIST, uCon.getAllUsers());
	}

	@Test
	public void testGetAUser() {
		User MOCK_OBJECT = new User();
		Mockito.when(svc.getAUser(testLong)).thenReturn(Optional.of(MOCK_OBJECT));
		assertEquals(Optional.of(MOCK_OBJECT), uCon.getAUser(testLong));
	}

	@Test
	public void testUpdateAUser() {
		Mockito.when(svc.updateUser(testUserName, testUserPassword, testLong)).thenReturn(testString);
		assertEquals(testString, uCon.updateUser(testUserName, testUserPassword, testLong));
	}

	@Test
	public void testDeleteUser() {
		Mockito.when(svc.deleteUser(testLong)).thenReturn(testString);
		assertEquals(testString, uCon.deleteUser(testLong));
	}
}
