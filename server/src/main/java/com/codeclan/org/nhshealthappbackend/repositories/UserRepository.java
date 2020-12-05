package com.codeclan.org.nhshealthappbackend.repositories;

import com.codeclan.org.nhshealthappbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findUsersByAgeGreaterThan(int age);
    List<User> findDistinctUsersByFirstNameOrLastName(String firstName, String lastName);
    List<User> findUsersByFavouritesId(Long id);       // (traversing)
}
