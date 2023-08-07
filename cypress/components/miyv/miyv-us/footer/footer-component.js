export const footer = {
    getLogo: () => {
        return cy.get('[title="Moderna logo"]').eq(1)
    }
}