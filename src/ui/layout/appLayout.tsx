import {ReactNode} from "react";
import {useStyles} from "../styles/useStyles";
import { useTranslation } from "react-i18next";
import {AppConfig} from "../../config";

export interface AppLayoutProps {
    children: ReactNode;
}

export const AppLayout = ({children}: AppLayoutProps) => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            {children}

            <AppFooter/>
        </div>
    );
}

// noinspection SpellCheckingInspection
export const AppFooter_ZlecaLink = () => {
    const link = AppConfig.footerLinks?.zleca;
    if (!link) return null;
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <a className={classes.textButton} href={link}>
            {t("all.my-profile-on-zleca")}
        </a>
    )
}

export const AppFooter = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <div className={classes.appFooter}>
            <h5>
                &copy; Kacper Faber
            </h5>

            <AppFooter_ZlecaLink/>

            <a href={'/third-party-licenses.txt'} className={classes.textButton}>
                {t("all.third-party-licenses")}
            </a>
        </div>
    )
}
