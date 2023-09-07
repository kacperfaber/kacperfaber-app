import {createRoot} from "react-dom/client";
import {AppContainer} from "./ui/appContainer";

const getRootElement = () => {
    let e = document.getElementById("app");
    if (!e) throw Error("There's no #app to create a root component.");
    return e;
}

const rootElement = getRootElement();
const root = createRoot(rootElement);
root.render(<AppContainer/>);
