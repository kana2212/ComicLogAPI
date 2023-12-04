package com.example.Comic_Log_API.service;

import com.example.Comic_Log_API.entity.Comic;

import java.util.List;

public interface ComicLogService {

    List<Comic> findAll();

    Comic findById(Integer id);

    Comic createComics(String comicServiceName, String comicTitle, Integer volumes);

    void updateComics(Integer id,String comicServiceName, String comicTitle, Integer volumes);

    void deleteComics(Integer id);

}
