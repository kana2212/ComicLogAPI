package com.example.Comic_Log_API.service;

import com.example.Comic_Log_API.entity.Comics;
import com.example.Comic_Log_API.exception.ResourceNotFoundException;
import com.example.Comic_Log_API.repository.ComicLogMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComicLogServiceImpl implements ComicLogService{
    private final ComicLogMapper comicLogMapper;
    public ComicLogServiceImpl(ComicLogMapper comicLogMapper) {
        this.comicLogMapper = comicLogMapper;
    }

    @Override
    public List<Comics> findAll() {
        return comicLogMapper.findAll();
    }


    @Override
    public Comics findById(Integer id) {
        Optional<Comics> comics = this.comicLogMapper.findById(id);
        if (comics.isPresent()) {
            return comics.get();
        } else {
            throw new com.example.Comic_Log_API.exception.ResourceNotFoundException("resource not found");
        }
    }

    @Override
    public Comics createComics(String comicServiceName, String comicTitle, int volumes) {
        Comics comics = new Comics(comicServiceName, comicTitle,volumes);
        comicLogMapper.createComics(comics);
        return comics;
    }

    @Override
    public void updateComics(Integer id, String comicServiceName,String comicTitle,int volumes) {
        Comics updateComics = comicLogMapper.findById(id).orElseThrow(() -> new ResourceNotFoundException("resource not found"));
        comicLogMapper.updateComics(id,comicServiceName,comicTitle,volumes);
    }

}
