package com.qa.persistence.repository;

public interface AlgorithmRepository {
	//C 
	String createAlgorithm(String algorithm); 
	
	//R 
	String getAllAlgorithms(); 
	
	String getAAlgorithm(Long alg_id);
	
	//U 
	String updateAlgorithm(String algorithm, Long alg_id); 
	
	//D 
	String deleteAlgorithm(Long alg_id); 
	
	int cycleAlgorithms(String alg_name);
}
