package com.example.lab2;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class lab2Controller {
  @GetMapping("/lab2")
  public String showTable (Model model){
     return "lab2";
  }  
}

