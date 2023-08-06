import { RouterProvider } from "react-router-dom";
// import Header from "./Header/Header";
import { appRouter } from "./Router/Router";
import React from "react";
export const context = React.createContext();

function App() {
  return (
      <context.Provider value="Aravind">
                <>
        {/* <Header /> */}
        <RouterProvider router={appRouter}></RouterProvider>
        </>
      </context.Provider>

  );
}

export default App;
