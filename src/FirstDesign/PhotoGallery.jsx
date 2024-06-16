import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";
const a = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < 50; i++) {
  a.push(1);
}
const PhotoGallery = () => {
  return (
    <Box>
      <ImageList>
        {a.map((e) => (
          <ImageListItem>
            <img height={50} width={50} src="https://picsum.photos/100/100" alt="" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default PhotoGallery;
