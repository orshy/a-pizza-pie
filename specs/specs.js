describe("Pizza", function() {

  describe("details", function() {
    it("Will create object size and type", function() {
      var salePie = Object.create(Pizza);
      salePie.details(18, "cheese");
      expect(salePie.size).to.equal(18);
    });


  });


});
