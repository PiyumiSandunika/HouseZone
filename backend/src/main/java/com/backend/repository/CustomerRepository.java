package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}
