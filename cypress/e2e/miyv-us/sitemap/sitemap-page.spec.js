import { commons } from "../../../components/miyv/commons/commons-component";

describe('MIYV-US: Sitemap Page', () => {

    beforeEach(function () {
        cy.visit('/sitemap', {});
        cy.acceptTealiumWindowIfExists();
    })

    it('User Is Able To See The Sitemap Page', () => {
        //HEADING
        commons.getSecondHeading().should('be.visible')

        //LINKS SECTION
        commons.getInitialtLinksSection().should('be.visible')
        .its('length').should('gte', 3)

        //VALIDATE LINKS STATUS
        commons.getInitialtLinksSection().should("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href)
        })
    })

    it('User Is Able To Click On The Home Link', () => {

        commons.getInitialtLinksSection().should('be.visible').each(($el, index) => {
            //HOME LINK
            if (index===0){
                //CLICK ON THE BUTTON
                cy.wrap($el).should('be.visible').click({ force: true })
                cy.url().should('include', '/')
            }
        })
    })

    it('User Is Able To Click On The Vaccine Link', () => {
        
        commons.getInitialtLinksSection().should('be.visible').each(($el, index) => {
            //VACCINE LINK
            if (index===1){
                //CLICK ON THE BUTTON
                cy.wrap($el).should('be.visible').click({ force: true })
                cy.url().should('include', '/booster')
            }
        })
    })

    it('User Is Able To Click On The Pediatrics Link', () => {
        
        commons.getInitialtLinksSection().should('be.visible').each(($el, index) => {
            //PEDIATRICS LINK
            if (index===2){
                //CLICK ON THE BUTTON
                cy.wrap($el).should('be.visible').click({ force: true })
                cy.url().should('include', '/pediatrics')
            }
        })
    })
});