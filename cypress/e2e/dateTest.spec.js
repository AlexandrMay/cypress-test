/// <reference types="cypress" />
import { DatePickerPage } from "../pages/DatePickerPage";
import { NavMenuComponent } from "../pages/components/NavigationMenuComponent";
import moment from "moment";

describe("Datepicker test", () => {

  it("Validate today date value selection", () => {
    cy.visit("/");
    const menu = new NavMenuComponent();
    menu.openMenuItemByValue("Formss");
    menu.openMenuItemByValue("Datepicker");
    const todayDate = moment().format("MMM D, YYYY");
    const datepicker = new DatePickerPage();
    datepicker.openCommonDatepicker();
    datepicker.selectToday();
    datepicker.elements.commonDatepickerInput().should("have.value", todayDate);
  });
});