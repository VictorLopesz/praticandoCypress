describe("Login", () => {
  beforeEach(() => {
    cy.PaginaInicial();
  });

  it("Login com e-mail e senha válidos", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="title"]')
        .contains('Products').should('be.visible');
  });
});
