describe("Pizza", function() {

  describe("details", function() {
    it("will create object size and type", function() {
      var salePie = Object.create(Pizza);
      salePie.details(18, "cheese");
      expect(salePie.size).to.equal(18);
    });
  });

  describe("slices", function() {
    it("will determine number of slices based on size", function() {
        var salePie = Object.create(Pizza);
        salePie.details(18, "cheese");
        expect(salePie.slices()).to.equal(6);
    });
  });
});
