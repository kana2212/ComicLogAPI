package com.example.Comic_Log_API.repository;

import com.example.Comic_Log_API.entity.Comics;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Optional;

@Mapper
public interface ComicLogMapper {

        @Select("SELECT * FROM comics")
        List<Comics> findAll();

        @Select("SELECT * FROM comics WHERE id = #{id}")
        Optional<Comics> findById(Integer id);
}
