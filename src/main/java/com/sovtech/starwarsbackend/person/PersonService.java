package com.sovtech.starwarsbackend.person;

import com.sovtech.starwarsbackend.person.model.Person;
import com.sovtech.starwarsbackend.person.model.PersonResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Optional;

@Service
public class PersonService {

    @Autowired WebClient starWarsClient;

    public Optional<Person> person(String name) {
        PersonResponse response = starWarsClient.get()
                .uri(uriBuilder -> uriBuilder.queryParam("search", name).build())
                .retrieve()
                .toEntity(PersonResponse.class)
                .block()
                .getBody(); //guaranteed to always return a body (synchronous chain)

        return response.results.stream().findFirst();
    }

    public PersonResponse people(int page) {

        return starWarsClient.get()
                .uri(uriBuilder -> uriBuilder.queryParam("page", page).build())
                .retrieve()
                .toEntity(PersonResponse.class)
                .block()
                .getBody();
    }
}
