package com.example.Comic_Log_API.controller;

import com.example.Comic_Log_API.entity.Comics;
import com.example.Comic_Log_API.service.ComicLogService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ComicLogController {
    private final ComicLogService comicLogService;

    public ComicLogController(ComicLogService comicLogService) {
        this.comicLogService = comicLogService;
    }

    @GetMapping("/comiclogs")
    public List<Comics> findAll() {
        return comicLogService.findAll();
    }

    @GetMapping("/comiclogs/{id}")
    public Comics getComics(@PathVariable("id") Integer id) {
        return comicLogService.findById(id);
    }
}
