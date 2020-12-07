package com.codeclan.org.nhshealthappbackend.repositories;

import com.codeclan.org.nhshealthappbackend.models.Reminder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReminderRepository extends JpaRepository<Reminder, Long> {
}
