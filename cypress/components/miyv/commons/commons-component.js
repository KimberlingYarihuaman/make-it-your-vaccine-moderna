export const commons = {
    getModal:() => {
        return cy.get('[aria-label="Example Modal"]')
    },
    getFourthHeading:() => {
        return cy.get('h4')
    },
    getDescription: () => {
        return cy.get('p')   
    },
    getModalReturnSiteButton: () => {
        return cy.get('button').first()
    },
    getModalContinueButton: () => {
        return cy.get('button').last()
    },
    getFooter:() =>{
        return cy.get('footer')
    },
    getFooterLinks: () => {
        return cy.get('footer').find('li').children()
    },
    getCopyright: () => {
        return cy.get('footer').children().children().eq(1).children().last()  
    },
    getHeader: () => {
        return cy.get('header')
    },
    getHeaderLinks: () => {
        return cy.get('header').find('li').children()
    },
    getHeroSection: () => {
        return cy.get('div.heroHeader.section')
    },
    getHeroSectionImage: () => {
        return cy.get('div.heroHeader.section').find('img')
    },
    getHeroSectionHeading: () => {
        return cy.get('div.heroHeader.section').find('p')
    },
    getLayoutColumnsSection: () => {
        return cy.get('div.layoutColumns.section')
    },
    getLayoutColumnsSectionCards: () => {
        return cy.get('div.layoutColumns.section').find('div.ctaCard.section')
    },
    getImage: () => {
        return cy.get('img')
    },
    getThirdHeading: () => {
        return cy.get('h3')   
    },
    getButton: () => {
        return cy.get('a')   
    },
    getCardButtons: () => {
        return cy.get('div.ctaCard.section').find('a')
    },
    getBannerSection: () => {
        return cy.get('div.ctaBlock.section').find('p') 
    },
    getSecondHeading: () => {
        return cy.get('h2')   
    },
    getAccordionListItems: () => {
        return cy.get('div.assemblyAccordion.section').find('ul').children()
    },
    getExpandedButton: () => {
        return cy.get('button[aria-expanded="false"]')
    },
    getCollapsedButton: () => {
        return cy.get('button[aria-expanded="true"]')
    },
    getAccordionItemTitle: () => {
        return cy.get('div.accordion__title')
    },
    getAccordionItemBody: () => {
        return cy.get('div.accordion__body')
    },
    getAccordionIcon: () => {
        return cy.get('div.accordion__btn')
    },
    getFirstLayoutColumnsSection: () => {
        return cy.get('div.layoutColumns.section').eq(0)
    },
    getInitialtLinksSection: () => {
        return cy.get('div.layoutColumns.section').eq(0).find('p').children()
    },
    getSecondLayoutColumnsSection: () => {
        return cy.get('div.layoutColumns.section').eq(1)
    },
    getFirstLinksSection: () => {
        return cy.get('div.layoutColumns.section').eq(1).find('p').children()
    },
    getThirdLayoutColumnsSection: () => {
        return cy.get('div.layoutColumns.section').eq(2)
    },
    getSecondLinksSection: () => {
        return cy.get('div.layoutColumns.section').eq(2).find('p').children()
    },
    getFormSection: () => {
        return cy.get('div.ctaForm.section')    
    },
    getZipCodeField: () => {
        return cy.get('[name="zipcode"]')      
    },
    getSubmitButton: () => {
        return cy.get('[type="submit"]')
    },
    getExitModal (validateButton = true) {
        //SHOW THE MODAL
        commons.getModal().should('be.visible').within(()=>{
            //HEADING
            commons.getFourthHeading().should('be.visible')
            //PARAGRAPH
            commons.getDescription().should('be.visible')
            //RETURN TO SITE BUTTON
            commons.getModalReturnSiteButton().should('be.visible')
            //CONTINUE BUTTON
            if (validateButton===true){
                //CONTINUE BUTTON
                commons.getModalContinueButton().should('be.visible')
                .and("have.attr", "data-exit-link").then((href) => {
                    cy.pageReturnValidStatus(href)
                })
            }
            //CLICK ON RETURN TO SITE BUTTON
            commons.getModalReturnSiteButton().click({ force: true })
            commons.getModal().should('not.exist')
        })
    }
}