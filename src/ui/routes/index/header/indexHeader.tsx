import {useStyles} from "../../../styles/useStyles";
import {Index_HeaderName} from "./indexHeaderName";
import {Index_HeaderLinks} from "./indexHeaderLinks";

export const Index_Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.indexHeader}>
            <Index_HeaderName/>
            <Index_HeaderLinks/>
        </div>
    )
}