import { commons } from "../../../components/miyv/commons/commons-component";
import supported_locales from "../../../fixtures/miyv/miyv-au/miyv_supported_locales.json";
import 'cypress-each';

describe('MIYV-AU: Footer', () => {

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

    describe.each(localesToTest)((locale) => { return `${locale.code} - MIYV-AU Footer Tests` }, (locale) => {

        beforeEach(function () {
            cy.visit('/' + locale.code, {})
            cy.acceptTealiumWindowIfExists()
        })

        it('User Is Able To See The Footer Components', () => {
            //SHOW FOOTER
            commons.getFooter().should('be.visible')

            //FOOTER LINKS
            commons.getFooterLinks()
            .should('be.visible')
            .its('length').should('gte', 2)
    
            //COPYRIGHT
            commons.getCopyright().should('be.visible')
        })
    
        it('User Opens The Footer Links And Sees The Leaving Modal', () => {
            //FOOTER LINKS
            commons.getFooterLinks().should('be.visible').each(($el) => {
                //CLICK ON THE LINK
                cy.wrap($el).click({ force: true })

                //EXIT MODAL
                commons.getExitModal()
            }) 
        })
    })
});