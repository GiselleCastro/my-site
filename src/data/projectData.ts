export interface Project {
    title: string;
    description: string;
    url: string;
    image: string;
    imageFolder: string;
    figma?: string;
    inspiration?: string;
    gitHub: string;
    demo: string;
    date: Date;
    teckStack: string[];
}

export const projectData: Project[]= [
    {
    title: "Lacrei Saúde APP",
    description: "Este repositório contém a implementação de três páginas web interativas desenvolvidas com foco na experiência do usuário, seguindo rigorosamente o guia de estilo da Lacrei Saúde.",
    url: "https://lacrei-saude-app-fawn.vercel.app/",
    image: "https://github.com/GiselleCastro.png",
    imageFolder: "lacreiSaude",
    inspiration:  "https://lacreisaude.com.br/",
    gitHub: "https://github.com/GiselleCastro/lacrei-saude-app",
    demo: "https://github.com/GiselleCastro/lacrei-saude-app/blob/main/demo/demo-desktop.gif?raw=true",
    date: new Date(),
    teckStack: [
        'typescript'
    ]
},
// {
//     title: "To Do",
//     description: "Este repositório contém a implementação de três páginas web interativas desenvolvidas com foco na experiência do usuário, seguindo rigorosamente o guia de estilo da Lacrei Saúde. ",
//     url: "https://lacrei-saude-app-fawn.vercel.app/",
//     image: "/demo.gif",
//     inspiration:  "https://github.com/GiselleCastro.png",
//     imageFolder: "toDo",
//     gitHub: "https://github.com/GiselleCastro/lacrei-saude-app",
//     demo: "https://github.com/GiselleCastro/lacrei-saude-app/blob/main/demo/demo-desktop.gif?raw=true",
//     date: new Date(),
//     teckStack: [
//         'typescript'
//     ]
// },
]