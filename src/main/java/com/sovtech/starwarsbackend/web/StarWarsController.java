package com.sovtech.starwarsbackend.web;

import com.sovtech.starwarsbackend.person.PersonService;
import com.sovtech.starwarsbackend.person.model.Person;
import com.sovtech.starwarsbackend.person.model.PersonResponse;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.Optional;

@Controller
public class StarWarsController {

    final PersonService personService;

    public StarWarsController(PersonService personService) {
        this.personService = personService;
    }

    @QueryMapping
    public Optional<Person> person(@Argument String name) {
        return personService.person(name);
    }

    @QueryMapping
    public PersonResponse people(@Argument Integer page) {
        int pageNumber = page > 0 ? page : 1; //Page defaults to 1
        return personService.people(pageNumber);
    }
}
