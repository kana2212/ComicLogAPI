package com.example.comic_log_api.entity;

import java.util.Objects;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Comic {

    private Integer id;
    private String comicServiceName;
    private String comicTitle;
    private Integer volumes;
    private String status;

    public Comic(Integer id, String comicServiceName, String comicTitle, Integer volumes, String status) {
        this.comicServiceName = comicServiceName;
        this.comicTitle = comicTitle;
        this.volumes = volumes;
        this.id = id;
        this.status = status;
    }

    public Comic(String comicServiceName, String comicTitle, Integer volumes, String status) {
        this.comicServiceName = comicServiceName;
        this.comicTitle = comicTitle;
        this.volumes = volumes;
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Comic comic = (Comic) o;
        return Objects.equals(id, comic.id) && Objects.equals(comicServiceName, comic.comicServiceName)
                && Objects.equals(comicTitle, comic.comicTitle) && Objects.equals(volumes, comic.volumes)
                && Objects.equals(status, comic.status);

    }

    @Override
    public int hashCode() {
        return Objects.hash(id, comicServiceName, comicTitle, volumes, status);
    }

}
