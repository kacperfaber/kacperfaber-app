import {useStyles} from "../../../styles/useStyles";
import {useTranslation} from "react-i18next";
import HTMLReactParser from "html-react-parser";
import {SectionIds} from "./sections/sectionIds";

export const Index_ContentBio = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <p id={SectionIds.bio} className={classes.textSecondary}>
            {HTMLReactParser(t("index.content.bio.text"))}
        </p>
    )
}