package com.qa.rest;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.qa.business.service.AlgorithmService;

@Path("/algorithm")
public class AlgorithmEndpoint {
	@Inject
	private AlgorithmService service;

	@Path("/getAllAlgorithms")
	@GET
	@Produces({ "application/json" })
	public String getAllAlgorithms() {
		return service.getAllAlgorithms();
	}

	@Path("/cycleAlgorithms/{alg_name}")
	@GET
	@Produces({ "application/json" })
	public int cycleAlgorithms(@PathParam("alg_name") String alg_name) {
		return service.cycleAlgorithms(alg_name);
	}

	@Path("/getAAlgorithm/{alg_id}")
	@GET
	@Produces({ "application/json" })
	public String getAAlgorithm(@PathParam("alg_id") Long alg_id) {
		return service.getAAlgorithm(alg_id);
	}
	
	@Path("/createAlgorithm")
	@POST
	@Produces({ "application/json" })
	public String createAlgorithm(String algorithm) {
		return service.createAlgorithm(algorithm);
	}
	
	@Path("/deleteAlgorithm/{alg_id}")
	@DELETE
	@Produces({ "application/json" })
	public String deleteRecipe(@PathParam("alg_id") Long alg_id) {
		return service.deleteAlgorithm(alg_id);
	}

	public void setService(AlgorithmService service) {
		this.service = service;
	}

}
