module.exports = {
    title: "PTC 2022 | Qualité en start-up pourquoi faire ?",
    description: "Start-up rime avec livraison rapide, flexibilité, super agile, croissance rapide... Que veut dire qualité dans ce contexte ? Et que peut apporter une culture qualité au sein d'une start-up ?",
    author: "Grégory Heitz",
    themeSet: "./themes",
    theme: "ptc",
    size: "16:9",
    allowLocalFiles: true,
    lang: "fr",
    html: true,
    pdfNotes: true,
    pdfOutlines : {
        pages: false,
        headings: true
    },
    bespoke: {
        progress: true
    },
    engine: ({ marp }) => (
        marp
        .use(require('markdown-it-include'), "./slides")
        .use(require('markdown-it-mark'))
    ),
}
