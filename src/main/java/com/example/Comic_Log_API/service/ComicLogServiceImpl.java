package com.example.Comic_Log_API.service;

import com.example.Comic_Log_API.entity.Comic;
import com.example.Comic_Log_API.exception.ResourceNotFoundException;
import com.example.Comic_Log_API.repository.ComicLogMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComicLogServiceImpl implements ComicLogService {
    private final ComicLogMapper comicLogMapper;

    public ComicLogServiceImpl(ComicLogMapper comicLogMapper) {
        this.comicLogMapper = comicLogMapper;
    }

    @Override
    public List<Comic> findAll() {
        return comicLogMapper.findAll();
    }


    @Override
    public Comic findById(Integer id) {
        Optional<Comic> comics = this.comicLogMapper.findById(id);
        if (comics.isPresent()) {
            return comics.get();
        } else {
            throw new com.example.Comic_Log_API.exception.ResourceNotFoundException("resource not found");
        }
    }

    @Override
    public Comic createComics(String comicServiceName, String comicTitle, Integer volumes) {
        Comic comic = new Comic(comicServiceName, comicTitle, volumes);
        comicLogMapper.createComics(comic);
        return comic;
    }

    @Override
    public void updateComics(Integer id, String comicServiceName,String comicTitle,Integer volumes) {
        Comic updateComic = comicLogMapper.findById(id).orElseThrow(() -> new ResourceNotFoundException("resource not found"));
        comicLogMapper.updateComics(id,comicServiceName,comicTitle,volumes);
    }


    @Override
    public void deleteComics(Integer id) {
        comicLogMapper.deleteComics(id);
    }

}
