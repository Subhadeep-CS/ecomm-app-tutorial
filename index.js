import { createRoot } from "react-dom/client";
import App from "./app/App";
// targetiing the dom node where react render
const root_node = document.getElementById("root");
//Initialise the react dom root
const root = createRoot(root_node);
root.render(<App />);
