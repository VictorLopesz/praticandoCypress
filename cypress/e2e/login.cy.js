describe("Login", () => {
  beforeEach(() => {
    cy.PaginaInicial();
  });

  it("Login com e-mail e senha válidos", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="title"]').contains("Products").should("be.visible");
  });

  it("Login com e-mail válido e senha incorreta", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("123");
    cy.get('[data-test="login-button"]').click();
    cy.wait(100);

    cy.get(".error-message-container")
      .contains(
        "h3",
        "Epic sadface: Username and password do not match any user in this service"
      )
      .should("be.visible");
  });

  it("Login com e-mail válido e senha incorreta", () => {
    cy.get('[data-test="username"]').type("teste@gmail.com");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.wait(100);

    cy.get(".error-message-container")
      .contains(
        "h3",
        "Epic sadface: Username and password do not match any user in this service"
      )
      .should("be.visible");
  });

  it("Preencher apenas o campo de e-mail", () => {
    cy.get('[name="user-name"]').type("standard_user");
    cy.get('[name="login-button"]').click();
    cy.wait(100);
    
    cy.get(".error-message-container")
      .contains(
        "h3",
        "Epic sadface: Password is required")
      .should("be.visible");
  });
});
