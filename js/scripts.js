var Pizza = {
  details: function(size, type) {
    this.size = size;
    this.type = type;
  },
  slices: function() {
    if (this.size <= 12) { return 4; }
    else if (this.size <= 18) {return 6; }
    else if (this.size <= 24) {return 8; }
    else { return 12; }

  },
  sizeRange: function() {
    if (this.size < 8 || this.size > 40)
    { return false; }
    return true;
  }
};

var empty = function() {
  $("#input-size").val("");
  $("#input-type").val("");
  $("#results").hide();
  $("#error").hide();
}

$(document).ready(function() {
  $("#form-pizza").submit(function(event) {
    var inputtedSize = parseInt($("#input-size").val());
    var inputtedType = $("#input-type").val();
    empty();
    var pizza = Object.create(Pizza);
    pizza.details(inputtedSize, inputtedType);
    if(pizza.sizeRange()) {
      var slice = pizza.slices();
      $("#results h5").text("Your " + pizza.size + " in. " + pizza.type + " pizza will arrive in " + slice + " slices.");
    $("#results").show();
  } else {
    $("#error h5").text("We do not make a " + pizza.size + " in. pizza");
    $("#error").show();
  }

  event.preventDefault();
  });

});
