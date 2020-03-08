function consinesim(A,B){

  let dotproduct = 0;
  let mA=0;
  let mB=0;
  for(let i=0;i<A.length;i++){
    dotproduct += (A[i] * B[i]);
      mA += (A[i]*A[i]);
      mB += (B[i]*B[i]);
  }
  if(mA == 0 || mB == 0) {
    return 0;
  }else{
    mA = Math.sqrt(mA);
    mB = Math.sqrt(mB);
    return (dotproduct)/(mA*mB);
  }
}

let dataArray = [
  {
    "name":"佐藤 一郎",
    "fromDate":"2020/02/20 08:00",
    "toDate":"2020/02/20 09:30",
    "code":"210000635"
    },
    {
    "name":"佐藤 一郎",
    "fromDate":"2020/02/20 10:00",
    "toDate":"2020/02/20 11:30",
    "code":"210000635"
    },
    {
    "name":"佐藤 一郎",
    "fromDate":"2020/02/20 11:30",
    "toDate":"2020/02/20 12:00",
    "code":"210000635"
    },
    {
    "name":"佐藤 一郎",
    "fromDate":"2020/02/21 08:30",
    "toDate":"2020/02/21 09:30",
    "code":"210000635"
    },
    {
    "name":"佐藤 一郎",
    "fromDate":"2020/02/21 10:30",
    "toDate":"2020/02/21 12:00",
    "code":"210000630"
    },{
    "name":"佐藤 一郎",
    "fromDate":"2020/02/21 13:30",
    "toDate":"2020/02/21 15:30",
    "code":"210000632"
    },
    {
    "name":"佐藤 一郎",
    "fromDate":"2020/02/21 15:30",
    "toDate":"2020/02/21 17:30",
    "code":"210000635"
    },
    {
    "name":"佐藤 二郎",
    "fromDate":"2020/02/20 08:30",
    "toDate":"2020/02/20 09:30",
    "code":"210000635"
    },
    {
    "name":"佐藤 二郎",
    "fromDate":"2020/02/20 09:30",
    "toDate":"2020/02/20 11:30",
    "code":"210000632"
    },
    {
    "name":"佐藤 二郎",
    "fromDate":"2020/02/20 11:30",
    "toDate":"2020/02/20 12:00",
    "code":"210000635"
    },
    {
    "name":"佐藤 二郎",
    "fromDate":"2020/02/20 13:00",
    "toDate":"2020/02/20 15:00",
    "code":"210000635"
    },
    {
    "name":"佐藤 二郎",
    "fromDate":"2020/02/20 16:00",
    "toDate":"2020/02/20 17:00",
    "code":"210000635"
    },
    {
    "name":"佐藤 二郎",
    "fromDate":"2020/02/21 08:30",
    "toDate":"2020/02/21 12:00",
    "code":"210000635"
    },
    {
    "name":"佐藤 二郎",
    "fromDate":"2020/02/21 13:00",
    "toDate":"2020/02/21 14:00",
    "code":"210000635"
    },
    {
    "name":"佐藤 二郎",
    "fromDate":"2020/02/21 14:30",
    "toDate":"2020/02/21 16:00",
    "code":"210000635"
    },
    {
    "name":"佐藤 二郎",
    "fromDate":"2020/02/21 16:00",
    "toDate":"2020/02/21 17:00",
    "code":"210000635"
    },
    {
    "name":"佐藤 二郎",
    "fromDate":"2020/02/21 08:30",
    "toDate":"2020/02/21 12:00",
    "code":"210000635"
    },
    
    
    {
    "name":"佐藤 三郎",
    "fromDate":"2020/02/20 08:30",
    "toDate":"2020/02/20 09:30",
    "code":"210000635"
    },
    {
    "name":"佐藤 三郎",
    "fromDate":"2020/02/20 09:30",
    "toDate":"2020/02/20 11:30",
    "code":"210000632"
    },
    {
    "name":"佐藤 三郎",
    "fromDate":"2020/02/20 11:30",
    "toDate":"2020/02/20 12:00",
    "code":"210000635"
    },
    {
    "name":"佐藤 三郎",
    "fromDate":"2020/02/20 13:00",
    "toDate":"2020/02/20 15:00",
    "code":"210000635"
    },
    {
    "name":"佐藤 三郎",
    "fromDate":"2020/02/20 16:00",
    "toDate":"2020/02/20 17:00",
    "code":"210000635"
    },
    {
    "name":"佐藤 三郎",
    "fromDate":"2020/02/21 08:30",
    "toDate":"2020/02/21 12:00",
    "code":"210000635"
    },
    {
    "name":"佐藤 三郎",
    "fromDate":"2020/02/21 13:00",
    "toDate":"2020/02/21 14:00",
    "code":"210000632"
    },
    {
    "name":"佐藤 三郎",
    "fromDate":"2020/02/21 14:30",
    "toDate":"2020/02/21 16:00",
    "code":"210000631"
    },
    {
    "name":"佐藤 三郎",
    "fromDate":"2020/02/21 16:00",
    "toDate":"2020/02/21 17:00",
    "code":"210000632"
    },
    {
    "name":"佐藤 四郎",
    "fromDate":"2020/02/21 14:30",
    "toDate":"2020/02/21 16:00",
    "code":"210000631"
    },
    {
    "name":"佐藤 四郎",
    "fromDate":"2020/02/21 16:00",
    "toDate":"2020/02/21 17:00",
    "code":"210000632"
    }
];

