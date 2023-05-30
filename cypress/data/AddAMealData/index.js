const AddAMealData = {
  name: "cake",
  description: `sweet`,
  price: "10.00",
};

const AddAMealInvalidData = {
  name: "cake",
  description: `sweet`,
  price: "-13453.00",
  enterValidPrice: `Please enter a valid price (at least 0.01).`,
};

const CartBtnBadgeValueData = {
  zero: "0",
  one: `1`,
};

const addamountData = {
  zero: "0",
  one: `1`,
  invalidAmount: `-2356235`,
};

export { AddAMealData, AddAMealInvalidData, CartBtnBadgeValueData, addamountData };
