package com.example.Comic_Log_API.form;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UpdateForm {
    @NotNull
    private Integer id;
    @NotBlank
    private String comicServiceName;
    @NotBlank
    private String comicTitle;
    @NotNull
    private Integer volumes;
    private String status;
}
