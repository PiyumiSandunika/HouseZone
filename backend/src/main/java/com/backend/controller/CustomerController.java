package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backend.model.Customer;
import com.backend.repository.CustomerRepository;

@CrossOrigin(origins = "http://localhost:5173")  // Your React frontend URL
@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping("/pay")
    public ResponseEntity<String> makePayment(@RequestBody Customer customer) {
        customerRepository.save(customer);
        return ResponseEntity.ok("Payment recorded successfully!");
    }
}
