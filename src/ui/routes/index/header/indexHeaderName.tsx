import {useStyles} from "../../../styles/useStyles";

export const Index_HeaderName = () => {
    const classes = useStyles();
    return (
        <div className={classes.indexHeaderName}>
            <h1>Kacper Faber</h1>
            <h3>Programista, Szachista, Dobry chłopak</h3>

            <p className={classes.colorSecondary}>Lorem Ipsum Dollor Sit Ammet</p>
        </div>
    );
}