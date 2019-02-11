package George.IndividualProjectBackend;

import com.qa.persistence.repository.*;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import javax.inject.Inject;

import org.junit.Before;

import com.qa.business.service.*;
import com.qa.persistence.domain.*;
import com.qa.rest.*;
import com.qa.util.*;

public class AppTest

{

	private AlgorithmServiceImpl svc = new AlgorithmServiceImpl();
	
	
	private static final String MOCK_OBJECT = "{\"alg_id\":1,\"alg_name\":\"12\",\"alg_moves\":\"U R\",\"alg_scramble\":\"R' U'\"}";

//	@Before
//	public void setup() {
//
//	
//		svc = new AlgorithmServiceImpl();
//	}

	@Test
	public void addAlgorithmTest() {
		

		String reply = svc.createAlgorithm(MOCK_OBJECT);
		System.out.println(reply);
		Assert.assertEquals("{\"message\": \"algorithm has been succesfully added\"}", reply);
		
	}
}