// let array1 = [];
// for(let i=0; i<4;i++){
//   let data;
//   for(let j=i; j<4;j++){
//     data = consinesim(dataArray[i],dataArray[j]);
//     console.log("i:"+i+"  j:"+j+"  : "+data);
//   }
// }


//データを作成
//日付： 名前： で分ける。

let arraydata  = [];
let nameKind   = []; 
let dayKind    = []; 
let codeKind   = [];
let group  = []; 

let groupArray = [];
let resultArray = [];

let date = new Date();

//8:00-20:00
const START_HOUSE = 8;
const END_HOUSE   = 20;
const INTERVAL     = 5;

pulloutKind();
pulloutGroup();
initData();
makeMattrix();
getCosSimilarities();

console.log(nameKind);
console.log(dayKind);
console.log(codeKind);
console.log(group);
console.log(groupArray);
console.log(resultArray);

function makeMattrix(){
  dataArray.forEach(value => {
    let str = value.fromDate.slice(0,10);
    let ar = group.filter(value2 => (value.name == value2.name && str == value2.date ));
    let timeArray = [];
    timeArray = groupArray[ar[0].id].data;
    //console.log(timeArray);
    let data = getIndexByDateArray(value.fromDate,value.toDate);

    for(let i = data[0]; i<data[1]; i++){
      timeArray[i] = value.id;
    }
    groupArray[ar[0].id].data = timeArray;
  });
}

function getCosSimilarities(){
  let resultArray = [];
  for(let i=0; i<groupArray.length; i++){
      let data = consinesim(groupArray[0].data,groupArray[i].data);
          resultArray.push(data);
  }
}

function pulloutKind(){
  dataArray.forEach(value => {
    if(nameKind.indexOf(value.name) === -1) nameKind.push(value.name);
    let str = value.fromDate.slice(0,10);
    if(dayKind.indexOf(str) === -1) dayKind.push(str);
    if(codeKind.indexOf(value.code) === -1) codeKind.push(value.code);
  });
}

function pulloutGroup(){
  for(let i=0; i<nameKind.length;i++){
    let hId = i * dayKind.length;
    for(let j=0;j<dayKind.length; j++){
      group.push({"id": hId + j,"name":nameKind[i],"date":dayKind[j]}); 
    }
  }
}

function initData(){
  let miniConver = (END_HOUSE - START_HOUSE)*60 / INTERVAL;
  group.forEach(value => {
    let array2 = new Array(miniConver).fill(0);
    groupArray.push({id:value.id, data:array2});
  });
}



function getIndexByDateArray(from_dateStr,to_dateStr){
  let fromDay = new Date(from_dateStr);
  let fHouse = fromDay.getHours() - START_HOUSE;
  let fMonth = fromDay.getMinutes();
  let sIndex = (fHouse * 60 + fMonth) / INTERVAL;
  
  let toDay = new Date(to_dateStr);
  let tHouse = toDay.getHours() - START_HOUSE;
  let tMonth = toDay.getMinutes();
  let eIndex = (tHouse * 60 + tMonth) /INTERVAL;
  
  return [sIndex, eIndex]
}