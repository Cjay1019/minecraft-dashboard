import Home from "./pages/Home";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

export default function App() {
  const theme = createTheme({
    palette: {
      type: "dark"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}