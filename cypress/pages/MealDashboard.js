export default class MealDashboard {
  constructor() {
    // Add meal
    this.mealNameInputField = `//label[@class='mt-2' and text()="Name:"]/input`;
    this.mealDescriptionInputField = `//label[@class='mt-2' and text()="Description:"]/input`;
    this.mealPriceInputField = `//label[@class='mt-2' and text()="Price:"]/input`;
    this.addAMealButton = `//button[@type='submit']`;

    // Verify added meal
    this.addedMealName = (mealName) =>
      `//div[contains(@class,'Card_card')]//h3[text()='${mealName}']`;
    this.addedMealDescription = (mealDescription) =>
      `//div[contains(@class,'Card_card')]/ul/li/div/div[contains(@class,"MealItem_description") and text()='${mealDescription}']`;
    this.addedMealPrice = (mealPrice) =>
      `//div[contains(@class,'Card_card')]/ul/li/div/div[contains(@class,"MealItem_price") and text()='$${mealPrice}']`;

    // Enter valid price
    this.enterValidPrice = `div > form > label:nth-child(6) > p`;

    // Add meal to cart
    this.addMealToCartBtn = (mealName) =>
      `//div[contains(@class, 'Card_card')]//h3[text()='${mealName}']/../../div[2]//button`;

    // Header card button
    this.headerCardButton = `//span[contains(@class, 'HeaderCartButton_badge')]`;

    // Your cart model popup
    this.cartItemMealName = (mealName) =>
      `//li[contains(@class, 'CartItem_cart-item')]/div/h2[text()='${mealName}']`;

      this.cartItemMealPrice = (mealprice) =>
      `//li[contains(@class, 'CartItem_cart-item')]//span[contains(@class,"CartItem_price") and text()='$${mealprice}']`;
  
  // Add amount 
  this.addAmountInput = (name) =>
      `//div[contains(@class, 'Card_card')]//h3[text()='${name}']/../../div[2]//input`;
    }

  /**
   * User Add meal
   * @param {{name: String, description: String, price: String }}
   */

  addMeal({ name, description, price }) {
    {
      cy.xpath(this.mealNameInputField).type(name);
      cy.xpath(this.mealDescriptionInputField).type(description);
      cy.xpath(this.mealPriceInputField).type(price);
      cy.xpath(this.addAMealButton).click();
    }
  }

  /**
   * Add to cart
   * @param {String} name
   */

  addToCart(name) {
    {
      cy.xpath(this.addMealToCartBtn(name)).click();
    }
  }

    /**
   * Add amount
   * @param {{name: String, amount: String }} 
   */

    addAmount({name, amount}) {
      {
        cy.xpath(this.addAmountInput(name)).clear()
        cy.xpath(this.addAmountInput(name)).type(amount)
      }
    }
}
require(`cypress-xpath`);
