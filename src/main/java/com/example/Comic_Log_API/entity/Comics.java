package com.example.Comic_Log_API.entity;

public class Comics {
    private Integer id;
    private String comic_service_name;
    private String comic_title;
    private int volumes;

    public Comics(Integer id, String comic_service_name, String comic_title, int volumes) {
        this.id = id;
        this.comic_service_name = comic_service_name;
        this.comic_title = comic_title;
        this.volumes = volumes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getComic_service_name() {
        return comic_service_name;
    }

    public void setComic_service_name(String comic_service_name) {
        this.comic_service_name = comic_service_name;
    }

    public String getComic_title() {
        return comic_title;
    }

    public void setComic_title(String comic_title) {
        this.comic_title = comic_title;
    }

    public int getVolumes() {
        return volumes;
    }

    public void setVolumes(int volumes) {
        this.volumes = volumes;
    }

}
