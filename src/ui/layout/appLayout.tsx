import {ReactNode} from "react";
import {useStyles} from "../styles/useStyles";

export interface AppLayoutProps {
    children: ReactNode;
}

export const AppLayout = ({children}: AppLayoutProps) => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            {children}
        </div>
    );
}