import {useStyles} from "../../../styles/useStyles";
import {useTranslation} from "react-i18next";
import HTMLReactParser from "html-react-parser";

export const Index_HeaderName = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <div className={classes.indexHeaderName}>
            <h1>{t("index.header.name")}</h1>
            <h3>{t("index.header.sub")}</h3>
            <p className={classes.colorSecondary}>{HTMLReactParser(t("index.header.paragraph"))}</p>
        </div>
    );
}