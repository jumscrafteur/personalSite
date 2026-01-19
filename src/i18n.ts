type Langs = "en" | "fr"

export const lang: Langs[] = ["en", "fr"]

type PageContentTranslation = {
    hero : {
        subtitle: string;
    },
    curriculum : {
        title : string;
        description: string;
    }
    skills : {
        title: string;
    }
    projects : {
        title: string;
    }
    xp : {
        title: string;
    }
    printFooter : {
        content: string;
    }
}

export function getTranslation(lang: string, ...path:string[]) {
    let translationTree: any = I18N_UI[lang]

    while (path.length > 0) {
        const nextStep = path.shift() ?? ""

        if (Object.keys(translationTree).includes(nextStep))
            translationTree = translationTree[nextStep]
    }

    if (typeof translationTree !== 'string')
        throw new Error(`Missing translation in ${lang} for ${path.join("/")}`);
        

    return translationTree
}

export const I18N_UI: {[key: string] : PageContentTranslation} = {
    en : {
        hero : {
            subtitle : "Developer Analyst"
        },
        curriculum : {
            title : "My Curriculum",
            description : "Throughout my training, my learning strategies have been based on two strong foundations. A formal learning phase that provided a rigorous approach and enabled me to tackle subjects that I wouldn't have tackled otherwise, followed by a personal learning phase that enabled me to delve deeper into the subjects covered in class, to look at them from a different perspective or to extend my knowledge to fields that aren't covered in a formal setting.\nThis methodology has enabled me to develop skills in modern technologies that are of interest to me for my future career, particularly in the fields of software engineering and the web, while at the same time structuring my development practices."
        },
        skills : {
            title : "My Skills"
        },
        projects : {
            title : "My Projects"
        },
        xp: {
            title: "My Experiences"
        },
        printFooter: {
            content: "And a lot more on my website"
        }

    },
    fr : {
        hero: {
            subtitle : "Analyste Développeur"
        },
        curriculum: {
            title: "Mon Curriculum",
            description: "Tout au long de ma formation, mes stratégies d'apprentissage se sont appuyées sur deux fondements solides. Une phase d'apprentissage formel qui a fourni une approche rigoureuse et m'a permis d'aborder des sujets que je n'aurais pas abordés autrement, suivie d'une phase d'apprentissage personnel qui m'a permis d'approfondir les sujets abordés en cours, de les envisager sous un autre angle ou d'étendre mes connaissances à des domaines qui ne sont pas couverts dans un cadre formel.\nCette méthodologie m'a permis de développer des compétences dans les technologies modernes qui m'intéressent pour ma future carrière, notamment dans les domaines de l'ingénierie logicielle et du web, tout en structurant mes pratiques de développement."
        },
        skills: {
            title: "Mes Compétences"
        },
        projects: {
            title: "Mes Projets"
        },
        xp: {
            title: "Mes Experiences"
        },
        printFooter: {
            content: "Découvrez-en plus sur mon site"
        }
    }
}