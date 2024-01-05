package com.example.Comic_Log_API.repository;

import java.util.List;
import java.util.Optional;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.example.Comic_Log_API.entity.Comic;

@Mapper
public interface ComicLogMapper {

    @Select("SELECT * FROM comics WHERE id = #{id}")
    Optional<Comic> findById(Integer id);

    @Select("<script>"
            + " SELECT"
            + " comic_service_name, comic_title, volumes, status"
            + " FROM comics"
            + "<where>"
            + "<if test='comicServiceName != null and comicServiceName != \"\"'>"
            + "  AND comic_service_name LIKE '%${comicServiceName}%'"
            + "</if>"
            + "<if test='comicTitle != null and comicTitle != \"\"'>"
            + "  AND comic_title LIKE '%${comicTitle}%'"
            + "</if>"
            + "<if test='volumes != null'>"
            + "  AND volumes = ${volumes}"
            + "</if>"
            + "<if test='status != null and status != \"\"'>"
            + "  AND status LIKE '${status}'"
            + "</if>"
            + "</where>"
            + "</script>")
    List<Comic> findByConditions(String comicServiceName, String comicTitle, Integer volumes, String status);

    @Insert("INSERT INTO comics (comic_service_name,comic_title,volumes,status) VALUES (#{comicServiceName}, #{comicTitle},#{volumes},#{status})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void createComics(Comic comic);

    @Update("UPDATE comics SET comic_service_name = #{comicServiceName}, comic_title = #{comicTitle}, volumes = #{volumes}, status = #{status} WHERE id = #{id}")
    void updateComics(Integer id, String comicServiceName, String comicTitle, Integer volumes, String status);

    @Delete("DELETE FROM comics WHERE id = #{id}")
    void deleteComics(Integer id);
}
