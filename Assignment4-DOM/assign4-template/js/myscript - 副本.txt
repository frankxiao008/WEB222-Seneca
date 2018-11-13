// All you JavaScript code for assignment 4 should be in this file


window.onload = function () {
   getTable("list");
   document.querySelector("#menu_21").onclick = function () { getTable("pop1"); };
    document.querySelector("#menu_22").onclick = function () { getTable("pop2"); };
    document.querySelector("#menu_31").onclick = function () { getTable("area_con"); };
    document.querySelector("#menu_32").onclick = function () { getTable("asia"); };
    document.querySelector("#menu_41").onclick = function () { getTable("lan1"); };
    document.querySelector("#menu_42").onclick = function () { getTable("lan2"); };
    document.querySelector("#menu_43").onclick = function () { getTable("lan3"); };
    document.querySelector("#menu_44").onclick = function () { getTable("lan4"); };
    document.querySelector("#menu_45").onclick = function () { getTable("lan5"); };
    document.querySelector("#menu_46").onclick = function () { getTable("lan6"); };
    document.querySelector("#menu_47").onclick = function () { getTable("lan7"); };
    document.querySelector("#menu_48").onclick = function () { getTable("lan8"); };


}


function getTable(option) {

    var countrytbl = document.querySelector("#outputTable");

    var title = document.querySelector("#subtitle");
    var tblExistingBody = countrytbl.querySelector("tbody");
    if (tblExistingBody)
        countrytbl.removeChild(tblExistingBody);
    
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < countries.length; i++) {
        switch (option) {
            case "list":
                title.innerHTML = "List of Countries and Dependencies";
                tblBody.appendChild(getRow("English", i));                
                break;
            case "pop1":
                title.innerHTML = "List of Countries and Dependencies - Population greater than 100 million";
                if (countries[i].Population > 100000000)
                    tblBody.appendChild(getRow("English", i));
                break;
            case "pop2":
                title.innerHTML = "List of Countries and Dependencies - Population between 1 and 2 million";
                if (countries[i].Population > 1000000 && countries[i].Population < 2000000)
                    tblBody.appendChild(getRow("English", i));
                break;
            case "area_con":
                title.innerHTML = "List of Countries and Dependencies - Area greater than 1 million Km2, Americas";
                if (countries[i].AreaInKm2 > 1000000 && countries[i].Continent == "Americas")
                    tblBody.appendChild(getRow("English", i));
                break;
            case "asia":
                title.innerHTML = "List of Countries and Dependencies - All countries in Asia";
                if (countries[i].Continent == "Asia")
                    tblBody.appendChild(getRow("English", i));
                break;
            case "lan1":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in English (English)";
                tblBody.appendChild(getRow("English", i));
                break;
            case "lan2":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Arabic (عربى)";
                tblBody.appendChild(getRow("Arabic", i));
                break;
            case "lan3":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Chinese (中文)";
                tblBody.appendChild(getRow("Chinese", i));
                break;
            case "lan4":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in French (français)";
                tblBody.appendChild(getRow("Franch", i));
                break;
            case "lan5":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Hindi (हिंदी)";
                countrytbl.appendChild(getRow("Hindi", i));
                break;
            case "lan6":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Korean (한국어)";
                tblBody.appendChild(getRow("Korean", i));
                break;
            case "lan7":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Japanese (日本語)";
                tblBody.appendChild(getRow("Japanese", i));
                break;

            case "lan8":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Russian (русский)";
                tblBody.appendChild(getRow("Russian", i));
                break; 
        }

    }
    countrytbl.appendChild(tblBody);
}



function getImgtd(code) {

    var flagtd = document.createElement("td");
    var flagimg = document.createElement("img");
    var text = "flags/" + code + ".png";
    flagimg.src = text;
    flagtd.appendChild(flagimg);
    return flagtd;
}


function getTd(text) {
    var newtd = document.createElement("td");
    var newtext = document.createTextNode(text);
    newtd.appendChild(newtext);
    return newtd;
}

function getRow(lang, i) {

    
    var rows = document.createElement("tr");
    rows.appendChild(getImgtd(countries[i].Code));
    rows.appendChild(getTd(countries[i].Code));
    rows.appendChild(getTd(countries[i].Name[lang]));
    rows.appendChild(getTd(countries[i].Continent));
    rows.appendChild(getTd(countries[i].AreaInKm2));
    rows.appendChild(getTd(countries[i].Population));
    rows.appendChild(getTd(countries[i].Capital));
    return rows;
}




    
