package com.vinicius.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
                .addMapping("/**")  // Permitir em todos os endpoints
                .allowedOrigins(
                        "http://localhost:3000",      // React (desenvolvimento)
                        "http://localhost:3001"       // React (outra porta, se usar)
                        // "https://seusite.com"      // Descomente em produção
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);  // Cache por 1 hora
    }
}