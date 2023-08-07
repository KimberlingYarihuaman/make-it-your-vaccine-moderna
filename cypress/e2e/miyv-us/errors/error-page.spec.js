import { commons } from "../../../components/miyv/commons/commons-component";

describe('MIYV-US: Error Page', () => {

    beforeEach(function () {
        cy.visit('/xyz', {})
        cy.acceptTealiumWindowIfExists()
    })
    
    it('User Is Able To See The Error Page', () => {

        commons.getFirstLayoutColumnsSection().should('be.visible').within(() => {
            //HEADING
            commons.getFourthHeading().should('be.visible')

            //BODY
            commons.getDescription().should('be.visible')

            //RETURN HOME BUTTON
            commons.getButton().should('be.visible')
            .and("have.attr", "href").then((href) => {
                cy.pageReturnValidStatus(href)
            })
        })
    })

    it('User Is Able To Click On The Return Home Button', () => {

        commons.getFirstLayoutColumnsSection().should('be.visible').within(() => {
            //HOME BUTTON
            commons.getButton().should('be.visible').click({ force: true })
            cy.url().should('include', '/')
        })
    })
});