import { footer } from "../../../components/miyv/miyv-us/footer/footer-component";
import { commons } from "../../../components/miyv/commons/commons-component";

describe('MIYV-US: Footer', () => {

    beforeEach(function () {
        cy.visit('/', {})
        cy.acceptTealiumWindowIfExists()
    })
    
    it('User Is Able To See The Footer Components', () => {
        //SHOW FOOTER
        commons.getFooter().should('be.visible')

        //LOGO
        footer.getLogo()
        .should('be.visible')
        .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href)
        })
        //FOOTER LINKS
        commons.getFooterLinks()
        .should('be.visible')
        .its('length').should('gte', 3)

        //COPYRIGHT
        commons.getCopyright().should('be.visible')
    })

    it('User Opens The Footer Links And Sees The Leaving Modal', () => {
        //FOOTER LINKS
        commons.getFooterLinks().should('be.visible').each(($el, index) => {
            //EXCEPT SITEMAP
            if(index!=2) {
                //CLICK ON THE LINK
                cy.wrap($el).click({ force: true })
                
                //EXIT MODAL
                commons.getExitModal()
            }
        }) 
    })

    it('User Opens The Internal Link (Sitemap)', () => {
        //FOOTER LINKS
        commons.getFooterLinks().should('be.visible').each(($el, index) => {
            //SITEMAP LINK
            if(index===2) {
                //CLICK ON THE LINK
                cy.wrap($el).click({ force: true })
                cy.url().should('include', '/sitemap')
            }
        })
    })

    it('User Clicks On Moderna Logo', () => {
        //MODERNA LOGO
        footer.getLogo().should('be.visible').click({ force: true })
        cy.url().should('include', '/')
    })
});