package com.backend.SuperApp.user;


import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.backend.SuperApp.error.ApiError;
import com.backend.SuperApp.shared.GenericResponse;

@RestController
public class UserController {

	
  @Autowired
  UserService userService;
  
	@PostMapping("/api/1.0/users")
	
	public GenericResponse createUser(@Valid @RequestBody User user) {
		userService.save(user);
		 return new GenericResponse("User Created") ;
		
	}
	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	 public ApiError handleValidationException(MethodArgumentNotValidException exception) {
			ApiError error = new ApiError(400, "validation error" , "/api/1.0/users");
			Map<String , String> validationErrors = new HashMap<>();
			for(FieldError fieldError : exception.getBindingResult().getFieldErrors()) {
				validationErrors.put(fieldError.getField(),fieldError.getDefaultMessage());
			}
			error.setValidationErrors(validationErrors);
			return error;
		 }
}
