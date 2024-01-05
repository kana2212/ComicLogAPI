package com.example.Comic_Log_API.integrationtest;

import java.nio.charset.StandardCharsets;

import org.junit.jupiter.api.Test;
import org.skyscreamer.jsonassert.JSONAssert;
import org.skyscreamer.jsonassert.JSONCompareMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

import com.github.database.rider.core.api.dataset.DataSet;
import com.github.database.rider.core.api.dataset.ExpectedDataSet;
import com.github.database.rider.spring.api.DBRider;

@SpringBootTest
@AutoConfigureMockMvc
@DBRider
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ComicRestApiIntegrationTest {

   @Autowired
   MockMvc mockMvc;

   @Test
   @DataSet(value = "datasets/comicList.yml")
   @Transactional
   void 指定したIDのコミック情報を取得した際にステータスコードが200を返すこと() throws Exception {
      String response = mockMvc.perform(MockMvcRequestBuilders.get("/comiclogs/1"))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andReturn().getResponse().getContentAsString(StandardCharsets.UTF_8);

      JSONAssert.assertEquals("""
              {
               "id": 1,
               "comicServiceName": "コミックシーモア",
               "comicTitle": "鬼滅の刃",
               "volumes": 23,
               "status": "完結"
            }
             """, response, JSONCompareMode.STRICT);
   }

   @Test
   @DataSet(value = "datasets/comicList.yml")
   @Transactional
   void 存在しないIDを指定してコミック情報を取得するときに例外が返されること() throws Exception {
      mockMvc.perform(MockMvcRequestBuilders.get("/comiclogs/99"))
            .andExpect(MockMvcResultMatchers.status().isNotFound());
   }

   @Test
   @DataSet(value = "datasets/comicList.yml")
   @ExpectedDataSet(value = "datasets/insert_comic.yml", ignoreCols = "id")
   @Transactional
   void コミック情報を新規登録できること() throws Exception {
      String response = mockMvc.perform(MockMvcRequestBuilders.post("/comiclogs")
            .contentType(MediaType.APPLICATION_JSON).content("""
                  { "id": 4,
                  "comicServiceName": "DMMブックス",
                  "comicTitle": "月刊少女野崎くん",
                  "volumes": 13,
                  "status": "続"
                  }
                  """))
            .andExpect(MockMvcResultMatchers.status().isCreated())
            .andReturn().getResponse().getContentAsString(StandardCharsets.UTF_8);

      JSONAssert.assertEquals("""
            {
               "message": "successfully created"
            }
            """, response, JSONCompareMode.STRICT);
   }

   @Test
   @DataSet(value = "datasets/comicList.yml")
   @ExpectedDataSet(value = "datasets/update_comic.yml")
   @Transactional
   void 指定したIDのコミック情報を更新できること() throws Exception {
      String response = mockMvc.perform(MockMvcRequestBuilders.patch("/comiclogs/2")
            .contentType(MediaType.APPLICATION_JSON).content("""
                  { "id": 2,
                  "comicServiceName": "Rakuten Kobo",
                  "comicTitle": "薬屋のひとりごと",
                  "volumes": 11,
                  "status": "続"
                  """))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andReturn().getResponse().getContentAsString(StandardCharsets.UTF_8);

      JSONAssert.assertEquals("""
            {
               "message": "successfully updated"
            }
            """, response, JSONCompareMode.STRICT);
   }

   @Test
   @DataSet(value = "datasets/comicList.yml")
   @ExpectedDataSet(value = "datasets/delete_comic.yml")
   @Transactional
   void コミック情報を1件削除できること() throws Exception {
      String response = mockMvc.perform(MockMvcRequestBuilders.delete("/comiclogs/3"))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andReturn().getResponse().getContentAsString(StandardCharsets.UTF_8);

      JSONAssert.assertEquals("""
            {
            "message": "successfully deleted"
            }
            """, response, JSONCompareMode.STRICT);
   }
}
