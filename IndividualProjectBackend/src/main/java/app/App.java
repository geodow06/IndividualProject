package app;



import com.qa.persistence.repository.*;

import javax.inject.Inject;

import com.qa.business.service.*; 
import com.qa.persistence.domain.*; 
import com.qa.rest.*; 
import com.qa.util.*;


public class App{ 

public static void  main(String[] args){ 
	testApp();
}




	@Inject 
	private static AlgorithmRepository repo; 
	@Inject
	private static Algorithm Alg; 
	
	@Inject 
	private static AlgorithmDBRepository repoDB;
	
    public static void testApp()
    {  
//    	Algorithm alg = new Algorithm();
//    	alg.setAlg_name("j"); 
//    	Long id = (long) 1;
//    	alg.setAlg_id(id); 
//    	alg.setAlg_moves("U R"); 
//    	alg.setAlg_scramble("R' U'"); 
//    	System.out.println(alg.getAlg_id()); 
//    	System.out.println(alg.getAlg_name());
//    
//    	System.out.println(alg.getAlg_moves()); 
//    	System.out.println(alg.getAlg_scramble());
////    	repo.createAlgorithm("j");  
//    	Algorithm algTest = new Algorithm(); 
//    	algTest.setAlg_id(id); 
//    	algTest.setAlg_moves("U"); 
//    	algTest.setAlg_name("j"); 
//    	algTest.setAlg_scramble("R'"); 
//    	repoDB.getAAlgorithm(id);
    	
//    	System.out.print(repo.getAAlgorithm(id));
    	
       
    }
}