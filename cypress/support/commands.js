
//CLOSE COOKIES MODAL
Cypress.Commands.add('acceptTealiumWindowIfExists', () => {

    cy.wait(2000)
  
    cy.getIfExists('[id="privacy_prompt"]').then((element) => {
        if (element != null) {
            cy.get('[id="preferences_prompt_submit"]').click({force:true})
        }
    });
});

//VALIDATE IF AN ELEMENT EXISTS
Cypress.Commands.add("getIfExists", (selector) => {
    cy.document().then(($document) => {
      const documentResult = $document.querySelectorAll(selector)
      if (documentResult.length) {
        return cy.get(selector)
      }
  
      return null
    })
});

//VALIDATE LINK STATUS
Cypress.Commands.add('pageReturnValidStatus', (url) => {
    return cy
      .request({
        url: url,
        failOnStatusCode: false,
    })
    .then((resp) => {
        const validStatusCodes = [200, 201, 404];
        expect(resp.status).to.be.oneOf(validStatusCodes);
    });
});