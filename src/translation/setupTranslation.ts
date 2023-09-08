import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import pl from "./../lang.pl.json";

export function setupTranslation(): Promise<any> {
    return i18next
        .use(initReactI18next)
        .init({
            lng: 'pl',
            resources: {
                pl: {
                    translation: pl
                }
            }
        })
}