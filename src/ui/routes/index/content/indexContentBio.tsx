import {useStyles} from "../../../styles/useStyles";
import {useTranslation} from "react-i18next";

export const Index_ContentBio = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <p className={classes.textSecondary}>
            {t("index.content.bio.text")}
        </p>
    )
}