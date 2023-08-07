import { commons } from "../../../components/miyv/commons/commons-component";
import { home } from "../../../components/miyv/miyv-au/home/home-component";
import supported_locales from "../../../fixtures/miyv/miyv-au/miyv_supported_locales.json";
import 'cypress-each';

describe('MIYV-AU: Home Page', () => {

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

    describe.each(localesToTest)((locale) => { return `${locale.code} - MIYV-AU Home Page Tests` }, (locale) => {

        beforeEach(function () {
            cy.visit('/' + locale.code, {})
            cy.acceptTealiumWindowIfExists()
        })

        it('User Is Able To See The Hero Section Components', () => {
            //SHOW HERO SECTION
            commons.getHeroSection().should('be.visible')
    
            //IMAGE
            commons.getHeroSectionImage().should('be.visible')
    
            //HEADING
            commons.getHeroSectionHeading().should('be.visible')
        })

        it('User Is Able To See The First Banner Section Components', () => {
            //BANNER SECTION
            home.getTheFirstBannerSection().should('be.visible')
            .its('length').should('gte',3)
        })

        it('User Is Able To See The Second Banner Section Components', () => {
            //BANNER SECTION
            home.getBannerHeading().should('be.visible')
            .its('length').should('gte', 4)

            //DESCRIPTION
            home.getBannerDescription().should('be.visible')
            .its('length').should('gte', 13)
        })

        it('User Is Able To See The More Info Section Cards', () => {
            //SHOW THE MORE INFO SECTION
            commons.getLayoutColumnsSection().should('be.visible')

            //SHOWS THE CARDS
            commons.getLayoutColumnsSectionCards().should('be.visible')
            .its('length').should('gte', 3)

            //VALIDATE ELEMENTS OF THE CARDS
            commons.getLayoutColumnsSectionCards().each(($el, index) => {
                cy.wrap($el).within(()=>{
                    //IMAGE
                    commons.getImage().should('be.visible')

                    //HEADING
                    commons.getThirdHeading().should('be.visible')

                    //DESCRIPTION
                    commons.getDescription().should('be.visible')

                    //EXCEPT CHECK YOUR VACCINE LINK
                    if(index!=0) {
                        //BUTTON
                        commons.getButton().should('be.visible')
                        .and("have.attr", "href").then((href) => {
                            cy.pageReturnValidStatus(href);
                        })
                    }
                })
            }) 
       })

        it('User Is Able To Open The Card Links And Sees The Leaving Modal', () => {
            //CARD LINKS
            commons.getCardButtons().should('be.visible').each(($el, index) => {
                //CLICK ON THE LINK
                cy.wrap($el).click({ force: true })

                //EXIT MODAL
                if(index!=0) {
                    commons.getExitModal()
                }else {
                    commons.getExitModal(false)
                }
            }) 
        })

        it('User Is Able To See The References Links Section', () => {
            //REFERENCES SECTION
            home.getReferencesLinksSection().should('be.visible')

            //REFERENCES LINKS
            home.getReferencesParagraphs().should('be.visible')
            .its('length').should('gte', 8)
        })

        it('User Is Able To Open The References Links And Sees The Leaving Modal', () => {

            home.getReferencesLinks().should('be.visible').each(($el, index) => {
                //CLICK ON THE LINK
                cy.wrap($el).click({ force: true })
                
               //EXIT MODAL
                if(index===2) {
                    commons.getExitModal()
                }else {
                    commons.getExitModal(false)
                }
            }) 
        })
    })
});