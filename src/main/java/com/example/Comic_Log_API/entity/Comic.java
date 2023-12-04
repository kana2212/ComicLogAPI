package com.example.Comic_Log_API.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.Objects;
@Getter
@Setter
public class Comic {

    private Integer id;
    private String comicServiceName;
    private String comicTitle;
    private Integer volumes;

    public Comic(Integer id, String comicServiceName, String comicTitle, Integer volumes) {
        this.comicServiceName = comicServiceName;
        this.comicTitle = comicTitle;
        this.volumes = volumes;
    }

    public Comic(String comicServiceName, String comicTitle, Integer volumes) {
        this.comicServiceName = comicServiceName;
        this.comicTitle = comicTitle;
        this.volumes = volumes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comic comic = (Comic) o;
        return Objects.equals(id,comic.id) && Objects.equals(comicServiceName, comic.comicServiceName) && Objects.equals(comicTitle, comic.comicTitle) && Objects.equals(volumes, comic.volumes);
    }


    @Override
    public int hashCode() {
        return Objects.hash(id, comicServiceName, comicTitle, volumes);
    }

}