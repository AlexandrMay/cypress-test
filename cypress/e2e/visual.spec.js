/// <reference types="cypress" />

describe("First suite", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it.skip("Theme changes test", () => {
        cy.contains("Forms").click();
        cy.contains("Form Layouts").click();
        cy.contains("nb-card", "Using the Grid").then(form => {
            cy.wrap(form).toMatchImageSnapshot();
        })
    });

    it.skip("Theme changes test with Percy", () => {
        cy.contains("Forms").click();
        cy.contains("Form Layouts").click();
        cy.percySnapshot('Form Layouts page');
    });
  });
  