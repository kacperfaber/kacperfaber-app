import {useStyles} from "../../../styles/useStyles";
import {Index_ContentBio} from "./indexContentBio";
import {IndexContent_ProjectSection} from "./sections/projects/projectSection";
import {IndexContent_AchievementSection} from "./sections/achievements/achievementSection";

export const Index_Content = () => {
    const classes = useStyles();
    return (
        <div className={classes.indexContent}>
            <Index_ContentBio/>

            <IndexContent_AchievementSection/>

            <IndexContent_ProjectSection/>
        </div>
    )
}