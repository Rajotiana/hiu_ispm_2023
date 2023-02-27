import { ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import './index.css'

import router from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
