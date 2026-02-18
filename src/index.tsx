import ReactDOM from "react-dom/client";
import "@shared/styles/global.css";
import App from "./app/App";
import { ErrorBoundary } from "./shared/components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
