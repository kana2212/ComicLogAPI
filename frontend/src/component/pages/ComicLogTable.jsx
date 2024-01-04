import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import { useComicInput } from "../../hooks/ComicInputProvider";

export default function ComicLogTable() {
  const { comicList } = useComicInput();

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {comicList.map((comic, index) => (
            <TableRow key={index}>
              <TableCell>{comic.comicServiceName}</TableCell>
              <TableCell>{comic.comicTitle}</TableCell>
              <TableCell>{comic.volumes}</TableCell>
              <TableCell>{comic.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
