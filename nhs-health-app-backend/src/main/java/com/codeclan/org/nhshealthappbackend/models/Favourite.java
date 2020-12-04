package com.codeclan.org.nhshealthappbackend.models;

public class Favourite {

    private Long id;
    private String title;
    private String description;
    private String url;

    public Favourite(String title, String description, String url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }

    public Favourite() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
