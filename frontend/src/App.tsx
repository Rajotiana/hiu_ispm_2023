import { ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";

import router from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
