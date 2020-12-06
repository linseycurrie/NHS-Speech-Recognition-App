package com.codeclan.org.nhshealthappbackend.controllers;

import com.codeclan.org.nhshealthappbackend.models.Condition;
import com.codeclan.org.nhshealthappbackend.models.Favourite;
import com.codeclan.org.nhshealthappbackend.models.User;
import com.codeclan.org.nhshealthappbackend.repositories.ConditionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ConditionController {

    @Autowired
    ConditionRepository conditionRepository;

    @GetMapping(value = "/conditions")
    public ResponseEntity<List<Condition>> getAllConditions() {
        return new ResponseEntity<>(conditionRepository.findAll(), HttpStatus.OK);
    }

//    @GetMapping(value = "/conditions/{id}")
//    public ResponseEntity getCondition(@PathVariable Long id) {
//        return new ResponseEntity<>(conditionRepository.findById(id), HttpStatus.OK);
//    }
//
//    @PostMapping(value = "/conditions")
//    public ResponseEntity<Condition> postCondition(@RequestBody Condition condition) {
//        conditionRepository.save(condition);
//        return new ResponseEntity<>(condition, HttpStatus.CREATED);
//    }
//
//    @PatchMapping(value = "/conditions/{id}")
//    public ResponseEntity<Condition> updateCondition(@RequestBody Condition condition){
//        conditionRepository.save(condition);
//        return new ResponseEntity<>(condition, HttpStatus.OK);
//    }
//
//    @DeleteMapping(value = "/conditions/{id}")
//    public ResponseEntity<Condition> deleteCondition(@PathVariable Long id) {
//        Condition found = conditionRepository.getOne(id);
//        conditionRepository.delete(found);
//        return new ResponseEntity<>(found, HttpStatus.OK);
//    }

}
