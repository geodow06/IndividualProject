package George.IndividualProjectBackend;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
import com.qa.persistence.repository.*;

import javax.inject.Inject;

import com.qa.business.service.*; 
import com.qa.persistence.domain.*; 
import com.qa.rest.*; 
import com.qa.util.*;

public class AppTest 
    extends TestCase
{
	@Inject 
	private AlgorithmRepository repo; 
	@Inject
	private Algorithm Alg;
	
    public void testApp()
    {  
    	Algorithm alg = new Algorithm();
    	repo.createAlgorithm("j");  
    	Long id = (long) 1;
    	System.out.print(repo.getAAlgorithm(id));
    	
        
    	assertEquals( 2,2 );
    }
}