import {Index_ContentSection} from "../indexContentSection";
import {useTranslation} from "react-i18next";
import {ListContainer} from "../../../../../components/baseList/baseList";
import {ListItem} from "../../../../../components/baseList/listItem";
import {ProjectDef} from "../../../../../commons/projectDef";
import {TextSecAction} from "../../../../../components/text/textSecAction";

const ProjectItem = ({proj}: {proj: ProjectDef}) => {
    return (
        <ListItem
            key={proj.title}
            action={<TextSecAction text={proj.action}/>}
            primary={proj.title}
            secondary={proj.description}
            tags={proj.tags}
            onClick={() => {window.location.href = proj.url}}
        />
    );
}

export const IndexContent_ProjectSection = () => {
    const {t} = useTranslation();

    const getProjects = () => {
        return t("__projects", {returnObjects: true}) as ProjectDef[];
    }

    return (
        <Index_ContentSection title={t("all.projects")}>
            <ListContainer>
                {
                    getProjects().map(proj => <ProjectItem proj={proj}/>)
                }
            </ListContainer>
        </Index_ContentSection>
    );
}