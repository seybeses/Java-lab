package com.example.lab2;

import java.io.IOException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

@Controller
public class earthquakeController {


  @GetMapping("/detailView_earthquake")
  public String EarthquakeData(Model model) throws IOException{
    String url1 = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=1900-01-01&endtime=2024-01-02&minmagnitude=6.0";
        
    RestTemplate restTemplate = new RestTemplate();
    Map<String, Object> response = restTemplate.getForObject(url1, Map.class);

    List<Map<String, Object>> features = (List<Map<String, Object>>) response.get("features");

    List<Map<String, Object>> earthquakedata = new ArrayList<>();
    
    for (Map<String, Object> feature : features) {
      Map<String, Object> properties = (Map<String, Object>) feature.get("properties");
      String place = (String) properties.get("place");
      long Unixtime = ((Number) properties.get("time")).longValue();
      Double mag =((Number) properties.get("mag")).doubleValue();
      String urll = (String) properties.get("url");

      String time=convertUnixTime(Unixtime);

      Map<String, Object> earthquake=Map.of("place",place,"time",time,"mag",mag,"url",urll);
      earthquakedata.add(earthquake);
    }

    model.addAttribute("earthquakedata", earthquakedata);

    return "detailView_earthquake";
  }


  public String convertUnixTime(long unixTime) {
      Instant instant = Instant.ofEpochMilli(unixTime);
      ZoneId zoneId = ZoneId.systemDefault();
      LocalDateTime dateTime = LocalDateTime.ofInstant(instant, zoneId);

      DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

      String formattedDateTime = dateTime.format(formatter);

      return formattedDateTime;
  }
}



