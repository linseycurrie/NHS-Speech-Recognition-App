package com.codeclan.org.nhshealthappbackend.models;

import java.util.ArrayList;
import java.util.List;

public class Condition {

    private Long id;
    private String conditionName;
    private String conditionType;
    private String dateDiagnosed;
    private List<String> medication;

    public Condition(String conditionName, String conditionType, String dateDiagnosed, List<String> medication) {
        this.conditionName = conditionName;
        this.conditionType = conditionType;
        this.dateDiagnosed = dateDiagnosed;
        this.medication = new ArrayList<String>();
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

    public String getConditionType() {
        return conditionType;
    }

    public void setConditionType(String conditionType) {
        this.conditionType = conditionType;
    }

    public String getDateDiagnosed() {
        return dateDiagnosed;
    }

    public void setDateDiagnosed(String dateDiagnosed) {
        this.dateDiagnosed = dateDiagnosed;
    }

    public List<String> getMedication() {
        return medication;
    }

    public void setMedication(List<String> medication) {
        this.medication = medication;
    }
}
