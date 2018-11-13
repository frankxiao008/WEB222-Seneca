// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg", type: "video/ogg"}
    ]
};

window.onload = function () {
    var myvideopart = document.querySelector("#myvideo");
    var Myvideo = document.createElement("video");
    Myvideo.controls = video.controls;
    Myvideo.width = video.width;
    Myvideo.height = video.height;
    Myvideo.appendChild(getVideoEle(video.source[0]));
    Myvideo.appendChild(getVideoEle(video.source[1]));

    myvideopart.appendChild(Myvideo);

};



function getVideoEle(obj) {
    var srctag = document.createElement("source");
    srctag.src = obj.src;
    srctag.type = obj.type;
    return srctag;
}