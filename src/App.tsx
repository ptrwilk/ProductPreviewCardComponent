import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ProductPreviewCardComponent from "./Components/ProductPreviewCardComponent";
import "./styles.css";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 14,
    },
    fontFamily: "Montserrat",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <ProductPreviewCardComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
