import ReactDOM from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import StarMatch from "./components/star-match/StarMatch";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <StarMatch />
  </StrictMode>
);
