import {useEffect, useState} from "react";
import {SectionIds} from "../content/sections/sectionIds";

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
        chapter: "projects",
        id: SectionIds.projects
    },

    {
        chapter: "achievements",
        id: SectionIds.achievements
    },

    {
        chapter: "skills",
        id: SectionIds.skills
    }
];

export function isElementVisible (el: Element) {
    const holder = document.body;
    const { top, bottom, height } = el.getBoundingClientRect()
    const holderRect = holder.getBoundingClientRect()

    return top <= holderRect.top
        ? holderRect.top - top <= height
        : bottom - holderRect.bottom <= height
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
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left'}}>
            Active chapter is {active}
        </div>
    )
}