
 var time_delta = 0.5;       //parseFloat(document.getElementById("res_text_box").value);
 var hours =5;                //parseFloat(document.getElementById("hour_text_box").value);
 var num_of_rows = Math.ceil(hours/time_delta); 
 var groups = [];

 var task_title = "Swimming!"

 //groups[1] = ["1,2","3,4"];



function generate_table() {
 var current_hour = 0;
 

 const weekdays = ["Hour", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];



 // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < num_of_rows; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 8; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      if(i <1){
        var cellText = document.createTextNode(weekdays[j]);
      }else {
         
         if(j < 1){
          cellText = document.createTextNode(String(current_hour));
          current_hour = current_hour + time_delta;
         }
         else{
          cellText = document.createTextNode(" ");
         }
      }
      	
      var cell_id_string = String(j + ',' + i);
      //console.log(cell_id_string);
      cell.id = cell_id_string;
      cell.appendChild(cellText);
      cell.setAttribute("class", "a");
      cell.setAttribute("onClick", "select(this)");
  
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
  tbl.setAttribute("border", "3");
  tbl.setAttribute("width", "50%");
  


}


function merge_cells()
{
var namestring = "";
var ingroup = false;
var group_num = 1;

for(var j = 0; j < 8; j++)
{
  for (var i = 0; i < num_of_rows; i++)
  {
    namestring = String(j + ',' + i);
    
    if(document.getElementById(namestring).className !== "selected" && ingroup == true)
    {
      ingroup = false;
      console.log("group end");
    }
    else if(document.getElementById(namestring).className == "selected" && ingroup == true)
    {
      console.log(namestring +" is in group " + group_num);
      
      //Add element to group list
      groups[group_num].push(namestring);
    }
    else if(document.getElementById(namestring).className == "selected" && ingroup == false)
    {
      console.log(namestring + " START OF A NEW GROUP");

      //Add the task title to start of time block:
      document.getElementById(namestring).innerText = task_title;
      
      // Create new group for elements to go into
      group_num++;
      groups[group_num] =[];
      //add current element id to new group
      groups[group_num].push(namestring);

      ingroup = true;

    }
    
    if(document.getElementById(namestring).className == "selected")
    {
      document.getElementById(namestring).setAttribute("class", "b");
    }
    

  }

}
console.log(groups); 
}

function select(blah)
{
  document.getElementById(blah.id).setAttribute("class", "selected");
  document.getElementById(blah.id).setAttribute("onClick", "un_selected(this)");
}
   
function un_selected(blah)
{
  document.getElementById(blah.id).setAttribute("class", "a");
  document.getElementById(blah.id).setAttribute("onClick", "select(this)");
}
 


