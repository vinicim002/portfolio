package com.vinicius.backend.config;

import com.vinicius.backend.interceptor.RateLimitInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // Injeta o interceptor que criamos
    @Autowired
    private RateLimitInterceptor rateLimitInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(rateLimitInterceptor)
                // Define em quais rotas o interceptor vai atuar
                // /messages/** significa: /messages e qualquer coisa depois
                // ex: /messages, /messages/1, /messages/qualquercoisa
                .addPathPatterns("/messages/**");
    }
}