package restTest;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.qa.business.CustomMethodsServiceImpl;
import com.qa.rest.CustomMethodsController;

@RunWith(MockitoJUnitRunner.class)
public class CustomMethodsEndpointTest {
	private static final Long testLong = 1L;
	private static final String testString = "test";
	@InjectMocks
	CustomMethodsController cMCon;
	@Mock
	CustomMethodsServiceImpl svc;

	@Before
	public void setup() {

	}

	@Test
	public void testCheckUsernames() {
		Mockito.when(svc.checkUsernames(testString)).thenReturn(true);
		assertEquals(true, cMCon.checkUsernames(testString));
	}

	@Test
	public void testGetAllUsernames() {
		List<String> MOCK_OBJECT = new ArrayList<>();
		Mockito.when(svc.getAllUsernames()).thenReturn(MOCK_OBJECT);
		assertEquals(MOCK_OBJECT, svc.getAllUsernames());
	}
}
