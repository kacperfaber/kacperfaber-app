import {ReactNode} from "react";
import {useStyles} from "../../../../styles/useStyles";

export interface Index_ContentSectionProps {
    title: string;
    children: ReactNode;
}

export const Index_ContentSection = (props: Index_ContentSectionProps) => {
    const classes = useStyles();

    return (
        <div className={classes.baseIndexSection}>
            <h3>{props.title}</h3>
            {props.children}
        </div>
    );
}