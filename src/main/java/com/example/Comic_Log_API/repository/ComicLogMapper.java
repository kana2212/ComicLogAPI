package com.example.Comic_Log_API.repository;

import com.example.Comic_Log_API.entity.Comics;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
@Mapper
public interface ComicLogMapper {

        @Select("SELECT * FROM comics")
        List<Comics> findAll();

}
