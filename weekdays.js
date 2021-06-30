//Going to attempt to create weekday 2d weekday array
var workout_list =[
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    ["Monday1", "Tuesday1", "Wednesday1", "Thursday1", "Friday1", "Saturday1", "Sunday1"],
    ["Monday2", "Tuesday2", "Wednesday2", "Thursday2", "Friday2", "Saturday2", "Sunday2"]
];

var weekly_weather = ["Sunny 90F", "Sunny 85F", "Rainy 75F","Sunny 90F","Sunny 90F","Sunny 90F","Sunny 90F" ];

function generate_table() {
 //const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
 // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 3; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      		var cellText = document.createTextNode(workout_list[i][j]);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
  tbl.setAttribute("width", "50%");
}


//Adding function to create weather table
function generate_table_1() {
    //const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // get the reference for the body
     var body = document.getElementsByTagName("body")[0];
    
     // creates a <table> element and a <tbody> element
     var tbl = document.createElement("table");
     var tblBody = document.createElement("tbody");
   
     // creating all cells
     for (var i = 0; i < 1; i++) {
       // creates a table row
       var row = document.createElement("tr");
   
       for (var j = 0; j < 7; j++) {
         // Create a <td> element and a text node, make the text
         // node the contents of the <td>, and put the <td> at
         // the end of the table row
         var cell = document.createElement("td");
                 var cellText = document.createTextNode(weekly_weather[j]);
   
         cell.appendChild(cellText);
         row.appendChild(cell);
       }
   
       // add the row to the end of the table body
       tblBody.appendChild(row);
     }
   
     // put the <tbody> in the <table>
     tbl.appendChild(tblBody);
     // appends <table> into <body>
     body.appendChild(tbl);
     // sets the border attribute of tbl to 2;
     tbl.setAttribute("border", "2");
     tbl.setAttribute("width", "50%");

   }
   
   function generate_table_all()
   {
       generate_table_1();
       generate_table();
   }