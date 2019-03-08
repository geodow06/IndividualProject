package businessTest;

import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.qa.business.AlgorithmServiceImpl;
import com.qa.persistence.repository.AlgorithmRepository;
import com.qa.persistence.domain.*;

@RunWith(MockitoJUnitRunner.class)
public class AlgorithmBusinessTest {
	private static final Long testLong = 1L;
	private static final String testString = "test";
	private static final Algorithm MOCK_OBJECT = new Algorithm();
	private static final String inputTestString = "input";
	private static final List<Long> MOCK_LONGLIST = new ArrayList<>();
	@InjectMocks
	AlgorithmServiceImpl svc;

	@Mock
	AlgorithmRepository algRepo;

	@Mock
	Algorithm Algorithm;

	@Before
	public void setup() {

	}

	@Test
	public void testGetAllAlgorithms() {

		List<Algorithm> MOCK_LIST = Arrays.asList(Algorithm, Algorithm, Algorithm);
		Mockito.when(algRepo.findAll()).thenReturn(MOCK_LIST);
		assertEquals(MOCK_LIST, svc.getAllAlgorithms());
	}

	@Test
	public void testGetAnAlgorithm() {

		Mockito.when(algRepo.findById(testLong)).thenReturn(Optional.of(MOCK_OBJECT));
		assertEquals(MOCK_OBJECT, svc.getAnAlgorithm(testLong));
	}

	@Test
	@Ignore
	public void testUpdateAlgorithm() {

		// Mockito.when(algRepo.updateAlgorithm(testString, testString, testString,
		// testLong)).thenReturn(testString);
		// assertEquals(testString, svc.updateAlgorithm(testString, testString,
		// testString, testLong));

	}

	@Test
	public void testDeleteAlgorithm() {
		String response = "Algorithm " + testLong + " deleted.";
		assertEquals(response, svc.deleteAlgorithm(testLong));
	}

	@Test
	public void testCreateAlgorithm() {
		Mockito.when(algRepo.save(MOCK_OBJECT)).thenReturn(MOCK_OBJECT);
		// Rana how would you test this
		assertEquals("Algorithm " + testString + " successfully created",
				svc.createAlgorithm(testString, testString, testString, testLong));
	}

	@Test
	public void testGetRandomAlgID() {

		// Mockito.when(MOCK_LONGLIST.get(0)).thenReturn(testLong);
		// assertEquals(testLong, svc.getRandomAlgID(testLong));
	}

	@Test
	public void testGetRandomAlgorithm() {
		// Mockito.when(svc.getRandomAlgorithm(testLong)).thenReturn(MOCK_OBJECT);
		// Mockito.doAnswer(algRepo.findById(testLong)).thenReturn(MOCK_OBJECT);
		// assertEquals(MOCK_OBJECT, svc.getRandomAlgorithm(testLong));

	}

}
