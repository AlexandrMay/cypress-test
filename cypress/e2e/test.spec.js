/// <reference types="cypress" />
import { NavMenuComponent } from "../pages/components/NavigationMenuComponent";
import { ApiHelper } from "../support/apiHelper";
import moment from "moment";
import { getTokenFromLs } from "../support/token.js";

describe("Second suite", () => {

  beforeEach(() => {
    cy.loginByAPI();
  });

  it("First", () => {
    cy.contains("Огляд").click();
    ApiHelper.getCategories().then(categoies => {
      console.log(categoies);
    });
    ApiHelper.getCategories2(getTokenFromLs()).then(categoies => {
      console.log(categoies);
    });
  });
});
