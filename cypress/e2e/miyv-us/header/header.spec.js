import { commons } from "../../../components/miyv/commons/commons-component";
import { header } from "../../../components/miyv/miyv-us/header/header-component";

describe('MIYV-US: Header', () => {

    beforeEach(function () {
        cy.visit('/', {})
        cy.acceptTealiumWindowIfExists()
    })

    it('User Is Able To See The Header Components', () => {
        //SHOW HEADER
        commons.getHeader().should('be.visible')

        //LOGO
        header.getLogo()
        .should('be.visible')
        .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href)
        })
        //HEADER LINKS
        commons.getHeaderLinks()
        .should('be.visible')
        .its('length').should('gte', 2)
    })

    it('User Is Able To Click On The Header Links', () => {
            
        commons.getHeaderLinks().should('be.visible').each(($el, index) => {
            //VACCINE
            if(index===0) {
                //CLICK ON THE LINK
                cy.wrap($el).click({ force: true })
                cy.url().should('include', '/booster')

            //PEDIATRICS
            }else{
                //CLICK ON THE LINK
                cy.wrap($el).click({ force: true })
                cy.url().should('include', '/pediatrics')
            }
            //VALIDATE LINK STATUS
            cy.wrap($el).should('be.visible')
            .and("have.attr", "href").then((href) => {
                cy.pageReturnValidStatus(href)
            })
        })
    })

    it('User Clicks On Moderna Logo', () => {
        //MODERNA LOGO
        header.getLogo().should('be.visible').click({ force: true })
        cy.url().should('include', '/')
    })
});