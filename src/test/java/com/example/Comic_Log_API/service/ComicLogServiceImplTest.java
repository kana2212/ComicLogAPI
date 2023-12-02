package com.example.Comic_Log_API.service;

import com.example.Comic_Log_API.entity.Comics;
import com.example.Comic_Log_API.exception.ResourceNotFoundException;
import com.example.Comic_Log_API.repository.ComicLogMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;


import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class ComicLogServiceImplTest {
    @InjectMocks
    ComicLogServiceImpl comicLogServiceImpl;
    @Mock
    ComicLogMapper comicLogMapper;

    @Test
    public void コミックの情報が全権取得できること() throws Exception {
        List<Comics> comicsList = List.of(
                new Comics("コミックシーモア", "鬼滅の刃", 22),
                new Comics("Renta!", "葬送のフリーレン", 11),
                new Comics("ダンジョン飯", "Kindle", 12));
        doReturn(comicsList).when(comicLogMapper).findAll();
        List<Comics> actual = comicLogServiceImpl.findAll();
        assertThat(actual).isEqualTo(comicsList);
        verify(comicLogMapper, times(1)).findAll();
    }

    @Test
    public void 存在するIDを指定した時に正常にコミックの情報が返されること() {
        doReturn(Optional.of(new Comics("コミックシーモア", "鬼滅の刃", 22))).when(comicLogMapper).findById(1);

        Comics actual = comicLogServiceImpl.findById(1);
        assertThat(actual).isEqualTo(new Comics("コミックシーモア", "鬼滅の刃", 22));
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
        Comics testComics = new Comics("楽天ブックス", "薬屋のひとりごと", 11);
        comicLogServiceImpl.createComics("楽天ブックス", "薬屋のひとりごと", 11);
        Mockito.verify(comicLogMapper).createComics(testComics);
    }

    @Test
    public void 指定したIDのコミック情報を更新できること() {
        Comics updateComics = new Comics("コミックシーモア", "鬼滅の刃", 23);
        doReturn(Optional.of(new Comics("コミックシーモア", "鬼滅の刃", 23)))
                .when(comicLogMapper).findById(1);

        comicLogServiceImpl.updateComics(1, "コミックシーモア", "鬼滅の刃", 23);
        verify(comicLogMapper, times(1)).findById(1);
        verify(comicLogMapper, times(1)).updateComics(1, "コミックシーモア", "鬼滅の刃", 23);
    }

    @Test
    public void 更新対象のIDが存在しない場合に例外をスローできること() throws Exception {
        Comics updateComics = new Comics(60, "コミックフェスタ", "僕のヒーローアカデミア", 35);

        assertThatThrownBy(() -> comicLogServiceImpl.updateComics(60, "コミックフェスタ", "僕のヒーローアカデミア", 35))
                .isInstanceOf(ResourceNotFoundException.class);
        verify(comicLogMapper, never()).updateComics(60, "コミックフェスタ", "僕のヒーローアカデミア", 35);

    }
    @Test
    public void 指定したIDを削除できること() {
        comicLogServiceImpl.deleteComics(1);
        verify(comicLogMapper, times(1)).deleteComics(1);
    }
}
