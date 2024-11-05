function createTable() {
    var table = document.createElement("table");

    // Creating table rows
    var tr1 = document.createElement("tr");
    var tr2 = document.createElement("tr");
    var tr3 = document.createElement("tr");
    var tr4 = document.createElement("tr");

    // Creating table headers
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');

    // Creating table data cells
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    var td9 = document.createElement("td");

    // Setting text for headers
    th1.innerText = "ID";
    th2.innerText = "NAME";
    th3.innerText = "EMAIL";

    // Setting text for data cells
    td1.innerText = 101;
    td2.innerText = "Naveen";
    td3.innerText = "Naveen@123";
    td4.innerText = 102;
    td5.innerText = "Raj";
    td6.innerText = "Raj@123";
    td7.innerText = 103;
    td8.innerText = "Suresh";
    td9.innerText = "suresh@123";

    // Appending headers to the first row
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    // Appending data cells to the respective rows
    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);
    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    // Appending rows to the table
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);

    // Styling the table
    table.style.width = "800px";
    table.style.border = "1px solid black";
    table.cellPadding = "10";
    table.cellSpacing = "0";
    table.style.borderCollapse = "collapse";

    // Styling the header row
    tr1.style.backgroundColor = "black";
    tr1.style.color = "white";

    // Appending the table to the body
    var bodyRef = document.getElementsByTagName("body")[0];
    bodyRef.appendChild(table);

    console.log(bodyRef);
}

// Call the function to create and append the table
createTable();
