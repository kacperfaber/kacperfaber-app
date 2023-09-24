import {ReactNode} from "react";
import {useStyles} from "../styles/useStyles";
import { useTranslation } from "react-i18next";

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

export const AppFooter = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <div className={classes.appFooter}>
            <h5>
                &copy; Kacper Faber
            </h5>

            <a href={'/third-party-licenses.txt'} className={classes.textButton}>
                {t("all.third-party-licenses")}
            </a>
        </div>
    )
}
