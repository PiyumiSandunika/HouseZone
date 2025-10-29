package com.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = false, length = 50)
    private String price;

    @Column(nullable = false, length = 255)
    private String address;

    @Column(nullable = false, length = 100)
    private String city;

    @Column(nullable = false)
    private Integer beds;

    @Column(nullable = false)
    private Integer baths;

    @Column(nullable = false)
    private Integer sqft;

    @Column(nullable = false)
    private Integer garages;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PropertyType type;

    @Column(length = 255)
    private String image;

    // Getters and Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getPrice() { return price; }
    public void setPrice(String price) { this.price = price; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public Integer getBeds() { return beds; }
    public void setBeds(Integer beds) { this.beds = beds; }

    public Integer getBaths() { return baths; }
    public void setBaths(Integer baths) { this.baths = baths; }

    public Integer getSqft() { return sqft; }
    public void setSqft(Integer sqft) { this.sqft = sqft; }

    public Integer getGarages() { return garages; }
    public void setGarages(Integer garages) { this.garages = garages; }

    public PropertyType getType() { return type; }
    public void setType(PropertyType type) { this.type = type; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    // Enum for property type
    public enum PropertyType {
        For_sale, For_rent
    }
}