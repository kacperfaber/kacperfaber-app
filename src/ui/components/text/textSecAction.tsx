import {useStyles} from "../../styles/useStyles";

export const TextSecAction = ({text}: { text: string }) => {
    const classes = useStyles();
    return (
        <p className={classes.textSecondary}>{text}</p>
    );
}