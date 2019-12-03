 let l;
 let t;
 let n;
 let nw;
 let nl;
 let body;


//2Dbarcode
let QQbar;
let Wecheatbar;

//canvas
let canvas;
let canvasY;
let canvasX;
let canvasW;
let canvasH;
let w;
let columns;
let rows;
let board;
let next;


//LogoDiv
let logodiv;
let logoh1;
let logoh2;
let logoDivS;
let logoDivSHtml;
let lx;
let ly;
let vx;
let vy;
let maxX;
let maxY;
let minX;
let minY;
let s;
let logoYmin;
let logoXmin;
let logoXmax;
let logoYmax;
let logoX_v;
let logoY_v;
let positionMore;
let positionMoreX;


//about Onoaix
let aboutOnoaix;
let minSS;
let minHh;
let minHS;
let AlphaSS;
let ms;
let onoBack;
let ono;
let os;
let oSt;
let oXMin;
let oYMin;
let oXMax;
let oYMax;
let oX;
let oY;
//about Sketch Link
let aboutCode;


//left Link
let icons;
let iconSize;
let X;
let barBackground;
let leftLink;
let leftLinkPosition;
let leftPositionX;
let leftPositionY;
let ss;
let xl;
let yl;
let minXl;
let minYl;
let maxXl;
let maxYl;
let vxl;
let vyl;
let Alpha;


function preload(){}

function mouseClicked(){}

function windowResized(){

  n = map(windowWidth*windowHeight,0,1280*720,0,1);
  nw = map(windowWidth,0,1280,0,1);
  nl = map(windowHeight,0,720,0,1);
  if (n>=1) n=1;
  else if (n<=3/4) n=3/4;
  if (nw>=1) nw=1;
  else if (nw<=3/4) nw=3/4;
  if (nl>=1) nl=1;
  else if (nl<=3/4) nl=3/4;

  //resize canves
  canvasW = windowWidth*63/100-20;
  canvasH = windowHeight;
  canvas.resize(canvasW,canvasH);
  init();

  //resizePlan
  resetSizePlan();

}


