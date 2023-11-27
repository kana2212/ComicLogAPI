package com.example.Comic_Log_API.repository;

import com.example.Comic_Log_API.entity.Comics;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;
import java.util.Optional;

@Mapper
public interface ComicLogMapper {

    @Select("SELECT * FROM comics")
    List<Comics> findAll();

    @Select("SELECT * FROM comics WHERE id = #{id}")
    Optional<Comics> findById(Integer id);

    @Insert("INSERT INTO comics (comic_service_name,comic_title,volumes) VALUES (#{comicServiceName}, #{comicTitle},#{volumes})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void createComics(Comics comics);

    @Update("UPDATE comics SET comic_service_name = #{comicServiceName}, comic_title = #{comicTitle}, volumes = #{volumes} WHERE id = #{id}")
    void updateComics(Integer id,String comicServiceName, String comicTitle, int volumes);

    @Delete("DELETE FROM comics WHERE id = #{id}")
    void deleteComics(Integer id);
}
