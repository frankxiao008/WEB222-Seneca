// All you JavaScript code for assignment 4 should be in this file


window.onload = function () {
    getTable("list");
    // getsubtitle("list")


}


function getTable(option) {
    // getsubtitle(select);
    var countrytbl = document.querySelector("#outputTable");

    var title = document.querySelector("#subtitle");

    for (var i = 0; i < countries.length; i++) {
        switch (option) {
            case "list":
                title.innerHTML = "List of Countries and Dependencies";
                countrytbl.appendChild(getRow("English"));
                break;
            /* case "pop1":
                 title.innerHTML = "List of Countries and Dependencies - Population greater than 100 million";
                 ok = countries[i].Population > 100000000;
                 break;
             case "pop2":
                 title.innerHTML = "List of Countries and Dependencies - Population between 1 and 2 million";
                 ok = countries[i].Population > 1000000 && countries[i].Population < 2000000;
                 break;
             case "area_con":
                 title.innerHTML = "List of Countries and Dependencies - Area greater than 1 million Km2, Americas";
                 ok = countries[i].AreaInKm2 > 1000000 && countries[i].Continent == "Americas";
                 break;
             case "aisa":
                 title.innerHTML = "List of Countries and Dependencies - All countries in Asia";
                 ok = countries[i].Continent == "Asia";
                 break;
             case "lan1":
                 title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Arabic (أفغانستان)";
                 ok = countries[i].
                     break;
             case "lan2":
                 title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Chinese (中文)";
                 break;
             case "lan3":
                 title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Franch (Afghanistan)";
                 break;
             case "lan4":
                 title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Hindi (अफ़ग़ानिस्तान)";
                 break;
             case "lan5":
                 title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Korean (아프가니스탄)";
                 break;
             case "lan6":
                 title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Japanese (アフガニスタン)";
                 break;
             case "lan7":
                 title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Russian (Афганистан)";
                 break;  */
        }
        /*         for (var i = 0; i < countries.length && ok; i++) {
      
                      var rows = document.createElement("tr");
                      rows.appendChild(getImgtd(countries[i].Code));
                      rows.appendChild(getTd(countries[i].Code));
                      rows.appendChild(getTd(countries[i].Name.text));
                      rows.appendChild(getTd(countries[i].Continent));
                      rows.appendChild(getTd(countries[i].AreaInKm2));
                      rows.appendChild(getTd(countries[i].Population));
                      rows.appendChild(getTd(countries[i].Capital));
                      countrytbl.appendChild(rows);
      
      
           
           }
         */


    }
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

function getRow(lang) {
    var rows = document.createElement("tr");
    rows.appendChild(getImgtd(countries[i].Code));
    rows.appendChild(getTd(countries[i].Code));
    rows.appendChild(getTd(countries[i].Name.lang));
    rows.appendChild(getTd(countries[i].Continent));
    rows.appendChild(getTd(countries[i].AreaInKm2));
    rows.appendChild(getTd(countries[i].Population));
    rows.appendChild(getTd(countries[i].Capital));
    return rows;
}



/*
function getsubtitle(select) {
    var title = document.querySelector("#subtitle");
    var ok;
    switch (select) {
        case "list":
            title.innerHTML = "List of Countries and Dependencies";
            ok = true;
            break;
        case "pop1":
            title.innerHTML = "List of Countries and Dependencies - Population greater than 100 million";
            ok = countries[i].Population > 100000000;
            break;
        case "pop2":
            title.innerHTML = "List of Countries and Dependencies - Population between 1 and 2 million";
            ok = countries[i].Population > 1000000 && countries[i].Population < 2000000;
            break;
        case "area_con":
            title.innerHTML = "List of Countries and Dependencies - Area greater than 1 million Km2, Americas";
            ok = countries[i].AreaInKm2 > 1000000 && countries[i].Continent == "Americas";
            break;
        case "aisa":
            title.innerHTML = "List of Countries and Dependencies - All countries in Asia";
            ok = countries[i].Continent == "Asia";
            break;
        case "lan1":
            title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Arabic (أفغانستان)";
            ok=countries[i].
            break;
        case "lan2":
            title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Chinese (中文)";
            break;
        case "lan3":
            title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Franch (Afghanistan)";
            break;
        case "lan4":
            title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Hindi (अफ़ग़ानिस्तान)";
            break;
        case "lan5":
            title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Korean (아프가니스탄)";
            break;
        case "lan6":
            title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Japanese (アフガニスタン)";
            break;
        case "lan7":
            title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Russian (Афганистан)";
            break;


    }

    

}
*/