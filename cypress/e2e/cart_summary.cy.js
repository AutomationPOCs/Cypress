/// <reference types="cypress" />
import { AddAMealData, CartBtnBadgeValueData } from "../data/AddAMealData";
import MealDashboard from "../pages/MealDashboard";

describe("Cart Summary Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verify meal is added to cart successfully and verify cart item summary", () => {
    const mealDashboard = new MealDashboard();

    // Add a meal
    mealDashboard.addMeal({
      ...AddAMealData,
    });

    // Verify added meal
    cy.xpath(mealDashboard.addedMealName(AddAMealData.name)).should(
      "have.text",
      AddAMealData.name
    );
    cy.xpath(
      mealDashboard.addedMealDescription(AddAMealData.description)
    ).should("have.text", AddAMealData.description);
    cy.xpath(mealDashboard.addedMealPrice(AddAMealData.price)).should(
      "have.text",
      `$${AddAMealData.price}`
    );

    // Verify header card button value 0 before add to add to cart
    cy.xpath(mealDashboard.headerCardButton).should(
      "have.text",
      CartBtnBadgeValueData.zero
    );

    // Add to cart button click
    mealDashboard.addToCart(AddAMealData.name);

    // Verify header cart button value change to 1 from 0
    cy.xpath(mealDashboard.headerCardButton).should(
      "have.text",
      CartBtnBadgeValueData.one
    );

    // Your cart button click
    cy.xpath(mealDashboard.headerCardButton).click();


        // Verify added meal
        cy.xpath(mealDashboard.cartItemMealName(AddAMealData.name)).should(
            "have.text",
            AddAMealData.name
          );
          cy.xpath(mealDashboard.cartItemMealPrice(AddAMealData.price)).should(
            "have.text",
            `$${AddAMealData.price}`
          );
  });
});
