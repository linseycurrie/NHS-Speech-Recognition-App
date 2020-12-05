package com.codeclan.org.nhshealthappbackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "conditions")
public class Condition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "condition_name")
    private String conditionName;
//    @Column(name = "condition_type")
//    private String conditionType;
//    @Column(name = "date_diagnosed")
//    private String dateDiagnosed;

    @JsonIgnoreProperties(value = "favourites")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_conditions",
            joinColumns = {@JoinColumn(name = "condition_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)}
    )
    private List<User> users;

    public Condition(String conditionName) {
        this.conditionName = conditionName;
//        this.conditionType = conditionType;
//        this.dateDiagnosed = dateDiagnosed;
        this.users = new ArrayList<>();
    }

    public Condition() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getConditionName() {
        return conditionName;
    }

    public void setConditionName(String conditionName) {
        this.conditionName = conditionName;
    }

//    public String getConditionType() {
//        return conditionType;
//    }
//
//    public void setConditionType(String conditionType) {
//        this.conditionType = conditionType;
//    }
//
//    public String getDateDiagnosed() {
//        return dateDiagnosed;
//    }
//
//    public void setDateDiagnosed(String dateDiagnosed) {
//        this.dateDiagnosed = dateDiagnosed;
//    }

}
