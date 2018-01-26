function Pizza(){
  this.toppings = []
  this.price = 10;
}
Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};
$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var pizzaOrder = new Pizza();
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizzaOrder.addTopping(this.value.replace(/[0-9]/g, ''));
      pizzaOrder.price += parseInt(this.value);
    });
    $("#pizzaPrice").text(pizzaOrder.price);
  });


});
