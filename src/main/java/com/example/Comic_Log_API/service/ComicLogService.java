package com.example.comic_log_api.service;

import java.util.List;

import com.example.comic_log_api.entity.Comic;

public interface ComicLogService {

    Comic findById(Integer id);

    List<Comic> findByConditions(Integer id, String comicServiceName, String comicTitle, Integer volumes,
            String status);

    Comic createComics(String comicServiceName, String comicTitle, Integer volumes, String status);

    void updateComics(Integer id, String comicServiceName, String comicTitle, Integer volumes, String status);

    void deleteComics(Integer id);

}
