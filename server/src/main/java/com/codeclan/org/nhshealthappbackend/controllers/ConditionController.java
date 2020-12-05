package com.codeclan.org.nhshealthappbackend.controllers;

import com.codeclan.org.nhshealthappbackend.models.Condition;
import com.codeclan.org.nhshealthappbackend.models.User;
import com.codeclan.org.nhshealthappbackend.repositories.ConditionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConditionController {

    @Autowired
    ConditionRepository conditionRepository;

    @PostMapping(value = "/conditions")
    public ResponseEntity<Condition> postCondition(@RequestBody Condition condition) {
        conditionRepository.save(condition);
        return new ResponseEntity<>(condition, HttpStatus.CREATED);
    }

}
