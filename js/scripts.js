$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    alert("hello");
    $("input:checkbox[name=toppings]:checked").each(function(){
      console.log(this.value);
    });
  });
});
