package businessTest;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
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

import com.qa.business.UserServiceImpl;
import com.qa.persistence.domain.User;
import com.qa.persistence.repository.UserRepository;

@RunWith(MockitoJUnitRunner.class)
public class UserBusinessTest {
	private static final Long testLong = 1L;
	private static final String testString = "test";
	private static final User MOCK_USER = new User();
	private static final List<User> MOCK_LIST = new ArrayList<>();
	@InjectMocks
	UserServiceImpl svc;

	@Mock
	UserRepository userRepo;

	@Mock
	User User;

	@Before
	public void setup() {

	}

	@Test
	public void testGetAllUsers() {

		Mockito.when(userRepo.findAll()).thenReturn(MOCK_LIST);
		assertEquals(MOCK_LIST, svc.getAllUsers());
	}

	@Test
	public void testGetAUser() {
		Mockito.when(userRepo.findById(testLong)).thenReturn(Optional.of(MOCK_USER));
		assertEquals(Optional.of(MOCK_USER), Optional.of(svc.getAUser(testLong)));
	}

	@Test
	public void testUpdateUser() {
		// TODO add update method
//		Mockito.when(testString).thenReturn(testString); 
		// assertEquals(testString, svc.updateUser(testString, testLong));
	}

	@Test
	public void testDeleteUser() {
//		Mockito.when(repo.deleteById(testLong));  
//		repo.deleteById(testLong);  

//		Mockito.when();
		// .thenReturn(testString)
//		assertEquals(testString, svc.deleteUser(testLong));
	}

	@Test
	public void testAddUser() {
		// TODO
	}

	@Test
	public void testGetUserAlgs() {
		// TODO
	}

	@Test
	public void testGetUserAlgTimes() {
		// TODO
	}

	@Test
	public void testLogInUser() {
		// TODO
	}

	@Test
	public void testGetAdmin() {
		// TODO
	}
}
