import {useStyles} from "../../../styles/useStyles";
import {Index_ContentBio} from "./indexContentBio";
import {IndexContent_ProjectSection} from "./sections/projects/projectSection";
import {IndexContent_SkillSection} from "./sections/skills/skillsSection";

export const Index_Content = () => {
    const classes = useStyles();
    return (
        <div className={classes.indexContent}>
            <Index_ContentBio/>

            <IndexContent_ProjectSection/>

            <IndexContent_SkillSection/>
        </div>
    )
}
