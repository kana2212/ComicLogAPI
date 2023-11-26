package com.example.Comic_Log_API.controller;

import com.example.Comic_Log_API.entity.Comics;
import com.example.Comic_Log_API.repository.ComicLogMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ComicLogController {
    private final ComicLogMapper comicLogMapper;

    public ComicLogController(ComicLogMapper comicLogMapper) {
        this.comicLogMapper = comicLogMapper;
    }
        @GetMapping("/comiclogs")
        public List<Comics> findAll() {
            return comicLogMapper.findAll();
        }
    }
