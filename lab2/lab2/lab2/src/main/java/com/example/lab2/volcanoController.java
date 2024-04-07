package com.example.lab2;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class volcanoController {
  @GetMapping("detailView_volcano")
  public String VolcanoData(Model model) throws IOException {
    ObjectMapper objectMapper = new ObjectMapper();
        
    ClassPathResource resource = new ClassPathResource("templates/volcano.json");
    Map<String, Object>[] data = objectMapper.readValue(resource.getInputStream(), Map[].class);
     
    List<Map<String, Object>> volcanodata = new ArrayList<>();
     
    for (Map<String, Object> item : data) {
      String vnum=(String) item.get("vnum");
      String vn = (String) item.get("vn");
      Double lat = ((Number)item.get("lat")).doubleValue();
      Double lng = ((Number)item.get("lng")).doubleValue();
      Double elevM = ((Number)item.get("elevM")).doubleValue();
      String obsAbbr = (String) item.get("obsAbbr");
      Map<String, Object> volcano = Map.of("vnum",vnum,"vn",vn,"lat",lat,"lng",lng,"elevM",elevM, "obsAbbr", obsAbbr);
      volcanodata.add(volcano);
     }

     // 모델에 리스트 추가
    model.addAttribute("volcanodata", volcanodata);
    return "detailView_volcano";
  }
}