function setup() {

  body = select('body');

  l = document.documentElement.scrollLeft;
  t = document.documentElement.scrollTop;
  n = map(windowWidth*windowHeight,0,1280*720,0,1);
  nw = map(windowWidth,0,1280,0,1);
  nl = map(windowHeight,0,720,0,1);
  if (n>=1) n=1;
  else if (n<=3/4) n=3/4;
  if (n>=1) n=1;
  else if (n<=3/4) n=3/4;
  if (nw>=1) nw=1;
  else if (nw<=3/4) nw=3/4;
  if (nl>=1) nl=1;
  else if (nl<=3/4) nl=3/4;


//▲  Set parameter


  //canvas p5.js
  w = 12;
  canvasW = windowWidth*63/100-20;
  canvasH = windowHeight;
  canvasX = l;
  canvasY = t;
  canvas = createCanvas(canvasW,canvasH);
  canvas.style('z-index',-1);
  canvas.style('display','block');
  canvas.position(canvasX,canvasY);
  init();


  //rightDivAll
  createRightDivBig();
  createScrollbar();


  // logoDIV
  logodiv = select('#logoDIV');
  logodiv.class('logo');
  logoh1 = select('#logo1');
  logoh2 = select('#logo2');
  logoLink = selectAll('.linkInLogo');
  logoDivS = select('#logoDivS');
  positionMore = select('#positionMore');
  s = 20;
  minX = 170*n;
  minY = 120*n;
  lx = minX; 
  ly = minY;
  maxX = minX+10;
  maxY = windowHeight;
  vx = (maxX-minX)/9;
  vy = (maxY-minY)/9;
  logoXmin = minX*6/27;
  logoYmin = minY*6/27;
  logoXmax = logoXmin;
  logoYmax = logoYmin+50*n;
  logoX = logoXmin;
  logoY = logoYmin;
  logoY_v = (logoYmax-logoYmin)/9;
  logoX_v = (logoXmax-logoXmin)/9;
  positionMoreX = -35;
  logoDivSHtml = ["Hello and Wellcome!<br> This is the homepage of onoaix.lab! It was build in 24th-november-2019. I'll put things interesting on it, Hope you like it~ )✧∀✧)欢迎欢迎~",
                  "Here is the Playground where I'll put visual things I was tried to play with, icluding some programming sketch, design or art.",
                  "This is a place I'll put things I've done which is looks like can be a opus or portfolio,and I'll put more and more on it if I still remember to update the it. Xp",
                  "more about me just like my name, my job even my photos.",
                  "share some recent ideas or thinking I am interesting in.",
                  "would you like to say something to me or send me an E-mail."]
  logodiv.style('width',lx+'px');
  logodiv.style('height',ly+'px');
  logodiv.mouseOver(Over);
  logodiv.mouseOut(Out);
  logoh1.position(logoX,logoY);
  logoh1.style('line-height',22*n+'px');
  logoh2.style('line-height',12*n+'px');
  logoh1.style('font-size',16*n+'px');
  logoh2.style('font-size',9*n+'px');
  positionMore.position(positionMoreX,29);
  for(let i=0;i<logoLink.length;i++){
    logoLink[i].mouseOver(HighLightLinkOfLogo);
    logoLink[i].mouseOut(unHighLightLinkOfLogo);
    logoLink[i].style('display','none');
    logoLink[i].style('font-size',15*n+'px');
    if (i==1||i==2) logoLink[i].position(15,(220+(i+1)*25)*nl);
    else if (i==3||i==4||i==5) logoLink[i].position(15,(220+(i+2)*25)*nl);
    else logoLink[i].position(15,(220+i*25)*nl);
  }
  logoDivS.style('font-size',13*n+'px');
  logoDivS.style('width',140*n+'px');
  logoDivS.position(20,520*nl);

  // aboutOnoaix
  aboutOnoaix = select('#minH');
  minHh = selectAll('.minHh');
  minHS = select('#minHS');
  minSS = select('#minSS');
  AlphaSS = 0;
  ms = 20;
  onoBack = select('#onoBack');
  ono = select('#ono');
  os = 20;
  oSt = 1;

  aboutOnoaix.style('transform','translate(-50%,-50%)');
  aboutOnoaix.position(l+canvasW/2+canvasW/45,t+canvasH/2-canvasH/25);
  aboutOnoaix.style('width',canvasW/2+'px');

  for (let i = 0; i < minHh.length; i++) {
    minHh[i].style('font-size',28*n+'px');
  }
  minHS.style('font-size',17*n+'px');
  minSS.style('font-size',13*n+'px')
  minSS.mouseOver(changeMinSS);
  minSS.mouseOut(BackMinSS);
  ono.mouseClicked(onoBackClicked);
  oXMin = document.getElementById('ono').offsetLeft;
  oYMin = document.getElementById('ono').offsetTop;
  oXMax = document.getElementById('ono').offsetLeft*13/11;
  oYMax = document.getElementById('ono').offsetTop;
  oX = oXMin;
  oY = oYMin;
  onoBack.position(oX,oY);
  onoBack.style('border-top-width',6*n+'px');
  onoBack.size(46*n,32*n);

  // leftLinks
  icons  = selectAll('i');
  iconSize = [27,29,31,35];
  X = select('#X');
  QQbar = select('#QQbar');
  Wecheatbar = select('#Wecheatbar');
  leftLink = selectAll('.leftLink');
  leftLinkPosition = selectAll('.leftLinkPosition');
  barBackground = select('#barBackground');
  ss = new Array(leftLink.length);
  xl = new Array(leftLink.length);
  yl = new Array(leftLink.length);
  Alpha = new Array(leftLink.length);
  minXl = 60;
  minYl = 60;
  maxXl = minXl*1.5;
  maxYl = minYl*1.5;
  vxl = (maxXl - minXl)/5;
  vyl = (maxYl - minYl)/5;
  for (let i = 0; i < leftLink.length; i++) {
    xl[i] = minXl;
    yl[i] = minYl;
    Alpha[i] = 0;
    ss[i] = 20;
    leftLink[i].mouseOver(overSS);
    leftLink[i].mouseOut(outSS);
    leftLink[i].style('width',xl[i]+'px');
    leftLink[i].style('height',yl[i]+'px');
    if (i==0||i==1) {
      leftLink[i].mouseClicked(barBackgroundOver);
    }
    icons[i].style('font-size',iconSize[i]*n+'px');
    icons[i].style('display','none');
  }
  barBackground.style('width',canvasW+'px');
  barBackground.style('height',canvasH+'px');
  barBackground.style('display','none');
  QQbar.style('display','none');
  Wecheatbar.style('display','none');
  QQbar.position(l+canvasW/2,t+canvasH/2);
  Wecheatbar.position(l+canvasW/2,t+canvasH/2);
  X.style('display','none');
  X.mouseClicked(barBackgroundOut);
  X.position(l+canvasW/2+100,t+canvasH/2-109);

  // aboutCode Link
  aboutCode = selectAll('.aboutCode');
  for (let i = 0; i < aboutCode.length; i++) {
    aboutCode[i].style('border-bottom-width',1+'px');
    aboutCode[i].style('border-bottom-style','solid');
    aboutCode[i].style('color','gray');
    aboutCode[i].style('border-bottom-color','gray');
    aboutCode[i].mouseOver(HighLightLinkOfSketch);
    aboutCode[i].mouseOut(unHighLightLinkOfSketch);
  }

  body.style('display','block');

  resetSizePlan();
  repositionLeftAll();

}


