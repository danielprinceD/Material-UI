import Typography from "@mui/material/Typography";

const names = {
  first : "hello"
}

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component={names.first}>Hello</Typography>
    </div>
  );
}

export default App;
