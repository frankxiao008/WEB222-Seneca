// Data for the "HTML Images" Page

var images = [
    {caption: "Red Slate Mountain", alt: "Mountain", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Red_Slate_Mountain_1.jpg/320px-Red_Slate_Mountain_1.jpg"},
    {caption: "St. Petersburg River", alt: "River", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Saint-petersburg-river-march-24-2016.jpg/320px-Saint-petersburg-river-march-24-2016.jpg"},
    {caption: "Lybian Desert", alt: "Desert", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Libyan_Desert_-_2006.jpg/320px-Libyan_Desert_-_2006.jpg"},
    {caption: "Azerbaijan Forest", alt: "Forest", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Azerbaijan_forest_3.JPG/320px-Azerbaijan_forest_3.JPG"},
    {caption: "Indonesian Jungle", alt: "Jungle", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Indonesian_jungle3%2C_Zoo_Prague.jpg/320px-Indonesian_jungle3%2C_Zoo_Prague.jpg"}
];


window.onload = function () {
    var picturepart2 = document.querySelector("#imagepart2");
    for (var i = 0; i < images.length; i++) {
        var img_fig = document.createElement("figure");
        img_fig.appendChild(getImgElement(images[i]));
        img_fig.appendChild(getfigCaption(images[i].caption));
        picturepart2.appendChild(img_fig);
    }

};


function getImgElement(obj) {
    var imgElement = document.createElement("img");
    imgElement.src = obj.url;
    imgElement.alt = obj.alt;
    return imgElement;
}

function getfigCaption(text) {
    var fig_cap = document.createElement("figcaption");
    var cap = document.createTextNode(text);
    fig_cap.appendChild(cap);
    return fig_cap;
}

