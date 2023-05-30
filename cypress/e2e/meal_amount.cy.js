/// <reference types="cypress" />
import { AddAMealData, CartBtnBadgeValueData, addamountData } from "../data/AddAMealData";
import MealDashboard from "../pages/MealDashboard";

describe("Modify meal amount for existing meals test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Add invalid amount and verify card header value not change", () => {
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

    // Add invalid amount
    mealDashboard.addAmount({name: AddAMealData.name, amount: addamountData.invalidAmount});

    // Add to cart button click
    mealDashboard.addToCart(AddAMealData.name);

     // Verify header card button value 0
     cy.xpath(mealDashboard.headerCardButton).should(
      "have.text",
      CartBtnBadgeValueData.zero
    );
  });


  it("Add valid amount and verify card header value changes", () => {
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

    // Add valid amount
    mealDashboard.addAmount({name: AddAMealData.name, amount: addamountData.one});

    // Add to cart button click
    mealDashboard.addToCart(AddAMealData.name);

     // Verify header cart button value change to 1 from 0
     cy.xpath(mealDashboard.headerCardButton).should(
        "have.text",
        CartBtnBadgeValueData.one
      );
  });
});
