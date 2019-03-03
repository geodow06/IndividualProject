package domainTest;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;

import java.util.List;

import org.junit.Before;
import org.junit.Test;

import com.qa.persistence.domain.Algorithm;
import com.qa.persistence.domain.TimeLog;
import com.qa.persistence.domain.User;

public class AlgorithmDomainTest {

	Algorithm algorithm;

	Long algID = 1L;
	String name = "name";
	String moves = "moves";
	String scramble = "scramble";
	List<TimeLog> timeLogs = new ArrayList<TimeLog>();
	Long userID = 1L;

	@Before
	public void setup() {
		TimeLog timeLog1 = new TimeLog();
		TimeLog timeLog2 = new TimeLog();
		timeLogs.add(timeLog1);
		timeLogs.add(timeLog2);
		algorithm = new Algorithm(algID, name, moves, scramble, timeLogs, userID);

	}

	@Test
	public void setAndGetAlgorithmTest() {

		assertEquals(algID, algorithm.getAlgID());
		assertEquals(name, algorithm.getName());
		assertEquals(moves, algorithm.getMoves());
		assertEquals(scramble, algorithm.getScramble());
		assertEquals(timeLogs, algorithm.getTimeLogs());
		assertEquals(userID, algorithm.getUserID());

	}
}
