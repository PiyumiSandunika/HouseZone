package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
}
