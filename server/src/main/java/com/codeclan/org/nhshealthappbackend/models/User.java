package com.codeclan.org.nhshealthappbackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "age")
    private int age;

    @JsonIgnoreProperties(value = "users")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_favourites",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "favourite_id", nullable = false, updatable = false)}
    )
    private List<Favourite> favourites;

    @JsonIgnoreProperties(value = "users")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_conditions",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "condition_id", nullable = false, updatable = false)}
    )
    private List<Condition> conditions;

    @JsonIgnoreProperties({"user"})
    @OneToMany(mappedBy = "user")
    private List<Reminder> reminders;

//    @JsonIgnoreProperties({"users"})
//    @OneToMany
//    @JoinColumn(name = "favourite_id", nullable = false)


//    @JsonIgnoreProperties({"users"})
//    @OneToMany
//    @JoinColumn(name = "condition_id", nullable = false)


    public User(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.favourites = new ArrayList<Favourite>();
        this.conditions = new ArrayList<Condition>();
        this.reminders = new ArrayList<Reminder>();
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

    public void addFavourite(Favourite favourite){
        this.favourites.add(favourite);
    }

    public List<Condition> getConditions() {
        return conditions;
    }

    public void setConditions(List<Condition> conditions) {
        this.conditions = conditions;
    }

    public void addCondition(Condition condition){
        this.conditions.add(condition);
    }

    public List<Reminder> getReminders() {
        return reminders;
    }

    public void setReminders(List<Reminder> reminders) {
        this.reminders = reminders;
    }

    public void addReminder(Reminder reminder) {
        this.reminders.add(reminder);
    }
}
