package com.sovtech.starwarsbackend.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClientForwardController {

    @GetMapping(value = {"/{path:^(?!graphql)[^\\.]*}", "/{path:^(?!graphql).*}/**/{path:[^\\.]*}"})
    public String forward() {
        return "/";
    }
}
