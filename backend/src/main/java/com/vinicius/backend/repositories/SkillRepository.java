package com.vinicius.backend.repositories;

import com.vinicius.backend.entities.Project;
import com.vinicius.backend.entities.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {
}
