function Pizza(size){
  this.toppings = [];
  this.size = size;
}

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
}

Pizza.prototype.getPrice = function(){
  var price = 15;
  if (this.size === "Small") {
    price = 10;
  } else if(this.size === "Medium" ){
    price = 13;
  }
  this.toppings.forEach(function(topping){
    price += parseInt(topping);
  });
  return price;
}

$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var pizzaOrder = new Pizza($("#size").val());
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizzaOrder.addTopping(this.value);
    });
  $(".jumbotron").toggleClass("trippy");
  $("#pizzaPrice").text("The cost of your pizza is $" + pizzaOrder.getPrice())
  });
});
