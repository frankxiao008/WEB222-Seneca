// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function () {
    var audi = document.querySelector("#myaudio");
    var audi_element = document.createElement("audio");
    audi_element.controls = true;
    audi_element.appendChild(getAudioEle(audio.source[0]));
    audi_element.appendChild(getAudioEle(audio.source[1]));

    audi.appendChild(audi_element);
};

function getAudioEle(obj) {
    var srctag = document.createElement("source");
    srctag.src = obj.src;
    srctag.type = obj.type;
    return srctag;
}