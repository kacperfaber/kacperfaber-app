import {Index_ContentSection} from "../indexContentSection";
import {ListContainer} from "../../../../../components/baseList/baseList";
import {useTranslation} from "react-i18next";
import {AchievementDef} from "../../../../../commons/achievementDef";
import {ListItem} from "../../../../../components/baseList/listItem";
import {TextSecAction} from "../../../../../components/text/textSecAction";
import {getKey} from "../../../../../commons/getKey";

export const AchievementItem = ({item}: { item: AchievementDef }) => {
    return (
        <ListItem action={<TextSecAction text={item.action}/>} primary={item.title} secondary={item.description}
                  tags={[]}/>
    )
}

export const IndexContent_AchievementSection = () => {
    const {t} = useTranslation();

    const getAchievements = () => {
        return t("__achievements", {returnObjects: true}) as AchievementDef[]
    }

    return (
        <Index_ContentSection title={t("all.achievements")}>
            <ListContainer>
                {
                    getAchievements().map(item => <AchievementItem key={getKey(item.title)} item={item}/>)
                }
            </ListContainer>
        </Index_ContentSection>
    );
}