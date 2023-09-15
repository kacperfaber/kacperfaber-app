import {ReactNode} from "react";
import {useStyles} from "../../styles/useStyles";
import {Tag} from "../tag/tag";
import {getKey} from "../../commons/getKey";

export interface ListItemProps {
    primary: string;
    secondary: string;
    tags: string[];
    action?: ReactNode;
    onClick?: () => void;
}

export const ListItem = (props: ListItemProps) => {
    const classes = useStyles();
    return (
        <div onClick={() => props.onClick?.()} className={classes.baseListItem}>
            <div className={classes.baseListItemAction}>
                {props.action ?? null}
            </div>

            <div className={classes.baseListItemContent}>
                <h2>{props.primary}</h2>

                <p className={classes.textSecondary}>
                    {props.secondary}
                </p>

                <div className={classes.baseListItemTags}>
                    {
                        props.tags.map(tag => <Tag key={getKey(`${props.primary} ${tag}`)} text={tag}></Tag>)
                    }
                </div>
            </div>
        </div>
    );
}