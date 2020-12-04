package com.codeclan.org.nhshealthappbackend.models;

import java.util.ArrayList;
import java.util.List;

public class User {

    private Long id;
    private String firstName;
    private String lastName;
    private int age;

    private List<Favourite> favourites;
    private List<Condition> conditions;

    public User(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.favourites = new ArrayList<Favourite>();
        this.conditions = new ArrayList<Condition>();
    }

    public User() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public List<Favourite> getFavourites() {
        return favourites;
    }

    public void setFavourites(List<Favourite> favourites) {
        this.favourites = favourites;
    }

    public List<Condition> getConditions() {
        return conditions;
    }

    public void setConditions(List<Condition> conditions) {
        this.conditions = conditions;
    }
}
