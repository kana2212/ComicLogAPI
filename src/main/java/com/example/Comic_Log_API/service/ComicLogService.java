package com.example.Comic_Log_API.service;

import java.util.List;

import com.example.Comic_Log_API.entity.Comic;

public interface ComicLogService {

    Comic findById(Integer id);

    List<Comic> findByConditions(String comicServiceName, String comicTitle, Integer volumes, String status);

    Comic createComics(String comicServiceName, String comicTitle, Integer volumes, String status);

    void updateComics(Integer id, String comicServiceName, String comicTitle, Integer volumes, String status);

    void deleteComics(Integer id);

}
