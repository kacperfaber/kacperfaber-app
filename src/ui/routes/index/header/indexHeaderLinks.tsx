import {useStyles} from "../../../styles/useStyles";
import {FaGithub, FaMailBulk, FaStackOverflow, FaTwitter} from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";
import {ReactNode} from "react";
import {AppConfig} from "../../../../config";

export const Index_HeaderLinks_LinkFor = ({children, link}: {children: ReactNode, link?: string}) => {

    return (
        <> { link ? <a href={link}>{children}</a> : null } </>
    )
}

export const Index_HeaderLinks = () => {
    const classes = useStyles();
    // TODO
    return (
        <div className={classes.indexHeaderLinks}>
            <Index_HeaderLinks_LinkFor link={AppConfig.links.stackoverflow}>
                <FaStackOverflow/>
            </Index_HeaderLinks_LinkFor>

            <Index_HeaderLinks_LinkFor link={AppConfig.links.github}>
                <FaGithub/>
            </Index_HeaderLinks_LinkFor>

            <Index_HeaderLinks_LinkFor link={AppConfig.links.twitter}>
                <FaTwitter/>
            </Index_HeaderLinks_LinkFor>

            <Index_HeaderLinks_LinkFor link={AppConfig.links.emailTo}>
                <AiFillMail/>
            </Index_HeaderLinks_LinkFor>
        </div>
    );
}