package com.codeclan.org.nhshealthappbackend.repositories;

import com.codeclan.org.nhshealthappbackend.models.Condition;
import com.codeclan.org.nhshealthappbackend.models.Favourite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavouriteRepository extends JpaRepository<Favourite, Long> {
//    List<Favourite> findFavouriteByUsersCondition(Condition condition);
}
