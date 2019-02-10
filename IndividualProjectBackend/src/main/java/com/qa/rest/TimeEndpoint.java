package com.qa.rest;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.qa.business.service.TimeService;

@Path("/time")
public class TimeEndpoint {
	@Inject 
	private TimeService service; 
	
	@Path("/getAllTimes") 
	@GET 
	@Produces({ "application/json" }) 
	public String getAllTimes() { 
		return service.getAllTimes();
	} 
	
	@Path("/getATime/{time_id}") 
	@GET 
	@Produces({ "application/json" }) 
	public String getATime(@PathParam("time_id") Long time_id) { 
		return service.getATime(time_id);
	}  
	
	@Path("/get3Avg/{user_id}/{alg_id}") 
	@GET 
	@Produces({ "application/json" }) 
	public String get3Avg(@PathParam("user_id") Long user_id, @PathParam("alg_id") Long alg_id) { 
		return service.get3Avg(user_id, alg_id);
	}
	
	@Path("/createTime") 
	@POST 
	@Produces({ "application/json" }) 
	public String createTime(String time) { 
		return service.createTime(time);
	} 
	
	@Path("/deleteTime/{time_id}") 
	@DELETE 
	@Produces({ "application/json" }) 
	public String deleteTime(@PathParam("time_id") Long time_id) { 
		return service.deleteTime(time_id);
	} 
	
	public void setService(TimeService service) { 
		this.service = service;
	}
}
