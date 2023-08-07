import { commons } from "../../../components/miyv/commons/commons-component";
import supported_locales from "../../../fixtures/miyv/miyv-au/miyv_supported_locales.json";
import 'cypress-each';

describe('MIYV-AU: Error Page', () => {

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

    describe.each(localesToTest)((locale) => { return `${locale.code} - MIYV-AU Error Page Tests` }, (locale) => {

        beforeEach(function () {
            cy.visit('/xyz' + locale.code, {})
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
                //RETURN HOME BUTTON
                commons.getButton().should('be.visible').click({ force: true })
            })
        })
    })
});