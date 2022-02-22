describe("My First Test", () => {
  it("Submit message in the contact us page.", () => {
    cy.visit("/contact-us");
    cy.get('#email').type('test@gmail.com')
    cy.get('#body').type('test')
    cy.get('#submit-button').click()
    cy.intercept(
        {
          method: 'POST',
          url: Cypress.env('url'),
        },
      ).as('sendMessage')
    cy.wait('@sendMessage').then((interception) => {
        expect(interception.response.body.success).to.be.true
      })
  });
});
