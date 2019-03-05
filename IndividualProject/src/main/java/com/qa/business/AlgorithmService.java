package com.qa.business;

import java.util.List;
import java.util.Optional;
import com.qa.persistence.domain.*;

public interface AlgorithmService {
	//C 
	public Algorithm createAlgorithm(String name, String moves, String scramble, Long userID); 
	
	//R 
	public List<Algorithm> getAllAlgorithms(); 
	public String getScramble(Long algID); 

	public Optional<Algorithm> getAnAlgorithm(Long algID); 
	
	
	//U 
	public String updateAlgorithm(String name, String moves, String scramble, Long userID, Long algID); 
	
	//D 
	public String deleteAlgorithm(Long algID); 
	
//	public int cycleAlgorithms(String alg_name);
}
