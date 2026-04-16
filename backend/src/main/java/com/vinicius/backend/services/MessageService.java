package com.vinicius.backend.services;

import com.vinicius.backend.entities.Message;
import com.vinicius.backend.repositories.MessageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class MessageService {

    private final MessageRepository messageRepository;
    private final JavaMailSender javaMailSender;

    // Seu email admin (para receber as mensagens)
    private static final String ADMIN_EMAIL = "viniciusvilanova7@gmail.com";

    public MessageService(
            MessageRepository messageRepository,
            JavaMailSender javaMailSender
    ) {
        this.messageRepository = messageRepository;
        this.javaMailSender = javaMailSender;
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
            log.info("Preparando envio de email");
            sendEmailNotification(savedMessage);
            log.info("Email enviado com sucesso!");
        } catch (Exception e) {
            log.error("Erro ao enviar email: {}", e.getMessage());
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

    //Envia notificação de email quando uma mensagem é recebida

    private void sendEmailNotification(Message message) {

        SimpleMailMessage email = new SimpleMailMessage();

        email.setFrom(message.getEmail());        // De quem vem
        email.setTo(ADMIN_EMAIL);                 // Para onde vai (seu email)
        email.setReplyTo(message.getEmail());     // Responder para o visitante
        email.setSubject("🔔 Nova mensagem de contato: " + message.getSubject());

        // Corpo do email bem formatado
        String emailBody = String.format(
                "Você recebeu uma nova mensagem de contato!\n\n" +
                        "═════════════════════════════════════════\n" +
                        "📝 DETALHES DA MENSAGEM\n" +
                        "═════════════════════════════════════════\n\n" +
                        "👤 Nome: %s\n" +
                        "📧 Email: %s\n" +
                        "📌 Assunto: %s\n" +
                        "⏰ Data/Hora: %s\n\n" +
                        "───────────────────────────────────────────\n" +
                        "💬 MENSAGEM:\n" +
                        "───────────────────────────────────────────\n\n" +
                        "%s\n\n" +
                        "═════════════════════════════════════════\n\n" +
                        "✉️  Para responder, responda este email ou " +
                        "clique em 'Responder' para enviar direto para %s",
                message.getName(),
                message.getEmail(),
                message.getSubject(),
                message.getSendAt(),
                message.getBody(),
                message.getEmail()
        );

        email.setText(emailBody);

        // Enviar
        javaMailSender.send(email);
    }
}