describe("Login", () => {
  beforeEach(() => {
    cy.PaginaInicial();
  });

  it("Login com e-mail e senha válidos", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="title"]')
      .contains("Products")
      .should("be.visible");
  });

  it.only("Login com e-mail válido e senha incorreta", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("123");
    cy.get('[data-test="login-button"]').click();
    cy.wait(100)

    cy.get('.error-message-container')
      .contains('h3', 'Epic sadface: Username and password do not match any user in this service')
      .should("be.visible");
  });
});
