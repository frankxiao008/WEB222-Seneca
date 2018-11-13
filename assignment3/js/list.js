// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];



window.onload = mylistpage;

function mylistpage() {

    var myfruits = document.querySelector("#fruitsdiv");
    var orderlist = document.createElement("ol");
    for (var i = 0; i < fruits.length; i++) {
        var li_it = document.createElement("li");
        var fruitText = document.createTextNode(fruits[i]);
        li_it.appendChild(fruitText);  
        orderlist.appendChild(li_it);
    }
    myfruits.appendChild(orderlist);

    var mydirectory = document.querySelector("#directory");
    var directorylist = document.createElement("ul");
    for (var i = 0; i < directory.length; i++) {
        var dir_li = document.createElement("li");
        if (directory[i].type == "file") {
            var directorytext = document.createTextNode(directory[i].name);
            dir_li.appendChild(directorytext);
            directorylist.appendChild(dir_li);
        }
        else if(directory[i].type =="directory"){
            var directorytext = document.createTextNode(directory[i].name);
            dir_li.appendChild(directorytext);
            directorylist.appendChild(dir_li);

            //making the unorder list for the files in a  directory
            //
            var file_ul = document.createElement("ul");
            for (var j = 0; j < directory[i].files.length; j++) {
                var fileText = document.createTextNode(directory[i].files[j].name);
                var file_li = document.createElement("li");
                file_li.appendChild(fileText);
                file_ul.appendChild(file_li);
                
            }

            //add the unorderlist to according outer list item
            //
            directorylist.appendChild(file_ul);
        }
        mydirectory.appendChild(directorylist);

    }

    





}



