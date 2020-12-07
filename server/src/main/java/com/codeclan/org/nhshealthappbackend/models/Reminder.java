package com.codeclan.org.nhshealthappbackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "reminders")
public class Reminder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "text")
    private String text;
    @Column(name = "start")
    private String start;
    @Column(name = "end")
    private String end;

    @JsonIgnoreProperties(value="reminders")
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Reminder(String text, String start, String end, User user) {
        this.text = text;
        this.start = start;
        this.end = end;
        this.user = user;
    }

    public Reminder() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
