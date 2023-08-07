export const header = {
    getLogo: () => {
        return cy.get('[title="Moderna logo"]').eq(0)
    }
}