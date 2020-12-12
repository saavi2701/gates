var n = 1;




function AddData()
{
var e = document.getElementById("A").value;
var f = document.getElementById("B").value;
var x = document.getElementById("Z").value;
var y = document.getElementById("R").value;
if(e === "0" && x === "0" )
{
y = "Correct";
}

else if (f === "0" && x === "0" )
{
y = "Correct";
}
else if (e === "1" && f === "1" && x === "1"   )

{
y = "Correct";
}
else
{

y = "Incorrect";
}




      var table = document.getElementById("mytable");


      // Create an empty <tr> element and add it to the 1st position of the table:
      var row = table.insertRow(-1);
      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);

      cell1.innerHTML = n++;
      cell2.innerHTML = e;
      cell3.innerHTML = f;
      cell4.innerHTML = x;
      cell5.innerHTML = y;
row.classList.add("new-row");
var data=cell1.innerHTML;

if(data%2==0){
  console.log("done");
  row.classList.add("new-row-even");
};
  }



  function AddDataOR()
  {
  var e = document.getElementById("A").value;
  var f = document.getElementById("B").value;
  var x = document.getElementById("Z").value;
  var y = document.getElementById("R").value;
  if(e === "1" && x === "1" )
  {
  y = "Correct";
  }

  else if (f === "1" && x === "1" )
  {
  y = "Correct";
  }
  else if (e === "0" && f === "0" && x === "0"   )

  {
  y = "Correct";
  }
  else
  {

  y = "Incorrect";
  }




        var table = document.getElementById("mytable");


        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(-1);
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);

        cell1.innerHTML = n++;
        cell2.innerHTML = e;
        cell3.innerHTML = f;
        cell4.innerHTML = x;
        cell5.innerHTML = y;
  row.classList.add("new-row");
  var data=cell1.innerHTML;

  if(data%2==0){
    console.log("done");
    row.classList.add("new-row-even");
  };
    }


    function AddDataNAND()
    {
    var e = document.getElementById("A").value;
    var f = document.getElementById("B").value;
    var x = document.getElementById("Z").value;
    var y = document.getElementById("R").value;
    if(e === "0" && x === "1" )
    {
    y = "Correct";
    }

    else if (f === "0" && x === "1" )
    {
    y = "Correct";
    }
    else if (e === "1" && f === "1" && x === "0"   )

    {
    y = "Correct";
    }
    else
    {

    y = "Incorrect";
    }




          var table = document.getElementById("mytable");


          // Create an empty <tr> element and add it to the 1st position of the table:
          var row = table.insertRow(-1);
          // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
         var cell5 = row.insertCell(4);

          cell1.innerHTML = n++;
          cell2.innerHTML = e;
          cell3.innerHTML = f;
          cell4.innerHTML = x;
          cell5.innerHTML = y;
    row.classList.add("new-row");
    var data=cell1.innerHTML;

    if(data%2==0){
      console.log("done");
      row.classList.add("new-row-even");
    };
      }
      function AddDataNOR()
      {
      var e = document.getElementById("A").value;
      var f = document.getElementById("B").value;
      var x = document.getElementById("Z").value;
      var y = document.getElementById("R").value;
      if(e === "1" && x === "0" )
      {
      y = "Correct";
      }

      else if (f === "1" && x === "0" )
      {
      y = "Correct";
      }
      else if (e === "0" && f === "0" && x === "1"   )

      {
      y = "Correct";
      }
      else
      {

      y = "Incorrect";
      }




            var table = document.getElementById("mytable");


            // Create an empty <tr> element and add it to the 1st position of the table:
            var row = table.insertRow(-1);
            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
           var cell5 = row.insertCell(4);

            cell1.innerHTML = n++;
            cell2.innerHTML = e;
            cell3.innerHTML = f;
            cell4.innerHTML = x;
            cell5.innerHTML = y;
      row.classList.add("new-row");
      var data=cell1.innerHTML;

      if(data%2==0){
        console.log("done");
        row.classList.add("new-row-even");
      };
        }

function clearForm() {
document.getElementById("myForm").reset();


}

function pr() {
window.print();
}
function dropdown() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
var openDropdown = dropdowns[i];
if (openDropdown.classList.contains('show')) {
openDropdown.classList.remove('show');
}
}
}
}


function checkmyinput () {
    // Get inputfield
    var inputfield = document.getElementById("A");


    // Get value from inputfield
    var inputval = inputfield.value;

    // Remove non numeric input
    var numeric = inputval.replace(/[^0-9]+/,"");

    // Check if input is numeric and even, if not empty field
    if (numeric.length != inputval.length || numeric != 0 &&  numeric != 1 ) {
        inputfield.value = '';
    }
}

function checkmyinputB () {
    // Get inputfield
    var inputfield = document.getElementById("B");


    // Get value from inputfield
    var inputval = inputfield.value;

    // Remove non numeric input
    var numeric = inputval.replace(/[^0-9]+/,"");

    // Check if input is numeric and even, if not empty field
    if (numeric.length != inputval.length || numeric != 0 &&  numeric != 1 ) {
        inputfield.value = '';
    }
}

function checkmyinputZ () {
    // Get inputfield
    var inputfield = document.getElementById("Z");


    // Get value from inputfield
    var inputval = inputfield.value;

    // Remove non numeric input
    var numeric = inputval.replace(/[^0-9]+/,"");

    // Check if input is numeric and even, if not empty field
    if (numeric.length != inputval.length || numeric != 0 &&  numeric != 1 ) {
        inputfield.value = '';
    }
}
