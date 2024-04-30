package com.example.lab3;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Map;


@Controller
public class EarthquakeController {
    private final Earthquake earthquake;

    public EarthquakeController(Earthquake earthquake) {
        this.earthquake = earthquake;
    }

    @GetMapping("/earthquakes")
    public String getEarthquakeTable(Model model) throws IOException {
        List<Earthquake> earthquakeInfos = readJsonFileAndExtractInfo(earthquake);
        model.addAttribute("earthquakeInfos", earthquakeInfos);
        return "earthquake";
    }

    private List<Earthquake> readJsonFileAndExtractInfo(Earthquake earthquake) throws IOException {
        ClassLoader classLoader = getClass().getClassLoader();
        File file = new File(classLoader.getResource("templates/json.json").getFile());
        String jsonContent = Files.readString(file.toPath());
        List<Map<String, Object>> earthquakes = new ObjectMapper().readValue(jsonContent, new TypeReference<>() {});

        List<Earthquake> earthquakeInfos = new ArrayList<>();
        for (Map<String, Object> quake : earthquakes) {
            String time = (String) quake.get("time");
            LocalDateTime dateTime = LocalDateTime.parse(time, DateTimeFormatter.ISO_DATE_TIME);
            String formattedTime = dateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss", Locale.ENGLISH));
            double latitude = ((Number) quake.get("latitude")).doubleValue();
            double longitude = ((Number) quake.get("longitude")).doubleValue();
            double depth = ((Number) quake.get("depth")).doubleValue();
            double mag = ((Number) quake.get("mag")).doubleValue();
            String place = (String) quake.get("place");

            earthquakeInfos.add(new Earthquake(formattedTime, latitude, longitude, depth, mag, place));
        }
        return earthquakeInfos;
    }


}