import {z, defineCollection, reference} from 'astro:content';
import { file } from "astro/loaders";

const timelineCollection = defineCollection({
    type : 'content',
    schema: z.object({
        icon : z.string(),
        title : z.string(),
        printText : z.string(),
        order: z.number(),
    })
});

const skillsCollection = defineCollection({
    loader: file("src/content/skills.json"),
    schema: z.object({
        name: z.string(),
        side: z.enum(["left", "right"]),
        subSkill : z.array(z.object({
            name: z.string(),
            tools : z.array(z.string()),
        }))
    })
});

const projectsCollection = defineCollection({
    type : 'content',
    schema: ({image}) => z.object({
        name: z.string(),
        image: image(),
        imageAlt: z.string(),
        showInPrint: z.boolean().default(false),
        printText: z.string(),
        badges: z.array(reference('badges'))
    })
});

const badgesCollection = defineCollection({
    loader: file("src/content/badges.json"),
    schema: z.object({
        iconName : z.string(),
        badgeText: z.string().optional(),
        iconColor: z.string().default("white"),
        color: z.string()
    }).transform((obj) => ({
        ...obj,
        badgeText: obj.badgeText ?? obj.iconName
    }))
});

const xpCollection = defineCollection({
    type : 'content',
    schema: ({image}) => z.object({
        name: z.string(),
        image: image(),
        imageAlt: z.string(),
        showInPrint: z.boolean().default(false),
        printText: z.string(),
    })
});

export const collections = {
    'timeline': timelineCollection,
    'skills': skillsCollection,
    'projects': projectsCollection,
    'badges': badgesCollection,
    'xp': xpCollection
};