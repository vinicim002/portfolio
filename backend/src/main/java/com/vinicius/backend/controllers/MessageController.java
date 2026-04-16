package com.vinicius.backend.controllers;

import com.vinicius.backend.entities.Message;
import com.vinicius.backend.services.MessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/messages")
@Slf4j
public class MessageController {

    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    //GET /messages
    @GetMapping
    public ResponseEntity<List<Message>> getAllMessages() {
        log.info("Requisição GET /messages recebida");
        List<Message> messages = messageService.getAllMessages();
        return ResponseEntity.ok(messages);
    }

    //GET /messages/{id}

    @GetMapping("/{id}")
    public ResponseEntity<Message> getMessageById(@PathVariable Long id) {
        log.info("Requisição GET /messages/{} recebida", id);

        return messageService.getMessageById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<String> createMessage(@RequestBody Message message) {
        try {
            log.info("Requisição POST /messages recebida de: {}", message.getEmail());

            messageService.createMessage(message);

            log.info("Mensagem criada e email enviado com sucesso!");

            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body("✅ Mensagem enviada com sucesso! Em breve entraremos em contato.");

        } catch (IllegalArgumentException e) {
            // Erro de validação (dados incompletos)
            log.warn("Erro de validação: {}", e.getMessage());
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("❌ Erro de validação: " + e.getMessage());

        } catch (Exception e) {
            // Erro genérico (problema no servidor)
            log.error("Erro ao processar mensagem: {}", e.getMessage(), e);
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("❌ Erro ao processar sua mensagem. Tente novamente mais tarde.");
        }
    }
}