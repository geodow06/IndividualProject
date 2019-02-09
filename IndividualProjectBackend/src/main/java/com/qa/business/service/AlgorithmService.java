package com.qa.business.service;

public interface AlgorithmService {
	//C 
	String createAlgorithm(String algorithm); 
	
	//R 
	String getAllAlgorihtms(); 
	
	String getAAlgorithm(Long alg_id);
	
	//U 
	String updateAlgorithm(String algorithm, Long alg_id); 
	
	//D 
	String deleteAlgorithm(Long alg_id); 
	
	int cycleAlgorithms(String alg_name);
}
