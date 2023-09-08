import {useStyles} from "../../styles/useStyles";
import {ReactNode} from "react";

export const ListContainer = ({children}: {children: ReactNode}) => {
    const classes = useStyles();
    return (
        <div className={classes.baseListContainer}>
            {children}
        </div>
    );
}