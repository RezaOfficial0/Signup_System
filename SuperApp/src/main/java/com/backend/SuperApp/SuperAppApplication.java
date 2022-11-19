package com.backend.SuperApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class SuperAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SuperAppApplication.class, args);
	}

}
