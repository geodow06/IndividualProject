package businessTest;

import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import org.junit.Before;
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
	@InjectMocks
	AlgorithmServiceImpl svc;

	@Mock
	AlgorithmRepository repo;

	@Mock
	Algorithm Algorithm;

	@Before
	public void setup() {

	}

	@Test
	public void testGetAllAlgorithms() {

		List<Algorithm> MOCK_LIST = Arrays.asList(Algorithm, Algorithm, Algorithm);
		Mockito.when(repo.findAll()).thenReturn(MOCK_LIST);
		assertEquals(MOCK_LIST, svc.getAllAlgorithms());
	}

	@Test
	public void testGetAnAlgorithm() {
		Algorithm MOCK_OBJECT = new Algorithm();
		Mockito.when(repo.findById(testLong)).thenReturn(Optional.of(MOCK_OBJECT));
		assertEquals(Optional.of(MOCK_OBJECT), svc.getAnAlgorithm(testLong));
	}

	@Test
	public void testUpdateAlgorithm() {

		Mockito.when(testString).thenReturn(testString);
		assertEquals(testString, svc.updateAlgorithm(testString, testString, testString, testLong));
	}

	@Test
	public void testDeleteAlgorithm() {
//		Mockito.when(repo.deleteById(testLong));  
//		repo.deleteById(testLong);  
//
//		Mockito.when().thenReturn(testString)
//		assertEquals(testString, svc.deleteAlgorithm(testLong));
	}

	@Test
	public void testCreateAlgorithm() {
		// TODO
	}

	@Test
	public void testGetRandomAlgID() {
		// TODO
	}

	@Test
	public void testGetRandomAlgorithm() {
		// TODO
	}

	@Test
	public void testAddDefaultAlgorithm() {
		// TODO
	}

}
