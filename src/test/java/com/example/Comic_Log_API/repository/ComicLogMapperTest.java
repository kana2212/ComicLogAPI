package com.example.comic_log_api.repository;

import static org.assertj.core.api.Assertions.*;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.transaction.annotation.Transactional;

import com.example.comic_log_api.entity.Comic;
import com.github.database.rider.core.api.dataset.DataSet;
import com.github.database.rider.core.api.dataset.ExpectedDataSet;
import com.github.database.rider.spring.api.DBRider;

@DBRider
@MybatisTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ComicLogMapperTest {
    @Autowired
    ComicLogMapper comicLogMapper;

    @Test
    @DataSet(value = "datasets/comicList.yml")
    @Transactional
    void 指定したIDが取得できること() {
        assertThat(comicLogMapper.findById(3))
                .contains(new Comic(3, "Kindle", "ダンジョン飯", 14, "完結"));
    }

    @Test
    @DataSet(value = "datasets/comicEmpty.yml")
    @Transactional
    public void IDが存在しない時はOptionalを返すこと() {
        Optional<Comic> emptyComic = comicLogMapper.findById(4);
        assertThat(emptyComic)
                .isEmpty();
    }

    @Test
    @DataSet(value = "datasets/comicList.yml")
    @ExpectedDataSet(value = "datasets/insert_comic.yml", ignoreCols = "id")
    @Transactional
    public void 新規にコミック情報が登録できること() {
        comicLogMapper.createComics(new Comic(4, "DMMブックス", "月刊少女野崎くん", 13, "続"));
    }

    @Test
    @DataSet(value = "datasets/comicList.yml")
    @ExpectedDataSet(value = "datasets/update_comic.yml")
    @Transactional
    void 指定したIDのコミック情報を更新できること() {
        comicLogMapper.updateComics(2, "Renta!", "葬送のフリーレン", 11, "続");
    }

    @Test
    @DataSet(value = "datasets/comicList.yml")
    @ExpectedDataSet(value = "datasets/delete_comic.yml")
    @Transactional
    void 指定したIDのコミック情報が削除できること() {
        comicLogMapper.deleteComics(3);
    }
}
