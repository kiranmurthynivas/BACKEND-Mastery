function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;

  Product.prototype.showDetails = function() {
    console.log(`Name : ${this.name}`);
    console.log(`Price : ${this.price}`);
    console.log(`Categorey : ${this.category}`)
  }

  Product.prototype.applyDiscount = function( val) {
    this.price = this.price - (this.price * val / 100);
  } 

}

const p1 = new Product("Laptop", 50000, "Electronics");

p1.showDetails();
p1.applyDiscount(10);
p1.showDetails();