package com.codeclan.org.nhshealthappbackend.controllers;

import com.codeclan.org.nhshealthappbackend.models.Favourite;
import com.codeclan.org.nhshealthappbackend.models.Reminder;
import com.codeclan.org.nhshealthappbackend.repositories.ReminderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReminderController {

    @Autowired
    ReminderRepository reminderRepository;

    @GetMapping(value = "/reminders")
    public ResponseEntity<List<Reminder>> getAllReminders() {
        return new ResponseEntity<>(reminderRepository.findAll(), HttpStatus.OK);
    }
//
//    @GetMapping(value = "/reminders/{id}")
//    public ResponseEntity getReminder(@PathVariable Long id) {
//        return new ResponseEntity<>(reminderRepository.findById(id), HttpStatus.OK);
//    }
//
//    @PostMapping(value = "/reminders")
//    public ResponseEntity<Reminder> postReminder(@RequestBody Reminder reminder) {
//        reminderRepository.save(reminder);
//        return new ResponseEntity<>(reminder, HttpStatus.CREATED);
//    }
//
//    @PatchMapping(value = "/reminders/{id}")
//    public ResponseEntity<Reminder> updateReminder(@RequestBody Reminder reminder){
//        reminderRepository.save(reminder);
//        return new ResponseEntity<>(reminder, HttpStatus.OK);
//    }
//
//    @DeleteMapping(value = "/reminders/{id}")
//    public ResponseEntity<Reminder> deleteReminder(@PathVariable Long id) {
//        Reminder found = reminderRepository.getOne(id);
//        reminderRepository.delete(found);
//        return new ResponseEntity<>(found, HttpStatus.OK);
//    }
}
