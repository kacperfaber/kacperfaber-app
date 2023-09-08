import {useStyles} from "../../../styles/useStyles";

export const Index_HeaderLinks = () => {
    const classes = useStyles();
    // TODO
    return (
        <div className={classes.indexHeaderLinks}>
            <a href={'/'}>LINK 1</a>
            <a href={'/'}>LINK 2</a>
        </div>
    );
}