package com.example.Comic_Log_API.service;

import com.example.Comic_Log_API.entity.Comics;

import java.util.List;

public interface ComicLogService {

    List<Comics> findAll();

    Comics findById(Integer id);

    Comics createComics(String comicServiceName, String comicTitle, int volumes);

    void updateComics(Integer id,String comicServiceName, String comicTitle, int volumes);

    void deleteComics(Integer id);

}
