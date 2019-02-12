package George.IndividualProjectBackend;

import com.qa.persistence.repository.*;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import javax.inject.Inject;

import org.junit.Before;


import com.qa.persistence.domain.*;

import com.qa.persistence.repository.*;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
public class AppTest

{

	
	
//	private AlgorithmDBRepository repoDB = new AlgorithmDBRepository();
	private static final String MOCK_OBJECT = "{\"alg_id\":1,\"alg_name\":\"12\",\"alg_moves\":\"U R\",\"alg_scramble\":\"R' U'\"}";

	private AlgorithmDBRepository repoDB;
	@Before
	public void setup() {
		
		repoDB = new AlgorithmDBRepository();

	}

	@Test
	public void addAlgorithmTest() {
		

		String reply = repoDB.createAlgorithm(MOCK_OBJECT);
		System.out.println(reply);
//		Assert.assertEquals("{\"message\": \"algorithm has been succesfully added\"}", reply);
		Assert.assertEquals("Worked", reply);
	}
}