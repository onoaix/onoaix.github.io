

function Over(){
  s = 1;
  this.style('padding-bottom',30+'px');
  for (let i = 0; i < logoLink.length; i++) {
    logoLink[i].style('display','block');
  }
  //this.style('border',2+'px'+' solid'+ ' orangered');
}

function Out(){
  s = 0;
  this.style('padding',0+'px');
  for (let i = 0; i < logoLink.length; i++) {
    logoLink[i].style('display','none');
  }
  //this.style('border','none');
}

function logoBigger(){
  if(lx < maxX){
    lx+=vx;
  }
  if(ly < maxY){
    ly+=vy;
  }
  if (logoY<logoYmax) {
    logoY+=logoY_v;
  }
  if (logoX<logoXmax){
    logoX+=logoX_v;
  }
  if(positionMoreX>-35-18) positionMoreX-=2;
  if(ly>=maxY&lx>=maxX&logoY>=logoYmax&logoX>=logoXmax){
    lx = maxX;
    ly = maxY;
    logoY = logoYmax;
    logoX = logoXmax;
    s=21;
  }
  logodiv.style('width',lx+'px');
  logodiv.style('height',ly+'px');
  logoh1.position(logoX,logoY);
  positionMore.position(positionMoreX,29);
}

function logoSmaller(){
  if(lx > minX){
    lx-=vx;
  }
  if(ly > minY){
    ly-=vy;
  }
  if (logoY>logoYmin) {
    logoY-=logoY_v;
  }
  if (logoX>logoXmin){
    logoX-=logoX_v;
  }
  if(positionMoreX<-35) positionMoreX+=2;
  if(ly<=minY&lx<=minX&logoY<=logoYmin&logoX<=logoXmin){
    lx = minX;
    ly = minY;
    logoX = logoXmin;
    logoY = logoYmin;
    s=20;
  }
  logodiv.style('width',lx+'px');
  logodiv.style('height',ly+'px');
  logoh1.position(logoX,logoY);
  positionMore.position(positionMoreX,29);
}



function HighLightLinkOfLogo(){
  let i = logoLink.indexOf(this);
  this.style('font-style','oblique');
  //this.style('text-decoration','underline');
  this.style('color','orangered');
  logoDivS.html(logoDivSHtml[i]);
}

function unHighLightLinkOfLogo(){
  this.style('font-style','normal');
  //this.style('text-decoration','none');
  this.style('color','white');
  logoDivS.html('');
}






function overSS(){
  let i = leftLink.indexOf(this);
  ss[i] = 1;
  this.style('z-index','2');
  this.style('padding',minXl/4+'px');
  icons[i].style('display','block');
  icons[i].style('color','white');
  //this.style('border',2+'px'+' solid'+ ' orangered');
}

function outSS(){
  let i = leftLink.indexOf(this);
  ss[i] = 0;
  this.style('z-index','1');
  this.style('padding',0+'px');
  icons[i].style('display','none');
  //this.style('border','none');
}

function linkBigger(i){
  if (xl[i] < maxXl){
    xl[i] += vxl;
  }
  if(yl[i] < maxYl){
    yl[i] += vyl;
  }
  if (xl[i]>=maxXl){
    xl[i] = maxXl;
  }
  if (yl[i]>=maxYl) {
    yl[i] = maxYl;
  }
  if (Alpha[i] < 1){
    Alpha[i] +=1/15;
  }
  if (Alpha[i] >= 1){
    Alpha[i] = 1;
  }
  if (xl[i]>=maxXl&yl[i]>=maxYl&Alpha[i]>=1) {
    ss[i] = 21;
  }
  leftLink[i].style('width',xl[i]+'px');
  leftLink[i].style('height',yl[i]+'px');
}

function linkSmaller(i){
  if (xl[i] > minXl){
    xl[i] -= vxl;
  }
  if(yl[i] > minYl){
    yl[i] -= vyl;
  }
  if (xl[i]<=minXl){ 
    xl[i] = minXl;
  }
  if (yl[i]<=minYl){
    yl[i] = minYl;
  }
  if (Alpha[i] > 0){
    Alpha[i] -=1/15;
  }
  if (Alpha[i] <= 0){
    Alpha[i] = 0;
  }
  if (xl[i]<=minXl&yl[i]<=minYl&Alpha[i]<=0){
    ss[i] = 20;
  }
  leftLink[i].style('width',xl[i]+'px');
  leftLink[i].style('height',yl[i]+'px');
}




