package businessTest;

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

import com.qa.business.TimeLogServiceImpl;
import com.qa.persistence.domain.TimeLog;
import com.qa.persistence.repository.TimeLogRepository;

@RunWith(MockitoJUnitRunner.class)
public class TimeLogBusinessTest {
	private static final Long testLong = 1L;
	private static final String testString = "test";
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

		List<TimeLog> MOCK_LIST = Arrays.asList(TimeLog, TimeLog, TimeLog);
		Mockito.when(repo.findAll()).thenReturn(MOCK_LIST);
		assertEquals(MOCK_LIST, svc.getAllTimeLogs());
	}

	@Test
	public void testGetATimeLog() {
		TimeLog MOCK_OBJECT = new TimeLog();
		Mockito.when(repo.findById(testLong)).thenReturn(Optional.of(MOCK_OBJECT));
		assertEquals(Optional.of(MOCK_OBJECT), svc.getATimeLog(testLong));
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
