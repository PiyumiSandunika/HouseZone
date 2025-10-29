package com.backend.controller;

import com.backend.model.Property;
import com.backend.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/properties")
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    // Get all properties
    @GetMapping
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    // Get property by ID
    @GetMapping("/{id}")
    public Optional<Property> getProperty(@PathVariable Integer id) {
        return propertyRepository.findById(id);
    }

    // Add new property
    @PostMapping
    public Property addProperty(@RequestBody Property property) {
        return propertyRepository.save(property);
    }

    // Update property
    @PutMapping("/{id}")
    public Property updateProperty(@PathVariable Integer id, @RequestBody Property updatedProperty) {
        return propertyRepository.findById(id).map(property -> {
            property.setTitle(updatedProperty.getTitle());
            property.setPrice(updatedProperty.getPrice());
            property.setAddress(updatedProperty.getAddress());
            property.setCity(updatedProperty.getCity());
            property.setBeds(updatedProperty.getBeds());
            property.setBaths(updatedProperty.getBaths());
            property.setSqft(updatedProperty.getSqft());
            property.setGarages(updatedProperty.getGarages());
            property.setType(updatedProperty.getType());
            property.setImage(updatedProperty.getImage());
            return propertyRepository.save(property);
        }).orElseGet(() -> {
            updatedProperty.setId(id);
            return propertyRepository.save(updatedProperty);
        });
    }

    // Delete property
    @DeleteMapping("/{id}")
    public void deleteProperty(@PathVariable Integer id) {
        propertyRepository.deleteById(id);
    }
}