function HighLightLinkOfSketch(){
  let i = aboutCode.indexOf(this);
  //this.style('font-style','italic');
  aboutCode[i].style('border-bottom-width',1.8+'px');
  aboutCode[i].style('border-bottom-style','solid');
  aboutCode[i].style('border-bottom-color','red');
  //aboutCode[i].style('background-color','white');
  aboutCode[i].style('color','red');

  //this.style('border-color','gray');
}
function unHighLightLinkOfSketch(){
  let i = aboutCode.indexOf(this);
  //this.style('font-style','normal');
  aboutCode[i].style('border-bottom-width',1+'px');
  aboutCode[i].style('border-bottom-style','solid');
  aboutCode[i].style('border-bottom-color','gray');
  //aboutCode[i].style('background-color','transparent');
  aboutCode[i].style('color','gray');
}



function changeMinSS(){
  ms = 1;
}
function BackMinSS(){
  ms = 0;
}

function minSSOver(){
  if(AlphaSS<1){
    AlphaSS+=1/30;
  }
  if(AlphaSS>=1){
    ms = 21;
  }
  minSS.style('background-color','rgba(255,155,0,'+AlphaSS+')');
}
function minSSOut(){
  if(AlphaSS>0){
    AlphaSS-=1/30;
  }
  if(AlphaSS<=0){
    ms = 20;
  }
  minSS.style('background-color','rgba(255,155,0,'+AlphaSS+')');
}


function barBackgroundOver(){
  let i = leftLink.indexOf(this);
  if (i == 0){
    barBackground.style('background-color','rgba(0,90,255,0.8)');
    Wecheatbar.style('display','none');
    QQbar.style('display','block');
  }
  if (i == 1){
    barBackground.style('background-color','rgba(125,255,0,0.8)');
    QQbar.style('display','none');
    Wecheatbar.style('display','block');
  }
  barBackground.style('display','block');
  X.style('display','block');
}
function barBackgroundOut(){
  barBackground.style('display','none');
  X.style('display','none');
  QQbar.style('display','none');
  Wecheatbar.style('display','none');

}

function rightDivSOver(){
  //this.style('border','solid 2px black');
  //this.style('width',296+'px');
  //this.style('height',196+'px');
}
function rightDivSOut(){
  //this.style('border','solid 0px black');
  //this.style('width',300+'px');
  //this.style('height',20+'px');

}


function rightDivOver(){
  bs = 1;
}
function rightDivOut(){
  bs = 0;
}
function rightDivGo(){
  if(scrollbarAlpha<1){
    scrollbarAlpha+=0.05;
  }else if (1<=scrollbarAlpha) {
    scrollbarAlpha = 1;
  }
  if (scrollW<5) {
    scrollW+=0.3;
  }else if (scrollW>=5) {
    scrollW=5;
  }
  if (scrollbarAlpha>=1&scrollW>=5) {
    bs = 21;
  }
  scrollbar1.style('background-color','rgba(0,0,0,'+scrollbarAlpha+')');
  scrollbar2.style('background-color','rgba(0,0,0,'+scrollbarAlpha+')');
}
function rightDivBack(){
  if(0.2<scrollbarAlpha){
    scrollbarAlpha-=0.05;
  }else if (scrollbarAlpha<=0.2) {
    scrollbarAlpha = 0.2;
  }
  if (scrollW>1.5) {
    scrollW-=0.2;
  }else if (scrollW<=1.5) {
    scrollW=1.5;
  }
  if (scrollbarAlpha<=0.2&scrollW<=1.5) {
    bs = 20;
  }
  scrollbar1.style('background-color','rgba(0,0,0,'+scrollbarAlpha+')');
  scrollbar2.style('background-color','rgba(0,0,0,'+scrollbarAlpha+')');
}





function onoBackClicked(){
  if (oSt == 1) {
    os = 1;
    canvas.style('display','none');
    onoBack.style('border-color','red');
  }
  if (oSt == 0) {
    os = 0;
    canvas.style('display','block');
    onoBack.style('border-color','lawngreen');
  }
}


function onoBackGo(){
  if (oX < oXMax) {
    oX += 2;
  }else if (oX >= oXMax) {
    oX = oXMax;
  }
  if (oY < oYMax) {
    oY += 1;
  }else if (oY >= oYMax) {
    oY = oYMax;
  }
  if (oX>=oXMax & oY>=oYMax) {
    os = 21;
    oSt = 0;
  }
  onoBack.position(oX,oY);
}
function onoBackBack(){
  if (oX > oXMin) {
    oX -= 2;
  }else if (oX <= oXMin) {
    ox = oXMin;
  }
  if (oY > oYMin) {
    oY -= 1;
  }else if (oY<= oYMin) {
    oY = oYMin;
  }
  if (oX <= oXMin & oY <= oYMin) {
    os = 20;
    oSt = 1;
  }
  onoBack.position(oX,oY);
}