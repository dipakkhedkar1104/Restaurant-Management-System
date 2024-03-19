package com.app;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AnnapurnaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AnnapurnaBackendApplication.class, args);
		
	}
}





/*
 * config----process to @bean methods
 * 
 * EnableAutoconfig-----enables autoconifguration in sb
 * 
 * ComponentScan----> scan component involves in project such as controller ,
 * services, repo, etc
 */