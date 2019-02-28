package domainTest;

import static org.junit.Assert.assertEquals;

import java.util.HashSet;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;

import com.qa.persistence.domain.Algorithm;
import com.qa.persistence.domain.TimeLog;
import com.qa.persistence.domain.User;

public class TimeLogDomainTest {
	TimeLog timeLog;

	Long timeID = 1L;
	String time = "time";
	Long algID = 1L;

	@Before
	public void setup() {

		timeLog = new TimeLog(timeID, time, algID);
	}

	@Test
	public void setAndGetUserTest() {

		assertEquals(timeID, timeLog.getTimeID());
		assertEquals(time, timeLog.getTime());
		assertEquals(algID, timeLog.getAlgID());

	}
}
