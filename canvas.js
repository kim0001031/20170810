$.jCanvas.defaults.fromCenter = false;
function drawText(text, x, y, name) {
    $("canvas").drawText({
        fillStyle: "black",
        strokeStyle: "black",
        strokeWidth: "0.5",
        x: x,
        y: y,
        fontSize: 14,
        fontFamily: "sans-serif",
        text: text,
        name: name + "-text",
        draggable: false,    
        groups: ["categories"],
        dragGroups: ["categories"]
    });
}

function drawEntity(x,y,name) {
    $("canvas").drawRect({
        strokeStyle: "blue",
        strokeWidth: 1,
        x: 45+x,
        y: 45+y,
        width: 100,
        height: 75,
        draggable: false,    
        groups: ["categories"],
        dragGroups: ["categories"],
        name: name
    });
    $("canvas").drawLine({
        strokeStyle: "black",
        strokeWidth: 1,
        x1: 45+x,
        y1: 70+y,
        x2: 145+x,
        y2: 70+y,
        draggable: true,
        groups: ["categories"],
        dragGroups: ["categories"]
    });
    drawText("categories",  50+x, 50+y,  "sample1"+name);
    drawText("category_id", 50+x, 80+y,  "sample2"+name);
    drawText("name2",       50+x, 100+y, "sample3"+name);
}

drawEntity(105,10,"pair");
drawEntity(10,150,"en1");
drawEntity(200,150,"en2");

function drawLink(pair,ch1,ch2) {
    var border1 = $("canvas").getLayer(ch1);
    var border2 = $("canvas").getLayer(ch2);
    var borderPair = $("canvas").getLayer(pair);
    //横線
    $("canvas").drawLine({
        strokeStyle: "black",
        strokeWidth: 1,
        x1: border1.x + border1.width/2,
        y1: border1.y - border1.height/2,
        x2: border2.x + border1.width/2,
        y2: border2.y - border1.height/2,
        draggable: true,
        groups: ["categories"],
        dragGroups: ["categories"],
        name: "link1"
    });
    //親から横線まで
    $("canvas").drawLine({
        strokeStyle: "black",
        strokeWidth: 1,
        x1: borderPair.x + borderPair.width/2,
        y1: borderPair.y + borderPair.height,
        x2: borderPair.x + borderPair.width/2,
        y2: border2.y    - border1.height/2,
        draggable: true,
        groups: ["categories"],
        dragGroups: ["categories"],
        name: "link2"       
    });
    //横線から子1まで
    $("canvas").drawLine({
        strokeStyle: "black",
        strokeWidth: 1,
        x1: border1.x + border1.width/2,
        y1: border2.y - border1.height/2,
        x2: border1.x + border1.width/2,
        y2: border2.y,
        draggable: true,
        groups: ["categories"],
        dragGroups: ["categories"],
        name: "link3"
    });
    //横線から子2まで
    $("canvas").drawLine({
        strokeStyle: "black",
        strokeWidth: 1,
        x1: border2.x + border1.width/2,
        y1: border2.y - border1.height/2,
        x2: border2.x + border1.width/2,
        y2: border2.y,
        draggable: true,
        groups: ["categories"],
        dragGroups: ["categories"],
        name: "link4"
    });
}
drawLink("pair","en1","en2");

//未完成
function onDrag(layer) {

}
function onDragStop(layer) {
    // Do something...
}

function onDragCancel(layer) {
    // Do something...
}