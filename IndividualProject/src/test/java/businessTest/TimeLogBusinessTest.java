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

import com.qa.business.TimeLogServiceImpl;
import com.qa.persistence.domain.TimeLog;
import com.qa.persistence.repository.TimeLogRepository;

@RunWith(MockitoJUnitRunner.class)
public class TimeLogBusinessTest {
	private static final Long testLong = 1L;
	private static final String testString = "test";
	private static final TimeLog MOCK_OBJECT = new TimeLog();
	private static final List<TimeLog> MOCK_LIST = new ArrayList<>();
	@InjectMocks
	TimeLogServiceImpl svc;

	@Mock
	TimeLogRepository repo;

	@Mock
	TimeLog TimeLog;

	@Before
	public void setup() {

	}

	@Test
	public void testGetAllTimeLogs() {

		Mockito.when(repo.findAll()).thenReturn(MOCK_LIST);
		assertEquals(MOCK_LIST, svc.getAllTimeLogs());
	}

	@Test
	public void testGetATimeLog() {

		Mockito.when(repo.findById(testLong)).thenReturn(Optional.of(MOCK_OBJECT));
		assertEquals(MOCK_OBJECT, svc.getATimeLog(testLong));
	}

	@Test
	public void testUpdateTimeLog() {
		// TODO add update method
		// Mockito.when(testString).thenReturn(testString);
		// assertEquals(testString, svc.updateTimeLog(testString, testLong));
	}

	@Test
	public void testDeleteTimeLog() {
//		Mockito.when(repo.deleteById(testLong));  
//		repo.deleteById(testLong);  

//		Mockito.when();
		// .thenReturn(testString)
//		assertEquals(testString, svc.deleteTimeLog(testLong));
	}

	@Test
	public void testCreateTimeLog() {
		// TODO
	}

	@Test
	public void testGet3Avg() {
		// TODO
	}

}
