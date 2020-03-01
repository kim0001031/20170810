$.jCanvas.defaults.fromCenter = false;

const CANVAS_WIDTH    = 1800;
const CANVAS_HEIGHT   = 500;
const ENTITY_1_NUM  = 3;
const ENTITY_2_NUM  = 9;
const ENTITY_3_NUM  = 18;
const ENTITY_WIDTH  = 150;
const ENTITY_HGT_UP = 50;
const ENTITY_HGT_DOWN = 80;
const ENTITY_HEIGHT = 130;

const COLOR_TYPE_ARRAY = ["TYPEA","TYPEB","TYPEC"];

function drawText(text, xsize, ysize, name,grp,color = "black") {
    $("canvas").drawText({
        fillStyle: color,
        strokeStyle: color,
        strokeWidth: "0.5",
        x: xsize, y: ysize,
        fontSize: 20,
        maxWidth: 120,
        fontFamily: "sans-serif",
        text: text,
        draggable: true,
        groups: [grp],
        dragGroups: [grp],
        drag: onDrag,
        dragstop: onDragStop,
        dragcancel: onDragCancel,
        name: name + "-text"
    });
}

function drawEntity(xsize, ysize, entityColor, name) {
     
    $("canvas").drawRect({
	    fillStyle: entityColor,
        strokeStyle: entityColor,
        strokeWidth: 1,
        x: 25+xsize, y: 25+ysize,
        width: ENTITY_WIDTH, height: ENTITY_HGT_UP,
        draggable: true,    
        groups: [name+"-grp"],
        dragGroups: [name+"-grp"],
        drag: onDrag,
        dragstop: onDragStop,
        dragcancel: onDragCancel,
        name: name+"up"
    });
    $("canvas").drawRect({
        strokeStyle: entityColor,
        strokeWidth: 1,
        x: 25+xsize,    y: 25+ENTITY_HGT_UP+ysize,
        width: ENTITY_WIDTH, height: ENTITY_HGT_DOWN,
        draggable: true,    
        groups: [name+"-grp"],
        dragGroups: [name+"-grp"],
        drag: onDrag,
        dragstop: onDragStop,
        dragcancel: onDragCancel,
        name: name+"down"
    });
}

function selectColor(pointObj){
    let entityColor = "blue";
    switch (pointObj.type){
        case COLOR_TYPE_ARRAY[0]:
            entityColor = "red";
            break;
        case COLOR_TYPE_ARRAY[1]:
            entityColor = "blue";    
            break;
        case COLOR_TYPE_ARRAY[2]:
            entityColor = "green";
            break;
        default:
            entityColor = "black";
            break;
    }
    return entityColor;
}

function selectTextColor(value){
    let textColor = "black";
    if(value < 0) textColor = "red";
    return textColor;
}

//entity 
function makeEntity(pointObj,name,obj) {

    let entityColor = selectColor(pointObj);
    drawEntity(pointObj.x, pointObj.y, entityColor, name);

    let textColor = selectTextColor(obj.val2);
    drawText(obj.title,    30+pointObj.x, 30+pointObj.y,               obj.id+"_1", name+"-grp");
    drawText(obj.koumoku1, 30+pointObj.x, 30+ENTITY_HGT_UP+pointObj.y, obj.id+"_2", name+"-grp");
    drawText(obj.val1,    130+pointObj.x, 30+ENTITY_HGT_UP+pointObj.y, obj.id+"_4", name+"-grp");
    drawText(obj.koumoku2, 30+pointObj.x, 70+ENTITY_HGT_UP+pointObj.y, obj.id+"_3", name+"-grp");
    drawText(obj.val2,    130+pointObj.x, 70+ENTITY_HGT_UP+pointObj.y, obj.id+"_5", name+"-grp", textColor);
}

// ENTITY PLACE
function entityPlace(pArray,ch1Array,ch2Array){
    let array = [];
    let array2 = [];
    let array3 = [];

    let height1 = 10;
    let height2 = (CANVAS_HEIGHT/3)*1+10;
    let height3 = (CANVAS_HEIGHT/3)*2+10;
    

    //1階層
    let num = CANVAS_WIDTH/pArray.length;
    for(let i=0; i < pArray.length; i++){
        let setPlace = { 
                         "x":num*(i+0.5)-(ENTITY_WIDTH/2), 
                         "y":height1, 
                         "id":pArray[i].id,
                         "type":COLOR_TYPE_ARRAY[i]
                        };
        array.push(setPlace);

        //2階層
        let tmpArraych1 = ch1Array.filter(ent => (ent.pair == pArray[i].id));
        let ch1PointX = setPlace.x - ENTITY_WIDTH * 5/ 6;
        let num2 = ENTITY_WIDTH * 5/ 6;;

        for(let j=0; j < tmpArraych1.length; j++){   
            let setPlaceCh1 = {
                         "x":ch1PointX + num2*2*j,
                         "y":height2,
                         "id":tmpArraych1[j].id,
                         "type":COLOR_TYPE_ARRAY[i]
                        };
            array2.push(setPlaceCh1);

            //3階層
            let tmpArraych2 = ch2Array.filter(ent => (ent.pair == tmpArraych1[j].id));
            let ch2PointX = setPlaceCh1.x - ENTITY_WIDTH * 5/ 6;
            let num3 = ENTITY_WIDTH * 5/ 6;;
            for(let k=0; k < tmpArraych2.length; k++){   
                let setPlaceCh2 = {
                            "x":ch2PointX + num3*2*k,
                            "y":height3,
                            "id":tmpArraych2[k].id,
                            "type":COLOR_TYPE_ARRAY[i]
                            };
                array3.push(setPlaceCh2);
            }
        }
    }
    array = array.concat(array2).concat(array3);

    console.log("Point Array");
    console.log(array);
    return array;
}

