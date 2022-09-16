package com.sovtech.starwarsbackend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class BeanProducerConfig {

    @Value("${star.wars.url}")
    String starWarsUrl;

    /***
     * @primary is not required but added to prevent dependency ambiguity when another method
     * returning a WebClient with a different base uri is added.
     * I have decided not to go with @Qualifier because of the use of a String literal in name-binding.
     * This guarantees the most safety for me.
     */
    @Bean
    @Primary
    public WebClient webClient() {
        return WebClient.builder()
                .baseUrl(starWarsUrl)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }
}
