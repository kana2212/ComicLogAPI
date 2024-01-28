package com.example.comiclogapi.service;

import java.util.List;

import com.example.comiclogapi.entity.Comic;

public interface ComicLogService {

    List<Comic> findByConditions(Integer id, String comicServiceName, String comicTitle, Integer volumes,
            String status);

    Comic findById(Integer id);

    Comic createComics(String comicServiceName, String comicTitle, Integer volumes, String status);

    void updateComics(Integer id, String comicServiceName, String comicTitle, Integer volumes, String status);

    void deleteComics(Integer id);

}