function draw() {

  t = document.documentElement.scrollTop;
  l = document.documentElement.scrollLeft;

// logoGo
  if(s==1){
    logoBigger();
  }else if(s==0){
    logoSmaller();
  }

// minHGo
  if (ms==1) {
    minSSOver();
  }else if (ms==0) {
    minSSOut();
  }
  if (os==1) {
    onoBackGo();
  }else if (os==0) {
    onoBackBack();
  }

// leftLinkGo
  for (let i = 0; i < ss.length; i++) {
    if(ss[i]==1){
      linkBigger(i);
    }else if(ss[i]==0){
      linkSmaller(i);
    }
  }

//rightDivGo
  if (bs==1) {
    rightDivGo();
  }else if (bs==0) {
    rightDivBack();
  }

  for (let i = 0; i < rightDivSAll.length; i++) {
    if (rightDivSS[i]==1){
      rightDivSGo(i);
    }else if (rightDivSS[i]==0) {
      rightDivSBack(i);
    }
  }

  //reposition
  repositionLeftAll();




  //canvas.clear();
  if (os!=21) {
    generate();
    display();
    life();
  }
  // noFill();
  // strokeWeight(1);
  // stroke(0);
  // rect(0,0,width,height);

}


function init(){
  columns = floor(width / w);
  rows = floor(height / w);
  board = make2dArray(columns,rows);
  next = make2dArray(columns,rows);
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      board[i][j] = 0;
      next[i][j] = 0;
    }
  }
}

// Fill board randomly
function life() {
  if (bs==20||bs==0) {
    let mouseSpeed = floor((abs(mouseX-pmouseX)+abs(mouseY-pmouseY))/2);
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if ( (0<=i & i<=1) || (columns-2<=i & i<=columns-1) || (0<=j & j<=1) || (rows-2<=j & j<=rows-1) ) {
          board[i][j] = 0;
        }else if (mouseSpeed!=0) {
          let dm = dist(i*w+w/2,j*w+w/2,mouseX,mouseY);
          if(w<=dm & dm<=2*w ){
            mouseSpeed = map(mouseSpeed,0,10,0,1);
            let k = floor(random(1-mouseSpeed));
            if (k <= 0 ) {
              board[i][j] = 1;
              //board[i+1][j] = 1;
              //board[i][j+1] = 1;
              //board[i-1][j] = 1;
              //board[i][j-1] = 1;
              //board[i+1][j+1] = 1;
              //board[i+2][j+2] = 1;
              //board[i+2][j] = 1;
              //board[i][j+2] = 1;
            }
          }
        }
      }      
    }
  }
  if (bs!=0 & bs!=20) {

    newSP = document.getElementById('rightDivBig').scrollTop;
    let SV = abs(newSP-oldSP);
    if (100<=SV) SV=100;
    oldSP = document.getElementById('rightDivBig').scrollTop;

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if(floor(columns/6)<=i&i<=columns-1-(floor(columns/6))&floor(rows/5)-3<=j&j<=rows-1-(floor(rows/5))-3) {
          let f = random(9000)-(SV*SV/29);
          let k = floor(f);
          if (k <= 0 ) {
            //board[i][j] = 1;
            //board[i+1][j] = 1;
            //board[i][j+1] = 1;
            //board[i-1][j] = 1;
            //board[i][j-1] = 1;
            board[i+1][j+1] = 1;
            board[i+2][j+2] = 1;
            board[i+2][j] = 1;
            board[i][j+2] = 1;
          }
        }
      }
    }
  }

}


