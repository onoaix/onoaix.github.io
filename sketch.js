 let l;
 let t;
 let n;
 let nw;
 let nl;
 let body;
 let  windowWidthP;
 let homePageLeft;
 let homePageLeftW;
 let homePageLeftH;
 let homePageLeftX;
 let homePageLeftY;

 let homePageRight;
 let homePageRightW;
 let homePageRightH;
 let homePageRightX;
 let homePageRightY;

 let homePageRightXv;
 let homePageRightXa;

 //right

let rightbutton;
let rightbuttonStatus;
let rbs;
let rightbuttonBack;

let apple;


//left
let homeCanvas;


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
//about Code Links
let aboutCode;


//left Link
let icons;
let iconSize;
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

//barbackgtound
let QQbar;
let Wecheatbar;
let X;
let barBackground;
let protfoliobarDiv;
let protfolioBarDivS;
let protfolioBarImg;
let InlfuenceBarImg;
let InfluenceHopeBarImg;
let downloadProtfolio;





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

  //resizePlan
  resetSizePlan();

  //apple 
  apple.position(l+windowWidth*62/100+homePageRightW/2,t+windowHeight/2);

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


//???  Set parameter

  //homePageLeft&Right;
  homePageLeft = select('#homePageLeft');
  homePageLeftW = windowWidth*62/100;
  homePageLeftH = windowHeight;
  homePageLeft.size(homePageLeftW,homePageLeftH);
  homePageLeftX = l;
  homePageLeftY = t;
  homePageLeft.position(homePageLeftX,homePageLeftY);
  //homePageLeft.style('background-color','white');
  //homePageLeft.style('z-index','-1');

  homePageRight = select('#homePageRight');
  homePageRight.style('overflow','hidden');
  homePageRight.style('z-index','2');
  homePageRight.style('background-color','white');
  homePageRight.mouseOver(rightDivOver);
  homePageRight.mouseOut(rightDivOut);
  homePageRightW = windowWidth*38/100 ;
  homePageRightH = windowHeight ;
  homePageRight.size(homePageRightW,homePageRightH);
  homePageRightX = l+windowWidth*62/100;
  homePageRightY = t;
  homePageRight.position(homePageRightX,homePageRightY);

  homePageRightXa = 0;
  homePageRightXv = sin(homePageRightXa)*30*n;

  //rightbutton
  rightbutton = createDiv('>');
  rightbuttonBack = 0;
  rightbuttonStatus = 21;
  rbs = 0;
  rightbutton.style('z-index','2');  
  rightbutton.style('cursor','pointer');
  rightbutton.style('background-color','black');
  rightbutton.style('color','white');  
  rightbutton.style('font-size','26px');  
  rightbutton.style('font-weight','normal');
  rightbutton.size(30,30);
  rightbutton.position(windowWidth-50,windowHeight/2);
  rightbutton.mouseOver(rightbuttonOver);
  rightbutton.mouseOut(rightbuttonOut);
  rightbutton.mouseClicked(homePageRightClicked);

  //left
  homeCanvas = select('#homeCanvas');





  //canvas p5.js
  w = 13;
  canvasW = homePageLeftW;
  canvasH = homePageLeftH;
  canvasX = homePageLeftW;
  canvasY = homePageLeftY;
  canvas = createCanvas(canvasW,canvasH);
  canvas.parent('#homeCanvas');
  canvas.style('z-index',-1);
  canvas.show();
  canvas.position(canvasX,canvasY);
  init();


  //rightDivAll
  createScrollbar();
  createRightDivBig();
  createPlaygroundRight();
  createProtfolioRight();
    //createAboutmeRight();
    //createIdeasharingRight();

  idRightDivBigs();

  //createLeftAll();
  createPlaygroundLeft();
  createProtfolioLeft();

  idLeftDivBigs();
  idprotfolioLeftSIntroduction();

  //displaydivs
  displayRightDivBigs();




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
  maxX = minX+12;
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
  logoDivSHtml = ["Hello and Wellcome!<br> This is the homepage of onoaix.lab! It was build in 24th-november-2019. I'll put things interesting on it, Hope you like it~ )?????????)????????????~",
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
    logoLink[i].mouseClicked(changeToRightDivBig);
    logoLink[i].hide();
    logoLink[i].style('font-size',15*n+'px');
    logoLink[0].style('border-left','solid 16px orangered');
    if (i==1||i==2) logoLink[i].position(15,(220+(i+1)*35)*nl);
    else if (i==3||i==4||i==5) logoLink[i].position(15,(220+(i+2)*35)*nl);
    else logoLink[i].position(15,(220+i*35)*nl);
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
  aboutOnoaix.position(homePageLeftW/2+homePageLeftW/45,t+homePageLeftH/2-homePageLeftH/25);
  aboutOnoaix.style('width',homePageLeftW/2+'px');

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
  onoBack.size(36*n,32*n);

  // leftLinks
  icons  = selectAll('i');
  iconSize = [27,29,31,35];
  leftLink = selectAll('.leftLink');
  leftLinkPosition = selectAll('.leftLinkPosition');
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
    icons[i].hide();
  }

  //barbackground
  X = select('#X');
  QQbar = select('#QQbar');
  Wecheatbar = select('#Wecheatbar');
  barBackground = select('#barBackground');
  protfoliobarDiv = selectAll('.protfoliobarDiv');
  protfolioBarDivS = selectAll('.protfolioBarDivS');
  protfolioBarImg = select('#protfolioBarImg');
  InlfuenceBarImg = select('#InlfuenceBarImg');
  InfluenceHopeBarImg = select('#InfluenceHopeBarImg');
  downloadProtfolio = selectAll('.downloadProtfolio');

  barBackground.style('width',canvasW+'px');
  barBackground.style('height',canvasH+'px');
  barBackground.hide();

  for (let i = 0; i < protfoliobarDiv.length; i++) {
    protfoliobarDiv[i].size(0,0);
    protfoliobarDiv[i].position(homePageLeftW/2,homePageLeftH*2/5);
    //protfoliobarDiv[i].attribute('align','left');
    protfoliobarDiv[i].hide();
  }
  for (let i = 0; i < protfolioBarDivS.length; i++) {
    protfolioBarDivS[i].style('max-width',250+'px');
  }
  for (let i = 0; i < downloadProtfolio.length; i++) {
    downloadProtfolio[i].mouseOver(pdfOver);
    downloadProtfolio[i].mouseOut(pdfOut);
  }

  protfolioBarImg.size(350,450);  
  InlfuenceBarImg.size(320,450);
  InfluenceHopeBarImg.size(350,250);

  QQbar.hide();
  Wecheatbar.hide();
  QQbar.position(l+canvasW/2,t+canvasH/2);
  Wecheatbar.position(l+canvasW/2,t+canvasH/2);
  X.hide();
  X.mouseClicked(barBackgroundOut);
  X.position(l+homePageLeftW-15,t+0);


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


  //apple 
  apple = select('#apple');
  apple.position(l+windowWidth*62/100+homePageRightW/2,t+windowHeight/2);


  //bodyshow
  body.show();



  //resizePlan
    //setup ?????????????????????????????????
  if (windowWidth>=980&&windowWidth>=windowHeight) {
    apple.show();
    for(let i=0; i<protfolioLeftSAll.length; i++){
      protfolioLeftSAll[i].style('float','left');
      protfolioLeftSAll[i].style('margin','30px');
    }
  }else{
    apple.hide();
    rightbuttonStatus = 0;
    for(let i=0; i<protfolioLeftSAll.length; i++){
      protfolioLeftSAll[i].style('float','none');
      protfolioLeftSAll[i].style('margin','30px auto');
    }
  }
    //
  resetSizePlan();
  repositionLeftAll();

}


