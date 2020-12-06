package com.codeclan.org.nhshealthappbackend.controllers;

import com.codeclan.org.nhshealthappbackend.models.Favourite;
import com.codeclan.org.nhshealthappbackend.models.User;
import com.codeclan.org.nhshealthappbackend.repositories.FavouriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FavouriteController {

    @Autowired
    FavouriteRepository favouriteRepository;

//    @GetMapping(value = "/favourites")
//    public ResponseEntity<List<Favourite>> getAllFavourites() {
//        return new ResponseEntity<>(favouriteRepository.findAll(), HttpStatus.OK);
//    }
//
//    @GetMapping(value = "/favourites/{id}")
//    public ResponseEntity getFavourite(@PathVariable Long id) {
//        return new ResponseEntity<>(favouriteRepository.findById(id), HttpStatus.OK);
//    }
//
//    @PostMapping(value = "/")
//    public ResponseEntity<Favourite> postFavourite(@RequestBody Favourite favourite) {
//        favouriteRepository.save(favourite);
//        return new ResponseEntity<>(favourite, HttpStatus.CREATED);
//    }
//
//    @PatchMapping(value = "/favourites/{id}")
//    public ResponseEntity<Favourite> updateFavourite(@RequestBody Favourite favourite){
//        favouriteRepository.save(favourite);
//        return new ResponseEntity<>(favourite, HttpStatus.OK);
//    }
//
//    @DeleteMapping(value = "/favourites/{id}")
//    public ResponseEntity<Favourite> deleteFavourite(@PathVariable Long id) {
//        Favourite found = favouriteRepository.getOne(id);
//        favouriteRepository.delete(found);
//        return new ResponseEntity<>(found, HttpStatus.OK);
//    }
}
