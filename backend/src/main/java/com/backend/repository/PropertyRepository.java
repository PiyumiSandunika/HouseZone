package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.model.Property;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Integer> {

}