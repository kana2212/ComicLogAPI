package com.example.comiclogapi.controller;

import java.net.URI;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.comiclogapi.entity.Comic;
import com.example.comiclogapi.form.CreateForm;
import com.example.comiclogapi.form.UpdateForm;
import com.example.comiclogapi.service.ComicLogService;

@RestController
@CrossOrigin(origins = "*")
public class ComicLogController {
    private final ComicLogService comicLogService;

    public ComicLogController(ComicLogService comicLogService) {
        this.comicLogService = comicLogService;
    }

    @GetMapping("/comiclogs")
    public List<Comic> getComics() {
        return comicLogService.findAll();
    }

    @GetMapping("/comiclogs/{id}")
    public Comic getComics(@PathVariable("id") Integer id) {
        return comicLogService.findById(id);
    }

    @PostMapping("/comiclogs")
    public ResponseEntity<Map<String, String>> createComics(@RequestBody @Validated CreateForm createForm,
            UriComponentsBuilder uriBuilder) {
        Comic comic = comicLogService.createComics(createForm.getComicServiceName(), createForm.getComicTitle(),
                createForm.getVolumes(), createForm.getStatus());
        URI url = uriBuilder
                .path("/comiclogs/{id}" + comic.getId())
                .build()
                .toUri();
        return ResponseEntity.created(url).body(Map.of("message", "successfully created"));
    }

    @PatchMapping("comiclogs/{id}")
    public ResponseEntity<Map<String, String>> updateComics(@PathVariable("id") Integer id,
            @RequestBody @Validated UpdateForm updateForm) {
        comicLogService.updateComics(updateForm.getId(), updateForm.getComicServiceName(), updateForm.getComicTitle(),
                updateForm.getVolumes(), updateForm.getStatus());
        return ResponseEntity.ok(Map.of("message", "successfully updated"));
    }

    @DeleteMapping("comiclogs/{id}")
    public ResponseEntity<Map<String, String>> deleteComics(@PathVariable("id") Integer id) {
        comicLogService.deleteComics(id);
        return ResponseEntity.ok(Map.of("message", "successfully deleted"));
    }
}
