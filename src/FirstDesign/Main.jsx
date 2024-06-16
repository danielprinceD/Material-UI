import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
const a = [1, 2, 4, 2, 3, 423, , 32, 3, 2, 32, 323];
const Main = () => {
  return (
    <Box>
      {a.map((_) => (
        <>
          <Card>
            <CardHeader title="Hello" subheader={"This is Header"} />
            <CardMedia
              component={"img"}
              height="400"
              width={200}
              image="https://picsum.photos/200/300"
            />
            <CardContent>
              <Typography variant="body2" color="text.primart">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                mollitia velit totam molestias vero. Sit officiis reiciendis
                pariatur quia alias doloremque consequatur, delectus esse
                tempora placeat dicta voluptate commodi molestias!
              </Typography>
              <br />
              <Rating name="Review" value={4} />
            </CardContent>
          </Card>
          <br />
          <br />
        </>
      ))}
    </Box>
  );
};

export default Main;
