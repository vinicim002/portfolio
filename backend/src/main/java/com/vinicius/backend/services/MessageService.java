package com.vinicius.backend.services;

import com.vinicius.backend.entities.Message;
import com.vinicius.backend.repositories.MessageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class MessageService {

    private final MessageRepository messageRepository;
    private final EmailService emailService;

    public MessageService(
            MessageRepository messageRepository,
            EmailService emailService
    ) {
        this.messageRepository = messageRepository;
        this.emailService = emailService;
    }

    //POST - Criar nova mensagem e enviar email

    public Message createMessage(Message message) {
        log.info("Validando mensagem de: {}", message.getEmail());

        if (message.getName() == null || message.getName().isBlank()) {
            throw new IllegalArgumentException("O nome é obrigatório.");
        }
        if (message.getEmail() == null || message.getEmail().isBlank()) {
            throw new IllegalArgumentException("O email é obrigatório.");
        }
        if (message.getSubject() == null || message.getSubject().isBlank()) {
            throw new IllegalArgumentException("O assunto é obrigatório.");
        }
        if (message.getBody() == null || message.getBody().isBlank()) {
            throw new IllegalArgumentException("A mensagem é obrigatória.");
        }

        log.info("Salvando mensagem no banco de dados");
        Message savedMessage = messageRepository.save(message);

        try {
            log.info("Preparando envio de email via Resend");
            emailService.sendContactEmail(
                    savedMessage.getName(),
                    savedMessage.getEmail(),
                    savedMessage.getSubject(),
                    savedMessage.getBody()
            );
            log.info("Email enviado com sucesso!");
        } catch (Exception e) {
            log.error("Erro ao enviar email: {}", e.getMessage());
            // Não relança exceção - mensagem já foi salva no BD
        }

        return savedMessage;
    }

    //GET - Consultar todas as mensagens

    public List<Message> getAllMessages() {
        log.info("Buscando todas as mensagens");
        return messageRepository.findAll();
    }

    //GET - Buscar por ID

    public Optional<Message> getMessageById(Long id) {
        log.info("Buscando mensagem com ID: {}", id);
        Optional<Message> message = messageRepository.findById(id);

        if (message.isPresent()) {
            return message;
        }

        log.warn("Mensagem não encontrada com ID: {}", id);
        throw new RuntimeException("Mensagem não encontrada com ID: " + id);
    }
}