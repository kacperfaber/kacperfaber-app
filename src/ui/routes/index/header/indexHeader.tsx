import {useStyles} from "../../../styles/useStyles";
import {Index_HeaderName} from "./indexHeaderName";
import {Index_HeaderLinks} from "./indexHeaderLinks";
import {IndexHeader_Chapters} from "./indexHeaderChapters";

export const Index_Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.indexHeader}>
            <Index_HeaderName/>
            <IndexHeader_Chapters/>
            <Index_HeaderLinks/>
        </div>
    )
}