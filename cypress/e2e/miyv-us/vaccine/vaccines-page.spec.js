import { commons } from "../../../components/miyv/commons/commons-component";

describe('MIYV-US: Vaccine Page', () => {

    beforeEach(function () {
        cy.visit('/booster', {});
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
        .its('length').should('gte',3)
    })

    it('User Is Able To See The Assembly Accordion Section', () => {
        //HEADING
        commons.getSecondHeading().should('be.visible')

        //ACCORDION ITEMS
        commons.getAccordionListItems().should('be.visible')
        .its('length').should('gte',2)
    })

    it('User Is Able To Click And See The Information For Each Accordion Item', () => {
        //ACCORDION ITEMS
        commons.getAccordionListItems().should('be.visible').each(($el, index) => {

            cy.wrap($el).within(() => {
                
                if(!Cypress.config('isMobile')) {
                    //EXCEPT THE FIRST
                    if(index!=0) {
                        //CLICK ON THE EXPANDED BUTTON
                        commons.getExpandedButton().click({ force: true })
                    }
                }else {
                    //CLICK ON THE EXPANDED BUTTON
                    commons.getExpandedButton().click({ force: true })
                }
                //SHOW THE ITEM TITLE
                commons.getAccordionItemTitle().should('be.visible')
                .its('length').should('gte',1)

                //SHOW THE ITEM DESCRIPTION 
                commons.getAccordionItemBody().should('be.visible')
                .its('length').should('gte',1)

                //ICON
                commons.getAccordionIcon().should('be.visible')

                //CLICK ON THE COLLAPSED BUTTON
                commons.getCollapsedButton().click({ force: true })

                //THE ITEM BODY IS NOT SHOWN
                commons.getAccordionItemBody().should('not.be.visible')
            })
        })
    })

    it('User Is Able To See The Understanding Safety Section', () => {
    
        commons.getFirstLayoutColumnsSection().within(() => {
            //HEADING
            commons.getSecondHeading().should('be.visible')

            //PARAGRAPHS
            commons.getDescription().should('be.visible')
            .its('length').should('gte',2)
        })
    })

    it('User Is Able To Click On The Links Section And See The Leaving Modal', () => {
        //SHOW LINKS SECTION
        commons.getFirstLinksSection().should('be.visible')
        .its('length').should('gte', 12)
    
        commons.getFirstLinksSection().each(($el) => {

            //VALIDATE THE LINK STATUS
            cy.wrap($el).should("have.attr", "href").then((href) => {
                cy.pageReturnValidStatus(href)
            })
            //CLICK ON THE LINK
            cy.wrap($el).click({ force : true })  

            //EXIT MODAL
            commons.getExitModal()
        })
    })

    it('User Is Able To See The "Where Can I Learn More" Section', () => {
    
        commons.getThirdLayoutColumnsSection().within(() => {
            //HEADING
            commons.getSecondHeading().should('be.visible')

            //PARAGRAPHS
            commons.getDescription().should('be.visible')
            .its('length').should('gte', 6)
        })
    })

    it('User Is Able To Click On "Where Can I Learn More" Section Links And See The Leaving Modal', () => {

        commons.getSecondLinksSection().each(($el) => {
 
            //VALIDATE THE LINK STATUS
            cy.wrap($el).should("have.attr", "href").then((href) => {
                cy.pageReturnValidStatus(href)
            })
            //CLICK ON THE LINK
            cy.wrap($el).click({ force : true })  

            //EXIT MODAL
            commons.getExitModal()
        })
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