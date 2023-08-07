import supported_locales from "../../../fixtures/miyv/miyv-au/miyv_supported_locales.json";
import { commons } from "../../../components/miyv/commons/commons-component";
import 'cypress-each';

describe('MIYV-AU: Header', () => {

    let localesToTest = [];
    let envLocale = Cypress.env('locale');
  
    if (envLocale != undefined) 
    {
        const locale = { code: envLocale };
        localesToTest.push(locale)
    }
    else 
    {
        localesToTest = supported_locales.miyvLocales
    }  

    describe.each(localesToTest)((locale) => { return `${locale.code} - MIYV-AU Header Tests` }, (locale) => {

        beforeEach(function () {
            cy.visit('/' + locale.code, {})
            cy.acceptTealiumWindowIfExists()
        })

        it('User Is Able To See The Header Components', () => {
            //SHOW HEADER
            commons.getHeader().should('be.visible')

            //HEADER LINKS
            commons.getHeaderLinks()
            .should('be.visible')
            .its('length').should('gte', 1)
        })
    
        it('User Opens The Header Links And Sees The Leaving Modal', () => {
            //HEADER LINKS
            commons.getHeaderLinks().should('be.visible').each(($el) => {
                //CLICK ON THE LINK
                cy.wrap($el).click({ force: true })
                
                //EXIT MODAL
                commons.getExitModal()
            }) 
        })
    })
});