package com.prakashsejwani;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class TodoJavaSpringApplication {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

}