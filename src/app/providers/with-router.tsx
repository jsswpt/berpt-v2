import { useState } from "react";
import { BrowserRouter, Router } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () => {
  const state = useState(1);
  return <BrowserRouter>{component()}</BrowserRouter>;
};
