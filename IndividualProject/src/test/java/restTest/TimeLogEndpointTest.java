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

import com.qa.business.TimeLogServiceImpl;
import com.qa.persistence.domain.TimeLog;
import com.qa.rest.TimeLogController;

@RunWith(MockitoJUnitRunner.class)
public class TimeLogEndpointTest {
	private static final Long testLong = 1L;
	private static final String testString = "test";
	@InjectMocks
	TimeLogController tCon;
	@Mock
	TimeLogServiceImpl svc;

	@Mock
	TimeLog TimeLog;

	@Before
	public void setup() {
//		uCon.svc;
	}

	@Test
	public void testGetAllTimeLogs() {
		List<TimeLog> MOCK_LIST = Arrays.asList(TimeLog, TimeLog);
		Mockito.when(svc.getAllTimeLogs()).thenReturn(MOCK_LIST);
		assertEquals(MOCK_LIST, tCon.getAllTimeLogs());
	}

	@Test
	public void testGetAnTimeLog() {
		TimeLog MOCK_OBJECT = new TimeLog();
		Mockito.when(svc.getATimeLog(testLong)).thenReturn(Optional.of(MOCK_OBJECT));
		assertEquals(Optional.of(MOCK_OBJECT), tCon.getATimeLog(testLong));
	}

	@Test
	public void testUpdateATimeLog() {
		Mockito.when(svc.updateTimeLog(testString, testLong, testLong)).thenReturn(testString);
		assertEquals(testString, tCon.updateTimeLog(testString, testLong, testLong));
	}

	@Test
	public void testDeleteTimeLog() {
		Mockito.when(svc.deleteTimeLog(testLong)).thenReturn(testString);
		assertEquals(testString, tCon.deleteTimeLog(testLong));
	}
}
