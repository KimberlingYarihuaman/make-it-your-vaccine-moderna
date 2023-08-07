export const home = {
    getBannerSectionButton: () => {
        return cy.get('div.ctaBlock.section').find('a')
    }
}