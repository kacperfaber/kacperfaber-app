import {createRoot} from "react-dom/client";
import {AppContainer} from "./ui/appContainer";
import {setupTranslation} from "./translation/setupTranslation";

const getRootElement = () => {
    let e = document.getElementById("app");
    if (!e) throw Error("There's no #app to create a root component.");
    return e;
}

setupTranslation()
    .then(runApp);

function runApp() {
    const rootElement = getRootElement();
    const root = createRoot(rootElement);
    root.render(<AppContainer/>);
}
