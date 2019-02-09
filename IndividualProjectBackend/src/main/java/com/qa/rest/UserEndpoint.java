package com.qa.rest;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.qa.business.service.UserService;

@Path("/user")
public class UserEndpoint {
	@Inject 
	private UserService service; 
	
	@Path("/getAllUsers") 
	@GET 
	@Produces({ "application/json" }) 
	public String getAllUsers() { 
		return service.getAllUsers();
	} 
	
	@Path("/cycleUsers/{user_name}") 
	@GET 
	@Produces({ "application/json" }) 
	public int cycleUsers(@PathParam("user_name") String user_name) { 
		return service.cycleUsers(user_name);
	} 
	
	@Path("/getAUser/{user_id}") 
	@GET 
	@Produces({ "application/json" }) 
	public String getAUSer(@PathParam("user_id") Long user_id) { 
		return service.getAUser(user_id);
	} 
	
	@Path("/createUser") 
	@POST 
	@Produces({ "application/json" }) 
	public String createUser(String user) { 
		return service.createUser(user);
	} 
	
	@Path("/deleteUser/{user_id}") 
	@DELETE 
	@Produces({ "application/json" }) 
	public String deleteUser(@PathParam("user_id") Long user_id) { 
		return service.deleteUser(user_id);
	} 
	
	public void setService(UserService service) { 
		this.service = service;
	}
	
}
