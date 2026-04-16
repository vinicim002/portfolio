package com.vinicius.backend.repositories;

import com.vinicius.backend.entities.Message;
import com.vinicius.backend.entities.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
