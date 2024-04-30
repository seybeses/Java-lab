package com.example.lab3;
import java.util.Objects;

import org.springframework.stereotype.Component;

@Component
public class Earthquake {
    private String time;
    private double latitude;
    private double longitude;
    private double depth;
    private double mag;
    private String place;


    public Earthquake() {
    }

    public Earthquake(String time, double latitude, double longitude, double depth, double mag, String place) {
        this.time = time;
        this.latitude = latitude;
        this.longitude = longitude;
        this.depth = depth;
        this.mag = mag;
        this.place = place;
    }

    public String getTime() {
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public double getLatitude() {
        return this.latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return this.longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getDepth() {
        return this.depth;
    }

    public void setDepth(double depth) {
        this.depth = depth;
    }

    public double getMag() {
        return this.mag;
    }

    public void setMag(double mag) {
        this.mag = mag;
    }

    public String getPlace() {
        return this.place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Earthquake time(String time) {
        setTime(time);
        return this;
    }

    public Earthquake latitude(double latitude) {
        setLatitude(latitude);
        return this;
    }

    public Earthquake longitude(double longitude) {
        setLongitude(longitude);
        return this;
    }

    public Earthquake depth(double depth) {
        setDepth(depth);
        return this;
    }

    public Earthquake mag(double mag) {
        setMag(mag);
        return this;
    }

    public Earthquake place(String place) {
        setPlace(place);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Earthquake)) {
            return false;
        }
        Earthquake earthquake = (Earthquake) o;
        return Objects.equals(time, earthquake.time) && latitude == earthquake.latitude && longitude == earthquake.longitude && depth == earthquake.depth && mag == earthquake.mag && Objects.equals(place, earthquake.place);
    }

    @Override
    public int hashCode() {
        return Objects.hash(time, latitude, longitude, depth, mag, place);
    }

    @Override
    public String toString() {
        return "{" +
            " time='" + getTime() + "'" +
            ", latitude='" + getLatitude() + "'" +
            ", longitude='" + getLongitude() + "'" +
            ", depth='" + getDepth() + "'" +
            ", mag='" + getMag() + "'" +
            ", place='" + getPlace() + "'" +
            "}";
    }
    

}
