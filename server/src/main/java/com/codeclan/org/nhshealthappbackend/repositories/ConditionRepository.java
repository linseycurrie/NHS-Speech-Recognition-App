package com.codeclan.org.nhshealthappbackend.repositories;

import com.codeclan.org.nhshealthappbackend.models.Condition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConditionRepository extends JpaRepository<Condition, Long> {
//        List<Condition> findDistinctConditionsByName(String conditionName);
}
