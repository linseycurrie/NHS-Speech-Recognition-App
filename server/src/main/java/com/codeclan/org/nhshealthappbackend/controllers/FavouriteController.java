package com.codeclan.org.nhshealthappbackend.controllers;

import com.codeclan.org.nhshealthappbackend.repositories.FavouriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FavouriteController {

    @Autowired
    FavouriteRepository favouriteRepository;
}
