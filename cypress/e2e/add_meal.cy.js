/// <reference types="cypress" />
import { AddAMealData, AddAMealInvalidData } from "../data/AddAMealData";
import MealDashboard from "../pages/MealDashboard";

describe("Add Meal Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Add Meal with valid data and verify meal is added successfully", () => {
    const mealDashboard = new MealDashboard();

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
  });

  it("Add Meal with invalid price and verify meal is not added", () => {
    const mealDashboard = new MealDashboard();

    mealDashboard.addMeal({
      ...AddAMealInvalidData,
    });

    // Verify Please enter a valid price should be visible
    cy.get(mealDashboard.enterValidPrice).should(
      "have.text",
      AddAMealInvalidData.enterValidPrice
    );
  });
});
