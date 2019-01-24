var vid = document.getElementsByClassName("videoplayer");
var link = document.getElementsByClassName("link");
for(var i=0;i<vid.length;i++){
    var src = vid[i].id;
    src = 'https://mgdrive.com/p/embed.php?z='+src;
    vid[i].src = src;
    src = src.replace("embed.php", "down.php");
    link[i].href = src;
}
