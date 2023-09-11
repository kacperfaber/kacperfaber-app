import {useEffect, useState} from "react";
import {SectionIds} from "../content/sections/sectionIds";
import {useTranslation} from "react-i18next";
import {useStyles} from "../../../styles/useStyles";

export type Chapter = "bio" | "projects" | "achievements" | "skills";

export type ChapterItemDef = {
    chapter: Chapter;
    id: string;
}

export const Chapters: Array<ChapterItemDef> = [
    {
        chapter: "bio",
        id: SectionIds.bio
    },

    {
        chapter: "achievements",
        id: SectionIds.achievements
    },

    {
        chapter: "projects",
        id: SectionIds.projects
    },

    {
        chapter: "skills",
        id: SectionIds.skills
    }
];

const ChapterItem = ({chapter, isActive}: {isActive: boolean, chapter: Chapter}) => {
    const {t} = useTranslation();
    const classes = useStyles();
    return (
        <h5 className={`${classes.chapterItem} ${isActive ? classes.chapterItemActive : ''}`}>{t(`chapters.${chapter}`)}</h5>
    )
}

export const IndexHeader_Chapters = () => {
    const [active, setActive] = useState<Chapter>("bio");

    const onScroll = () => {
        const windowHeight = window.innerHeight;

        for (let chapter of Chapters) {
            const el = document.getElementById(chapter.id)!!;
            const rect = el.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.25) {
                setActive(chapter.chapter);
            }
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left'}}>
            {
                Chapters.map(chapter => <ChapterItem key={chapter.chapter} chapter={chapter.chapter} isActive={chapter.chapter == active}/>)
            }
        </div>
    )
}