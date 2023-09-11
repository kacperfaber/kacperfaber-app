import {useTranslation} from "react-i18next";
import {SkillDef} from "../../../../../commons/skillDef";
import {Index_ContentSection} from "../indexContentSection";
import {ListContainer} from "../../../../../components/baseList/baseList";
import {ListItem} from "../../../../../components/baseList/listItem";
import {TextSecAction} from "../../../../../components/text/textSecAction";
import {getKey} from "../../../../../commons/getKey";
import {SectionIds} from "../sectionIds";

export const SkillItem = ({item}: { item: SkillDef }) => {
    return (
        <ListItem tags={item.tags}
                  secondary={item.secondary}
                  primary={item.title}
                  action={<TextSecAction text={item.action}/>}/>
    )
}

export const IndexContent_SkillSection = () => {
    const {t} = useTranslation();

    const getSkills = () => {
        return t("__skills", {returnObjects: true}) as SkillDef[];
    }

    return (
        <div id={SectionIds.skills}>
            <Index_ContentSection title={t("all.skills")}>
                <ListContainer>
                    {
                        getSkills().map(x => <SkillItem item={x} key={getKey(x.title)}/>)
                    }
                </ListContainer>
            </Index_ContentSection>
        </div>
    )
}