//-----DrawLine-----------
function getPointUnder(name){
    var entity = $("canvas").getLayer(name+"down");
    return {
        "x": entity.x + entity.width/2,
        "y": entity.y + entity.height,
    }
}

function getPointUp(name){
    var entity = $("canvas").getLayer(name+"up");
    return {
        "x": entity.x + entity.width/2,
        "y": entity.y,
    }
}

//ent1,ent2をコネクト線でつなぐ
function drowLineLink(ent1,ent2){
  let obj1 = getPointUnder(ent1);
  let obj2 = getPointUp(ent2);
  
  let center = obj1.y + (obj2.y-obj1.y)/2;

  $("canvas").drawLine({
    strokeStyle: "black",
    strokeWidth: 2,
    x1: obj1.x, y1: obj1.y,
    x2: obj1.x, y2: center,
    x3: obj2.x, y3: center,
    x4: obj2.x, y4: obj2.y,
    draggable: true,
    name: ent1 + ent2
  });
  
  lineNameArray.push(ent1 + ent2);
}

function drawLink(){
    for(let i = 0; i<jsondata.length; i++){
        if(jsondata[i].pair !== ""){
            drowLineLink(jsondata[i].pair+"entity", jsondata[i].id+"entity");
        }
    }
}

function makeEntityArray(){
    jsondata.forEach(ent1 => {
        if(ent1.pair === ""){
            pairArray.push(ent1);
            ch1Array = ch1Array.concat(jsondata.filter(ent2 => ent2.pair == ent1.id));
        }
    });

    ch1Array.forEach(ent1 => {
            ch2Array = ch2Array.concat(jsondata.filter(ent2 => ent2.pair == ent1.id));
    });
}

//---EVENT---------------- 
function onDrag(layer) {
    lineNameArray.forEach(str =>{
        $("canvas").removeLayer(str);
    });
    lineNameArray = [];
    drawLink();
}

function onDragStop(layer) {
}

function onDragCancel(layer) {
}
//------------------------

//-----main---------

let pairArray = [];
let ch1Array  = [];
let ch2Array  = [];
let lineNameArray = [];

// let jsondata = {};
// fetch('package.json')
//  .then((data) =>data.json())
//  .then((obj) => {
//     jsondata = obj;
//  });

// console.log(jsondata);

let jsondata = [
    {"id": "001",  "title": "abc1", "koumoku1":  "平均", "val1":85, "koumoku2": "増減", "val2":85, "pair":""},
    {"id": "002",  "title": "abc2", "koumoku1":  "平均", "val1":56, "koumoku2": "増減", "val2":-30, "pair":"001"},
    {"id": "003",  "title": "abc3", "koumoku1":  "平均", "val1":12, "koumoku2": "増減", "val2":-85, "pair":"001"},
    {"id": "004",  "title": "abc4", "koumoku1":  "平均", "val1":32, "koumoku2": "増減", "val2":35, "pair":""},
    {"id": "005",  "title": "abc5", "koumoku1":  "平均", "val1":33, "koumoku2": "増減", "val2":-85, "pair":"004"},
    {"id": "006",  "title": "abc6", "koumoku1":  "平均", "val1":34, "koumoku2": "増減", "val2":85, "pair":"004"},
    {"id": "007",  "title": "abc7", "koumoku1":  "平均", "val1":36, "koumoku2": "増減", "val2":85, "pair":"005"},
    {"id": "008",  "title": "abc8", "koumoku1":  "平均", "val1":64, "koumoku2": "増減",  "val2":85, "pair":"005"},
    {"id": "009",  "title": "abc9", "koumoku1":  "平均", "val1":13, "koumoku2": "増減", "val2":-85, "pair":""},
    {"id": "010",  "title": "abc10", "koumoku1": "平均", "val1":75, "koumoku2": "増減",  "val2":85, "pair":"009"},
    {"id": "011",  "title": "abc11", "koumoku1": "平均", "val1":56, "koumoku2": "増減", "val2":85, "pair":"009"},
    {"id": "012",  "title": "abc12", "koumoku1": "平均", "val1":47, "koumoku2": "増減",  "val2":85, "pair":"002"},
    {"id": "013",  "title": "abc13", "koumoku1": "平均", "val1":78, "koumoku2": "増減", "val2":85, "pair":"002"},
  ];


makeEntityArray();

console.log("第1階層");
console.log(pairArray);
console.log("第2階層");
console.log(ch1Array);
console.log("第3階層");
console.log(ch2Array);

let array = entityPlace(pairArray, ch1Array, ch2Array);
let result_concat = pairArray.concat(ch1Array).concat(ch2Array);

for(let i = 0; i<array.length; i++){
    makeEntity(array[i], result_concat[i].id+"entity", result_concat[i]);
}

drawLink();



