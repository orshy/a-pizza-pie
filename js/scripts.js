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


  }

};
