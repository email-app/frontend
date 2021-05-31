describe('Index Page', () => {
  it("Renders 'not found' text", () => {
    cy.visit('/');
    cy.contains('Not found');
  });
});