// The process of creating the new generation
function generate() {

  // Loop through every spot in our 2D array and check spots neighbors
  for (let x = 2; x < columns - 2; x++) {
    for (let y = 2; y < rows - 2; y++) {
      // Add up all the states in a 3x3 surrounding grid 
      let neighbors = 0;
      //let d = dist(x*w+w/2,y*w+w/2,mouseX,mouseY);
      for (let i = -2; i <= 2; i++) {
        for (let j = -2; j <= 2; j++) {
          neighbors += board[x + i][y + j];
        }
      }

      // A little trick to subtract the current cell's state since
      // we added it in the above loop
      neighbors -= board[x][y];
      // Rules of Life
      if ((board[x][y] == 1) && (neighbors < 5)) {
        next[x][y] = 0;
      }
      // Loneliness
      else if ((board[x][y] == 1) && (neighbors > 9)) {
        next[x][y] = 0;
      } // Overpopulation  
      else if ((board[x][y] == 0) && (neighbors == 7) ) {
        next[x][y] = 1;
      }
      // Reproduction
      else next[x][y] = board[x][y]; // Stasis
    }
  }  
  // Swap!
    let temp = board;
    board = next;
    next = temp;
}


function display(){
  background(255,255,255);
  for (let i = 2; i < columns-2; i++) {
    for (let j = 2; j < rows-2; j++) {
      if (board[i][j] == 1){
        if (bs == 1 || bs == 21) {
          fill(random(230,255),random(230,255),random(0,95));
        }else if (s == 1 || s == 21) {
          fill(random(230,255),random(50,135),random(0,35));
        }else{
          fill(random(254,255),90,0);
        }
        //fill(255,0,0);
        noStroke();
        rect((i-1) * w, (j-1) * w, w*3 , w*3 );
      }
    }
  }
   //noFill();
   //strokeWeight(1);
   //stroke(0);
   //rect(0,0,canvasW,canvasH);
}




function make2dArray(tempx,tempy){
  let array = new Array(tempx);
  let x = tempx;
  let y = tempy;
  for (let i = 0; i < array.length ; i++) {
    array[i] = new Array(tempy);
  }
  return array;
}


function resetSizePlan(){

////logoDIV
    minX = 170*n+(1-n)*60;
    minY = 120*n;
    lx = minX;
    ly = minY;
    maxX = minX+10;
    maxY = windowHeight;
    vx = (maxX-minX)/9;
    vy = (maxY-minY)/9;
    logodiv.style('width',lx+'px');
    logodiv.style('height',ly+'px');
    logoXmin = minX*6/27;
    logoYmin = minY*6/27;
    logoXmax = logoXmin;
    logoYmax = logoYmin+50*n;
    logoX = logoXmin;
    logoY = logoYmin;
    logoX_v = (logoXmax-logoXmin)/9;
    logoY_v = (logoYmax-logoYmin)/9;
    logoh1.position(logoX,logoY);
    logoh1.style('line-height',22*n+'px');
    logoh2.style('line-height',12*n+'px');
    logoh1.style('font-size',16*n+'px');
    logoh2.style('font-size',9*n+'px');
    for(let i=0;i<logoLink.length;i++){
      logoLink[i].style('font-size',15*n+'px');
    if (i==1||i==2) logoLink[i].position(15,(220+(i+1)*25)*nl);
    else if (i==3||i==4||i==5) logoLink[i].position(15,(220+(i+2)*25)*nl);
    else logoLink[i].position(15,(220+i*25)*nl);
    }
    logoDivS.style('font-size',13*n+'px');
    logoDivS.style('width',140*n+'px');
    logoDivS.position(20,520*nl);
    if (windowHeight<=520)   logoDivS.style('display','none');
    else logoDivS.style('display','block');

////minH
    aboutOnoaix.style('width',canvasW/2+'px');
    for (let i = 0; i < minHh.length; i++) {
      minHh[i].style('font-size',28*n+'px');
    }
    minHS.style('font-size',17*n+'px');
    minSS.style('font-size',13*n+'px');
    onoBack.size(46*n,32*n);
    onoBack.style('border-top-width',6*n+'px');
    for (let i = 0; i < aboutCode.length; i++) {
      aboutCode[i].style('font-size',13*n+'px');
    }


////leftLink
    minXl = 60*n;
    minYl = 60*n;
    maxXl = minXl*1.5;
    maxYl = minYl*1.5;
    vxl = (maxXl - minXl)/5;
    vyl = (maxYl - minYl)/5;
    for (let i = 0; i < leftLink.length; i++) {
      xl[i] = minXl;
      yl[i] = minYl;
      leftLink[i].style('width',xl[i]+'px');
      leftLink[i].style('height',yl[i]+'px');
      icons[i].style('font-size',iconSize[i]*n+'px');
    }
    barBackground.style('width',canvasW+'px');
    barBackground.style('height',canvasH+'px');



    //resize rightAll;

    rightDivBigW = windowWidth*37/100-20*3 ;
    rightDivBigH = windowHeight*18/20 ;
    rightDivBig.size(rightDivBigW,rightDivBigH);
    line.size(lineW,rightDivBigH);

    rightDivSW = rightDivBigW;
    rightDivSH = 190+rightDivSpadding*2;
    //right DivS
    if (windowWidth<=1350) {
      rightDivS1W = rightDivSW;
      for (let i = 0; i<rightDivSAll.length; i++){
        rightDivSAll[i].style('width',rightDivSW+'px');
        rightDivSAll[i].style('height','auto');
        rightDivSAll[i].id('rightDivSAll['+i+']');
        rightDivS1All[i].size(rightDivS1W,rightDivSH);
        rightDivS2All[i].style('width',rightDivS1W-20+'px');
        rightDivS2All[i].style('height','auto');
        rightDivS2All[i].style('margin','10px 10px 0px 10px');
        rightDivSBAll[i].size(rightDivSW,rightDivSH);
        rightDivSBAll[i].size(rightDivSW,document.getElementById('rightDivSAll['+i+']').offsetHeight-rightDivSpadding*2);
      }
    }else{
      rightDivS1W = rightDivSW*1/2;
      for (let i = 0; i<rightDivSAll.length; i++){
        rightDivSAll[i].size(rightDivSW,rightDivSH);
        rightDivS1All[i].size(rightDivS1W,rightDivSH-rightDivSpadding*2);
        rightDivS2All[i].style('margin','0px 20px 0px 20px');
        rightDivS2All[i].size(rightDivSW-rightDivS1W-40-10*n,rightDivSH-rightDivSpadding*2);
        rightDivSBAll[i].size(rightDivSW,rightDivSH-rightDivSpadding*2);
      }
    }
    rscrollh = document.getElementById('rightDivBig').scrollHeight ;
    roffseth = document.getElementById('rightDivBig').offsetHeight ;

  
}


