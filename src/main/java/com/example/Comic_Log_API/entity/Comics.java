package com.example.Comic_Log_API.entity;

public class Comics {

    private Integer id;
    private String comicServiceName;
    private String comicTitle;
    private int volumes;

    public Comics(Integer id, String comicServiceName, String comicTitle, int volumes) {
        this.comicServiceName = comicServiceName;
        this.comicTitle = comicTitle;
        this.volumes = volumes;
    }

    public Comics(String comicServiceName, String comicTitle, int volumes) {
        this.comicServiceName = comicServiceName;
        this.comicTitle = comicTitle;
        this.volumes = volumes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getComicServiceName() {
        return comicServiceName;
    }

    public void setComicServiceName(String comicServiceName) {
        this.comicServiceName = comicServiceName;
    }

    public String getComicTitle() {
        return comicTitle;
    }

    public void setComicTitle(String comicTitle) {
        this.comicTitle = comicTitle;
    }

    public int getVolumes() {
        return volumes;
    }

    public void setVolumes(int volumes) {
        this.volumes = volumes;
    }


}
