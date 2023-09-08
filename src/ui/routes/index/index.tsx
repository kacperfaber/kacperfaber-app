import {AppLayout} from "../../layout/appLayout";
import {useStyles} from "../../styles/useStyles";
import {Index_Header} from "./header/indexHeader";
import {Index_Content} from "./content/indexContent";

export const Index = () => {
    const classes = useStyles();
    return (
        <AppLayout>
            <div className={classes.indexContainer}>
                <div className={classes.index}>
                    <Index_Header/>
                    <Index_Content/>
                </div>
            </div>
        </AppLayout>
    );
}