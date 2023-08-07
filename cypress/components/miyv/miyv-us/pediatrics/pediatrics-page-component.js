export const pediatrics = {
    getFirstLayoutColumnsSectionLinks: () => {
        return cy.get('div.layoutColumns.section').eq(0).find('a')
    },
    getAccordionSectionLinks: () => {
        return cy.get('div.accordion__body').find('a')
    }
}