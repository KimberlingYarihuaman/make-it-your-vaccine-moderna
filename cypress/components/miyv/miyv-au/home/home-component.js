export const home = {
    getTheFirstBannerSection: () => {
        return cy.get('div.ctaBlock.section').eq(0).find('p') 
    },
    getBannerHeading: () => {
        return cy.get('div.ctaBlock.section').eq(1).find('h3')
    },
    getBannerDescription: () => {
        return cy.get('div.ctaBlock.section').eq(1).find('p')
    },
    getReferencesLinksSection: () => {
        return cy.get('div.ctaBlock.section').eq(2)
    },
    getReferencesParagraphs: () => {
        return cy.get('div.ctaBlock.section').eq(2).find('h6')
    },
    getReferencesLinks: () => {
        return cy.get('div.ctaBlock.section').eq(2).find('a')
    }
}