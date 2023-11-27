package com.example.Comic_Log_API.controller;

import com.example.Comic_Log_API.entity.Comics;
import com.example.Comic_Log_API.form.CreateForm;
import com.example.Comic_Log_API.form.UpdateForm;
import com.example.Comic_Log_API.service.ComicLogService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Map;

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

    @PostMapping("/comiclogs")
    public ResponseEntity<Map<String, String>> createComics(@RequestBody @Validated CreateForm createForm, UriComponentsBuilder uriBuilder) {
        Comics comics = comicLogService.createComics(createForm.getComicServiceName(), createForm.getComicTitle(), createForm.getVolumes());
        URI url = uriBuilder
                .path("/comiclogs/" + comics.getId())
                .build()
                .toUri();
        return ResponseEntity.created(url).body(Map.of("message", "successfully created"));
    }

    @PatchMapping("comiclogs/{id}")
    public ResponseEntity<Map<String, String>> updateComics(@PathVariable("id") Integer id, @RequestBody @Validated UpdateForm updateForm) {
        comicLogService.updateComics(updateForm.getId(), updateForm.getComicServiceName(), updateForm.getComicTitle(), updateForm.getVolumes());
        return ResponseEntity.ok(Map.of("message", "successfully updated"));
    }

    @DeleteMapping("comiclogs/{id}")
    public ResponseEntity<Map<String, String>> deleteComics(@PathVariable("id") Integer id) {
        comicLogService.deleteComics(id);
        return ResponseEntity.ok(Map.of("message", "successfully deleted"));
    }

}
