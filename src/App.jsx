import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { MyButton } from "./MyButton";
import { MyButton2 } from "./MyButton";

const names = {
  first: "h5",
};

const normal = {
  backgroundColor: "red",
};
const small = {
  backgroundColor: "green",
};

function App() {
  return (
    <div className="App">
      <Typography
        backgroundColor={normal.backgroundColor}
        sx={small}
        variant="h2"
        align={"center"}
        component={names.first}
      >
        Hello
      </Typography>

      <Button variant="contained" color="warning">
        Hello
      </Button>
      <Button variant="text">Hello</Button>

      <Button variant="outlined" size="large">
        Hello
      </Button>

      <MyButton varient={"text"} message={"Click me"}></MyButton>
      <MyButton2  message={"Click me"}></MyButton2>
    </div>
  );
}

export default App;
