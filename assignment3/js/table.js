/*********************************************************************************
* WEB222 ?Assignment 3
* Name: _____Saihong Xiao_______ Student ID: ___140777178___ Date: __October 25, 2018____
********************************************************************************/
// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];


window.onload = function () {
    var table3div = document.querySelector("#table3");
    var tbl3 = document.createElement("table");
    tbl3.style.border = "1px solid #000000";

    //the table head
    //
    var header = ["Fisrt Name", "Last Name", "Age", "Email"];
    var headtr = document.createElement("tr");

    for (var i = 0; i < header.length; i++) {
        var head_th = document.createElement("th");
        head_th.style.border = "1px solid #000000";
        head_th.appendChild(document.createTextNode(header[i]))
        headtr.appendChild(head_th);

    }
   
    tbl3.appendChild(headtr);

    for (var i = 0; i < users.length; i++) {
        var table_tr = document.createElement("tr");
        table_tr.appendChild(getTdElement(users[i].first_name));
        table_tr.appendChild(getTdElement(users[i].last_name));
        table_tr.appendChild(getTdElement(users[i].age));
        table_tr.appendChild(getTdLinkElement(users[i].email));


        tbl3.appendChild(table_tr);
    }

    table3div.appendChild(tbl3);
    
}

//create a ordinary table data element
function getTdElement(text) {
    var tbl_cell = document.createElement("td");
    tbl_cell.style.border = "1px solid #000000";
    var cellText = document.createTextNode(text);
    tbl_cell.appendChild(cellText);
    return tbl_cell;
}


//create a <td> element with a hyperlink
function getTdLinkElement(text) {
    var tbl_cell = document.createElement("td");
    tbl_cell.style.border = "1px solid #000000";

    var anchor = document.createElement("a");
    anchor.setAttribute("href", "mailto:" + text);
    var anchorText = document.createTextNode(text);
    anchor.appendChild(anchorText);
        
    tbl_cell.appendChild(anchor);  
    return tbl_cell;
}