function draw() {

  t = document.documentElement.scrollTop;
  l = document.documentElement.scrollLeft;

// logoGo
    logoBigger();
    logoSmaller();

// minHGo
    minSSOver();
    minSSOut();
    onoBackGo();
    onoBackBack();

// leftLinkGo
  for (let i = 0; i < ss.length; i++) {
      linkBigger(i);
      linkSmaller(i);
  }





//homePageRightGo
  homePageRightGo();

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

  //ProtfolioRightGo
  for(let i=0; i<protfolioRightSS.length; i++){
    if(protfolioRightSS[i] == 1){
      protfolioRightGo(i);
    }else if(protfolioRightSS[i] == 0){
      protfolioRightBack(i);
    }
  }

  //ProtfolioLeftGo!
  for(let i=0; i<protfolioLeftSS.length; i++){
    if(protfolioLeftSS[i]==1){
      protfolioLeftSGo(i);
    }else if(protfolioLeftSS[i]==0){
      protfolioLeftSBack(i);
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
  if (bs!=0 && bs!=20) {

    newSP = rl;
    let SV = abs(newSP-oldSP);
    if (100<=SV) SV=100;
    oldSP = rl;

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
        if (bs == 1 || bs == 21 || rbs == 1) {
          fill(random(230,255),random(230,255),random(0,95)); //homepagerightOver
        }else if (s == 1 || s == 21) {
          fill(random(230,255),random(50,135),random(0,35)); //logoDIVOver
        }else{
          fill(random(235,250),90,0); //canvasOver
        }
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

  //resize homePageDiv(left&right);

    if (windowWidth>=980&&windowWidth>=windowHeight) {
      homePageLeftW = windowWidth*62/100;
    }else{
      homePageLeftW = windowWidth;
    }

  homePageLeftH = windowHeight
  homePageLeft.size(homePageLeftW,homePageLeftH);

  homePageRightW = windowWidth*38/100;
  homePageRightH = windowHeight ;
  homePageRight.size(homePageRightW,homePageRightH);

  //resize rightbuttonStatus
  if (rightbuttonStatus != 20 & rightbuttonStatus != 0) {
    homePageRightX = l+windowWidth*62/100;
  }else if (rightbuttonStatus != 21 & rightbuttonStatus != 1) {
    homePageRightX = l+windowWidth;
  }


  //resize canves
  canvasW = homePageLeftW;
  canvasH = homePageLeftH;
  canvas.resize(canvasW,canvasH);
  init();

////logoDIV
    minX = 170*n+(1-n)*60;
    minY = 120*n;
    lx = minX;
    ly = minY;
    maxX = minX+12;
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
      if (i==1||i==2) logoLink[i].position(15,(220+(i+1)*35)*nl);
      else if (i==3||i==4||i==5) logoLink[i].position(15,(220+(i+2)*35)*nl);
      else logoLink[i].position(15,(220+i*35)*nl);
    }
    logoDivS.style('font-size',13*n+'px');
    logoDivS.style('width',140*n+'px');
    logoDivS.position(20,520*nl);
    if (windowHeight<=520)   logoDivS.hide();
    else logoDivS.show();

////minH
    aboutOnoaix.style('width',homePageLeftW/2+'px');
    for (let i = 0; i < minHh.length; i++) {
      minHh[i].style('font-size',28*n+'px');
    }
    minHS.style('font-size',17*n+'px');
    minSS.style('font-size',13*n+'px');
    onoBack.size(36*n,32*n);
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




    //resize barbackground
    for (let i = 0; i < protfoliobarDiv.length; i++) {
      protfoliobarDiv[i].size(650*n,300*n);
      protfoliobarDiv[i].position(homePageLeftW/2,homePageLeftH*2/5);
      //protfoliobarDiv[i].attribute('align','left');
    }
    for (let i = 0; i < protfolioBarDivS.length; i++) {
      protfolioBarDivS[i].style('max-width',250*n+'px');
      protfolioBarDivS[i].style('font-size',12*n+'pt');
    }
    protfolioBarImg.size(350*n,450*n);  
    InlfuenceBarImg.size(320*n,450*n);
    InfluenceHopeBarImg.size(350*n,250*n);



    //resize rightAll;

    rightDivBigW = homePageRightW-lineW*4;
    rightDivBigH = homePageRightH*18/20;

    for (let i = 0; i < rightDivBigs.length; i++) {
      rightDivBigs[i].size(rightDivBigW,rightDivBigH);
    }

    line.size(lineW,rightDivBigH);


    //right DivS
    rightDivSW = rightDivBigW;
    rightDivSH = 190*n+rightDivSpadding*2;

  if((windowWidthP<980 && windowWidth>=980)||(windowWidthP>=980 && windowWidth<980)||windowWidth<windowHeight){
    if (windowWidth>=980&&windowWidth>=windowHeight) {
      rightbuttonStatus = 1;
      homePageRightGo();
      apple.show();

      for(let i=0; i<protfolioLeftSAll.length; i++){
        protfolioLeftSAll[i].style('float','left');
        protfolioLeftSAll[i].style('margin','30px');
      }

    }else{
      rightbuttonStatus = 0;
      homePageRightGo();
      apple.hide();


      for(let i=0; i<protfolioLeftSAll.length; i++){
        protfolioLeftSAll[i].style('float','none');
        protfolioLeftSAll[i].style('margin','30px auto');
      }


      //rightDivS1W = rightDivSW*1/2;
      //for (let i = 0; i<rightDivSAll.length; i++){
      //  rightDivSAll[i].size(rightDivSW,rightDivSH);
      //  rightDivS1All[i].size(rightDivS1W,rightDivSH-rightDivSpadding*2);
      //  rightDivS2All[i].style('margin','0px 20px 0px 20px');
      //  rightDivS2All[i].size(rightDivSW-rightDivS1W-40-10*n,rightDivSH-rightDivSpadding*2);
      //}
      //for (let i = 0; i < rightDivSBAll.length; i++) {
      //  rightDivSBAll[i].size(rightDivSW,rightDivSH-rightDivSpadding*2);
      //  rightDivSBoAll[i].size(rightDivSW,rightDivSH-rightDivSpadding*2);
      //}
    }
  }

  windowWidthP = windowWidth;
  rightDivS1W = rightDivSW;
      for (let i = 0; i<rightDivSAll.length; i++){
        rightDivSAll[i].style('width',rightDivSW+'px');
        rightDivSAll[i].style('height','auto');
        rightDivS1All[i].size(rightDivS1W,rightDivSH-rightDivSpadding*2);
        rightDivS2All[i].style('width',rightDivS1W-20+'px');
        rightDivS2All[i].style('height','auto');
        rightDivS2All[i].style('margin','10px 10px 0px 10px');
        rightDivSBAll[i].size(rightDivSW,document.getElementById('rightDivSAll['+i+']').offsetHeight-rightDivSpadding*2);
        rightDivSBoAll[i].size(rightDivSW,document.getElementById('rightDivSAll['+i+']').offsetHeight-rightDivSpadding*2);
      }
      for (let i = 0; i < rightDivSBAll.length; i++) {
        //rightDivSBAll[i].size(rightDivSW,rightDivSH-rightDivSpadding*2);
      }


    for (var i = 0; i < rightDivBigs.length; i++) {
      if (pageStatus[i] == 1 ){
        rscrollh = document.getElementById('rightDivBigs['+i+']').scrollHeight ;
        roffseth = document.getElementById('rightDivBigs['+i+']').offsetHeight ;
      }
    }

//resize leftAll
  LeftDivBigW = homePageLeftW;
  LeftDivBigH = homePageLeftH;
  protfolioSW = (LeftDivBigW-70)/2-60;

  //resize leftdivBigs
  for(let i=0; i<leftDivBigs.length; i++){
    if(i!=0){
      leftDivBigs[i].size(LeftDivBigW,LeftDivBigH);
    }
  }

  //resize protfolio
  for(let i=0; i<protfolioLeftSAll.length; i++){
    protfolioLeftSAll[i].size(protfolioSW,protfolioSW);
    protfolioLeftSImgAll[i].size(protfolioSW,protfolioSW);
    protfolioLeftSIntroductionAll[i].style('width',protfolioSW-2+'px');
    protfolioLeftSPositionDeta[i] = protfolioSW;
    protfolioLeftSIntroductionAll[i].style('top',protfolioLeftSPositionDeta[i]+'px');
    protfolioLeftSBoAll[i].size(protfolioSW,protfolioSW);
    protfolioLeftSBAll[i].size(protfolioSW,protfolioSW);
  }

  //resize protfolioRight
  protfolioImg.size(270*n,350*n);
  InfluenceImg.size(180*n,250*n);
  InfluenceHopeImg.size(200*n,150*n);

  //resize protfolioLeftS
      for (let i = 0; i<protfolioLeftSAll.length; i++){
        //protfolioLeftSAll[i].style();
      }


}


function repositionLeftAll(){

  //reposition homePageDiv(left&right)
  //homePageRightX = l+windowWidth*62/100;
  homePageRightY = t;
  homePageRight.position(homePageRightX,homePageRightY);
  homePageLeftX = l;
  homePageLeftY = t;
  homePageLeft.position(homePageLeftX,homePageLeftY);


  //reposition canvas
  canvasX = homePageLeftX;
  canvasY = homePageLeftY;
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
  aboutOnoaix.position(homePageLeftW/2+homePageLeftW/45,t+homePageLeftH/2-homePageLeftH/25);

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
  X.position(l+homePageLeftW-15,t+0);




  //reposition rightAll
  rightDivBigX = lineW;
  rightDivBigY = t+homePageRightH*1/20;
  for (var i = 0; i < rightDivBigs.length; i++) {
    rightDivBigs[i].position(rightDivBigX,rightDivBigY);
  }


  for (let i = 0; i < rightDivSAll.length; i++) {
    if (pageStatus[i] == 1) {
      rl = document.getElementById('rightDivBigs['+i+']').scrollTop ;
    }
  }


  if (rscrollh-roffseth ==0 ) {
    scrollY = scrollH;
  }else{
    scrollY = map(rl,0,rscrollh-roffseth,scrollH,windowHeight*18/20-scrollH);
  }
  line.position(0,windowHeight*1/20);
  scrollbar1.size(scrollW,scrollY);
  scrollbar2.size(scrollW,windowHeight*18/20-scrollY);

  if (rightbuttonStatus != 0) {

    let rl_ = constrain(map(rl,0,150,0,60 - rightDivBigY ),0,60 - rightDivBigY);
    let fontsize = 20-constrain(map(rl,0,150,0,5),0,5);

    if (fontsize<=17) {
      Head.style('background-color','black');
      Head.style('color','white');
      Head.style('font-weight','normal');
      //Head.style('border','solid 1px black');
    }else{
      Head.style('background-color','transparent');
      Head.style('font-weight','bold');
      Head.style('color','black');
      //Head.style('border','none');
    }
    Head.style('font-size',fontsize+'px');
    Head.position(20*2,60-rl_);

  }


  //reposition rightbutton
  rightbutton.position(windowWidth-50,windowHeight/2);

  //reposition protfolioIMG
  let protfolioImgX = 130*nw;
  let protfolioImgY = 150*nl;
  protfolioImg.position(protfolioImgX-(1-nw)*150,protfolioImgY);
  InfluenceImg.position(protfolioImgX-80*nw-(1-nw)*150,protfolioImgY+150*nl);
  InfluenceHopeImg.position(protfolioImgX+40*nw-(1-nw)*150,protfolioImgY+275*nl);


}