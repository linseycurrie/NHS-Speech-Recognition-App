package com.codeclan.org.nhshealthappbackend.components;

import com.codeclan.org.nhshealthappbackend.models.Favourite;
import com.codeclan.org.nhshealthappbackend.models.Reminder;
import com.codeclan.org.nhshealthappbackend.models.User;
import com.codeclan.org.nhshealthappbackend.repositories.ConditionRepository;
import com.codeclan.org.nhshealthappbackend.repositories.FavouriteRepository;
import com.codeclan.org.nhshealthappbackend.repositories.ReminderRepository;
import com.codeclan.org.nhshealthappbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ConditionRepository conditionRepository;

    @Autowired
    FavouriteRepository favouriteRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ReminderRepository reminderRepository;

    public DataLoader() {}

    public void run(ApplicationArguments args) {

        User linsey = new User("Linsey", "Currie", "07/05/1987", "linsey@gmail.com","G81 6PT");
        userRepository.save(linsey);

        User david = new User("David", "Strain", "15/03/1984", "david@gmail.com", "G3 2AA");
        userRepository.save(david);

        User tj = new User("TJ","Pataria", "05/02/1985", "tj@gmail.com", "G63 7JA");
        userRepository.save(tj);

        Favourite fav1 = new Favourite("Diabetes", "condition","nhs.co.uk");
        favouriteRepository.save(fav1);

        Favourite fav2 = new Favourite("Arthritis", "condition","nhs.co.uk");
        favouriteRepository.save(fav2);

        Favourite fav3 = new Favourite("Bad Breath", "condition","nhs.co.uk");
        favouriteRepository.save(fav3);

        Reminder reminder1 = new Reminder("New Filling Dentist","2020-12-08T10:30:00", "2020-12-08T12:00:00", linsey);
        reminderRepository.save(reminder1);

        linsey.addFavourite(fav1);
        userRepository.save(linsey);

        david.addFavourite(fav2);
        userRepository.save(david);

        tj.addFavourite(fav3);
        userRepository.save(tj);

        david.addReminder(reminder1);
        userRepository.save(david);

    }
}
