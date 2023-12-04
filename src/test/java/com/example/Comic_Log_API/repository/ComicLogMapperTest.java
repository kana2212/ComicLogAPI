package com.example.Comic_Log_API.repository;

import com.example.Comic_Log_API.entity.Comic;
import com.github.database.rider.core.api.dataset.DataSet;
import com.github.database.rider.spring.api.DBRider;
import org.junit.jupiter.api.Test;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DBRider
@MybatisTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ComicLogMapperTest {
    @Autowired
    ComicLogMapper comicLogMapper;
@Test
@DataSet(value = "datasets/comic.yml")
@Transactional
    void すべてのコミック情報が取得できること() {
        List<Comic> comiclist = comicLogMapper.findAll();
    assertThat(comiclist)
            .hasSize(3)
            .contains(
                    new Comic(1,"コミックシーモア","鬼滅の刃",22),
                    new Comic(2,"Renta!","葬送のフリーレン",11),
                    new Comic(3,"Kindle","ダンジョン飯",12)
            );
    }
}
