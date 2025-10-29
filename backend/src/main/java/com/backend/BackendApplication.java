package com.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	// This will run after the server starts successfully
	@Bean
	public CommandLineRunner serverStartedMessage() {
		return args -> {
			System.out.println("Server is running..");
		};
	}
}
