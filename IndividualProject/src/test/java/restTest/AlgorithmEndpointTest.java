package restTest;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.qa.business.AlgorithmServiceImpl;
import com.qa.persistence.domain.Algorithm;
import com.qa.persistence.domain.TimeLog;
import com.qa.rest.AlgorithmController;

@RunWith(MockitoJUnitRunner.class)
public class AlgorithmEndpointTest {
	private static final Long testLong = 1L;
	private static final String testString = "test";
	@InjectMocks
	AlgorithmController aCon;

	@Mock
	AlgorithmServiceImpl svc;

	@Mock
	Algorithm Algorithm;

	@Before
	public void setup() {
//		uCon.svc;
	}

	@Test
	public void testGetAllAlgorithms() {
		List<Algorithm> MOCK_LIST = Arrays.asList(Algorithm, Algorithm, Algorithm);
		Mockito.when(svc.getAllAlgorithms()).thenReturn(MOCK_LIST);
		assertEquals(MOCK_LIST, aCon.getAllAlgorithms());
	}

	@Test
	public void testGetAnAlgorithm() {
		Algorithm MOCK_OBJECT = new Algorithm();
		Mockito.when(svc.getAnAlgorithm(testLong)).thenReturn(Optional.of(MOCK_OBJECT));
		assertEquals(Optional.of(MOCK_OBJECT), aCon.getAnAlgorithm(testLong));
	}

	@Test
	public void testUpdateAlgorithm() {
		Mockito.when(svc.updateAlgorithm(testString, testString, testString, testLong))
				.thenReturn(testString);
		assertEquals(testString, aCon.updateAlgorithm(testString, testString, testString, testLong));

	}

	@Test
	public void testDeleteAlgorithm() {
		Mockito.when(svc.deleteAlgorithm(testLong)).thenReturn(testString);
		assertEquals(testString, aCon.deleteAlgorithm(testLong));
	}
}
