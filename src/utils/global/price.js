class getPrice {
  constructor(number) {
    this.number = number || 0;
  }
  toString() {
    return this.number.toString();
  }
}

let price = new getPrice(NaN);
console.log(price.toString());
console.log(price.constructo === getPrice.prototype.constructor);
