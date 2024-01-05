package com.example.Comic_Log_API.service;

import com.example.Comic_Log_API.entity.Comic;

public interface ComicLogService {

    Comic findById(Integer id);

    Comic createComics(String comicServiceName, String comicTitle, Integer volumes, String status);

    void updateComics(Integer id, String comicServiceName, String comicTitle, Integer volumes, String status);

    void deleteComics(Integer id);

}
