import { commons } from "../../../components/miyv/commons/commons-component";
import { home } from "../../../components/miyv/miyv-us/home/home-page-component";

describe('MIYV-US: Home Page', () => {

    beforeEach(function () {
        cy.visit('/', {});
        cy.acceptTealiumWindowIfExists();
    })
    
    it('User Is Able To See The Hero Section Components', () => {
        //SHOW HERO SECTION
        commons.getHeroSection().should('be.visible')

        //IMAGE
        commons.getHeroSectionImage().should('be.visible')

        //HEADING
        commons.getHeroSectionHeading().should('be.visible')
    })

    it('User Is Able To See The Banner Section Components', () => {
        //BANNER SECTION
        commons.getBannerSection().should('be.visible')
        .its('length').should('gte',1)

        //BUTTON
        home.getBannerSectionButton().should('be.visible')
        .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href);
        })
    })

    it('User Is Able To Click On The Get Vaccine Info Button', () => {
        //CLICK ON THE BUTTON
        home.getBannerSectionButton().should('be.visible').click({ force: true })
        cy.url().should('include', '/booster')
    })

    it('User Is Able To See The More Info Section Cards', () => {
        //SHOW THE MORE INFO SECTION
        commons.getLayoutColumnsSection().should('be.visible')

        //SHOWS THE CARDS
        commons.getLayoutColumnsSectionCards().should('be.visible')
        .its('length').should('gte', 2)

        //VALIDATE ELEMENTS OF THE CARDS
        commons.getLayoutColumnsSectionCards().each(($el) => {
            cy.wrap($el).within(()=>{
                //IMAGE
                commons.getImage().should('be.visible')

                //HEADING
                commons.getThirdHeading().should('be.visible')

                //DESCRIPTION
                commons.getDescription().should('be.visible')

                //BUTTON
                commons.getButton().should('be.visible')
                .and("have.attr", "href").then((href) => {
                    cy.pageReturnValidStatus(href);
                })
            })
        })
    })

    it('User Is Able To Click On Learn More Button', () => {
       
        commons.getCardButtons().should('be.visible').each(($el, index) => {
            //LEARN MORE
            if (index===0){
                //CLICK ON THE BUTTON
                cy.wrap($el).should('be.visible').click({ force: true })
                cy.url().should('include', '/pediatrics')
            }
        })
    })

    it('User Is Able To Click On Get The Facts Button', () => {
        
        commons.getCardButtons().should('be.visible').each(($el, index) => {
            //GET THE FACTS
            if (index===1){
                //CLICK ON THE BUTTON
                cy.wrap($el).should('be.visible').click({ force: true })

                //EXIT MODAL
                commons.getExitModal()
            }
        })
    })

    it('User Is Able To See The More Info Section Form', () => {
        //SHOW THE MORE INFO SECTION
        commons.getLayoutColumnsSection().should('be.visible')

        //SHOWS THE FORM
        commons.getFormSection().should('be.visible')
        .its('length').should('eq', 1)

        //VALIDATE ELEMENTS OF THE FORM
        commons.getFormSection().within(() => {
            //HEADING
             commons.getThirdHeading().should('be.visible')

            //DESCRIPTION
            commons.getDescription().should('be.visible')
            .its('length').should('gte', 2)

            //ZIP CODE
            commons.getZipCodeField().should('be.visible')

            //FIND A SITE BUTTON
            commons.getSubmitButton().should('be.visible')
        })
    })

    it('User Is Able To Fill Out The Zip Code Field Correctly', () => {
        //FORM
        commons.getFormSection().within(() => {
            //ZIP CODE
            commons.getZipCodeField().should('be.visible')
            .type('12345')
        })
    })
});