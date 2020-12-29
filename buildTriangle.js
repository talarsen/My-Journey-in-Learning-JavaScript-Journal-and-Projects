
//function that makes a single line of *
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
  line += "* "
  }
  return line + "\n";
}

// function that builds a triangle of *
function buildTriangle(length) {
    // build a huge string equivalent to the triangle
    var triangle = "";

    //start from the topmost line
    var lineNumber = 1;
  //for loop determines the number of lines the triangle will have. 
    for(lineNumber = 1; lineNumber <= length; lineNumber++){
    
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}
buildTriangle(10);
