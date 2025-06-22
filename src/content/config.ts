import {z, defineCollection, reference} from 'astro:content';
import { file, glob } from "astro/loaders";

const timelineCollection = defineCollection({
    loader: glob({ pattern: '**/timeline/*.md', base: "src/content/"}),
    // type : 'content',
    schema: z.object({
        icon : z.string(),
        title : z.string(),
        printText : z.string(),
        order: z.number(),
    })
});

const skillsCollection = defineCollection({
    loader: glob({ pattern: '**/skills/*.json', base: "src/content/"}),
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
    loader: glob({ pattern: '**/projects/*.md', base: "src/content/"}),
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
    loader: glob({ pattern: '**/xp/*.md', base: "src/content/"}),
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