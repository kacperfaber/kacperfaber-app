import {useStyles} from "../../styles/useStyles";

export const Tag = ({text}: {text: string}) => {
    const classes = useStyles();
    return (<div className={classes.tag}>{text}</div>);
}