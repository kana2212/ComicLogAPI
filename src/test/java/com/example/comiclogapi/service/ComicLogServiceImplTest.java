package com.example.comiclogapi.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.comiclogapi.entity.Comic;
import com.example.comiclogapi.exception.ResourceNotFoundException;
import com.example.comiclogapi.repository.ComicLogMapper;

@ExtendWith(MockitoExtension.class)
public class ComicLogServiceImplTest {
    @InjectMocks
    ComicLogServiceImpl comicLogServiceImpl;
    @Mock
    ComicLogMapper comicLogMapper;

    @Test
    public void 存在するIDを指定した時に正常にコミックの情報が返されること() {
        doReturn(Optional.of(new Comic("コミックシーモア", "鬼滅の刃", 23, "完結"))).when(comicLogMapper).findById(1);

        Comic actual = comicLogServiceImpl.findById(1);
        assertThat(actual).isEqualTo(new Comic("コミックシーモア", "鬼滅の刃", 23, "完結"));
        verify(comicLogMapper, times(1)).findById(1);
    }

    @Test
    public void 存在しないIDを指定した時にResourceNotFoundExceptionが発生すること() {
        doReturn(Optional.empty()).when(comicLogMapper).findById(99);

        assertThatThrownBy(() -> comicLogServiceImpl.findById(99))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessage("resource not found");
    }

    @Test
    public void 新規にコミック情報を登録できること() {
        Comic testComic = new Comic("楽天ブックス", "薬屋のひとりごと", 11, "続");
        comicLogServiceImpl.createComics("楽天ブックス", "薬屋のひとりごと", 11, "続");
        Mockito.verify(comicLogMapper).createComics(testComic);
    }

    @Test
    public void 指定したIDのコミック情報を更新できること() {
        Comic updateComic = new Comic("Renta!", "葬送のフリーレン", 11, "続");
        doReturn(Optional.of(new Comic("Renta!", "葬送のフリーレン", 11, "続")))
                .when(comicLogMapper).findById(2);

        comicLogServiceImpl.updateComics(2, "Renta!", "葬送のフリーレン", 12, "続");
        verify(comicLogMapper, times(1)).findById(2);
        verify(comicLogMapper, times(1)).updateComics(2, "Renta!", "葬送のフリーレン", 12, "続");
    }

    @Test
    public void 更新対象のIDが存在しない場合に例外をスローできること() throws Exception {
        Comic updateComic = new Comic(60, "コミックフェスタ", "僕のヒーローアカデミア", 35, "続");

        assertThatThrownBy(() -> comicLogServiceImpl.updateComics(60, "コミックフェスタ", "僕のヒーローアカデミア", 35, "続"))
                .isInstanceOf(ResourceNotFoundException.class);
        verify(comicLogMapper, never()).updateComics(60, "コミックフェスタ", "僕のヒーローアカデミア", 35, "続");

    }

    @Test
    public void 指定したIDを削除できること() {
        comicLogServiceImpl.deleteComics(1);
        verify(comicLogMapper, times(1)).deleteComics(1);
    }
}