function repositionLeftAll(){


  //reposition canvas
  canvasX = l;
  canvasY = t;
  canvas.position(canvasX,canvasY);


  //reposition leftAll
  leftPositionX =l + canvasW-minXl/2;
  leftPositionY =t + windowHeight-minYl*2;
  for (let i = 0; i < leftLinkPosition.length; i++) {
    if (i==0){
      leftLinkPosition[i].position(leftPositionX ,leftPositionY);
    }else if (i==1){
      leftLinkPosition[i].position(leftPositionX - minXl/2 ,leftPositionY + minYl/2 );
    }else if (i==2) {
      leftLinkPosition[i].position(leftPositionX - minXl,leftPositionY + minYl);
    }else{
      leftLinkPosition[i].position(leftPositionX - minXl*1.5 ,leftPositionY + minYl*1.5 );
    }
  }

  //reposition minH
  aboutOnoaix.position(l+canvasW/2+canvasW/45,t+canvasH/2-canvasH/25);

  oXMin = document.getElementById('ono').offsetLeft;
  oYMin = document.getElementById('ono').offsetTop;
  oXMax = document.getElementById('ono').offsetLeft*13/11;
  oYMax = document.getElementById('ono').offsetTop;
  if (oSt==1&os!=1) {
    oX = oXMin;
    oY = oYMin;
  }else if (oSt==0&os!=0) {
    oX = oXMax;
    oY = oYMax;
  }
  onoBack.position(oX,oY);

  QQbar.position(l+canvasW/2,t+canvasH/2);
  Wecheatbar.position(l+canvasW/2,t+canvasH/2);
  X.position(l+canvasW/2+100,t+canvasH/2-109);


  //reposition rightAll
  rightDivBigX = l+windowWidth*63/100;
  rightDivBigY = t+windowHeight*1/20;
  rightDivBig.position(rightDivBigX,rightDivBigY);


  rl = document.getElementById('rightDivBig').scrollTop ;
  scrollY = map(rl,0,rscrollh-roffseth,scrollH,windowHeight*18/20-scrollH);
  line.position(l+rightDivBigX-lineW,t+rightDivBigY);
  scrollbar1.size(scrollW,scrollY);
  scrollbar2.size(scrollW,windowHeight*18/20-scrollY);

  let rl_ = constrain(map(rl,0,150,0,40-scrollWmax),0,40-scrollWmax);
  let fontsize = 20-constrain(map(rl,0,150,0,5),0,5);

  if (rl_>=18*n) {
    Head.style('background-color','black');
    Head.style('color','white');
  }else{
    Head.style('background-color','transparent');
    Head.style('color','black');
  }
  Head.style('font-size',fontsize+'px');
  Head.position(rightDivBigX+20-rl_,60*n);

}