package com.backend.SuperApp.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue
	private Long id;
	
	@NotNull(message = "{superApp.constraint.username.NotNull.message}")
	@Size(min = 5 , max = 115)
	@UniqueUsername
	private String username;
	
	@NotNull
	@Size(min = 5 , max = 115)
    private String displayName;
    
	@NotNull
	@Size(min = 8 , max = 255)
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message="{superApp.constraint.password.Pattern.message}")
    private String password;
}
