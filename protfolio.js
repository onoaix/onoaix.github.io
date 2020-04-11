let protfolioRightDiv;
let protfolioImg;
let InfluenceImg;
let InfluenceHopeImg;
let protfolioUrl;


let protfolioLeftDiv;
let LeftDivBigW;
let LeftDivBigH;
let LeftDivBigX;
let LeftDivBigY;

let protfolioLeftSS;
let protfolioLeftSAll;
let protfolioLeftSBpaddingAll;





function createProtfolioLeft(){

	LeftDivBigW = homePageLeftW-lineW*4;
	LeftDivBigH = homePageLeftH;
	LeftDivBigX = l+lineW;
	LeftDivBigY = t;

	protfolioLeftSS = [];
	protfolioLeftSAll = [];
	protfolioLeftSBpaddingAll = [];


	protfolioLeftDiv = createDiv('');
	leftDivBigs.push(protfolioLeftDiv);
	protfolioLeftDiv.parent(homePageLeft);
	//protfolioLeftDiv.hide();
	protfolioLeftDiv.size(LeftDivBigW,LeftDivBigH);
	//protfolioLeftDiv.style('background-color','gray');
	protfolioLeftDiv.attribute('align', 'center');
	protfolioLeftDiv.style('overflow','hidden auto');
	protfolioLeftDiv.style('padding','0px 20px 0px 20px');
	protfolioLeftDiv.position(LeftDivBigX,LeftDivBigY);

	let head = createDiv('head');
	head.parent(protfolioLeftDiv);
	head.style('text-align','left');
	head.style('font-size','50pt');

	createProtfolioLeftS();
	createProtfolioLeftS();
	createProtfolioLeftS();
	createProtfolioLeftS();
	createProtfolioLeftS();
	createProtfolioLeftS();
	createProtfolioLeftS();
	createProtfolioLeftS();
	createProtfolioLeftS();

	idProtfolioLeftS();

}



function createProtfolioLeftS(protfolio_h,profolio_img_scr,profolio_content){

	//protfolioS
	let protfolioS = createDiv('');
	protfolioS.parent(protfolioLeftDiv);
	protfolioS.style('overflow','hidden auto');
	protfolioS.style('float','left');
	protfolioS.style('box-sizing','border-box');
	protfolioS.style('border','solid 1px silver');	
	protfolioS.style('margin','30px');
	//protfolioS.style('width',LeftDivBigW/2-60+'px');
	//protfolioS.style('height','auto');
	protfolioS.size(LeftDivBigW/2-60,LeftDivBigW/2-60);
	protfolioS.style('background-color','gray');


	//protfolioSB
	let protfolioSB = createDiv('');
	protfolioSB.parent(protfolioS);
	protfolioSB.style('position','absolute');
	protfolioSB.style('pointer-events','none');
	protfolioSB.style('box-sizing','border-box');
	protfolioSB.size(LeftDivBigW/2-60,LeftDivBigW/2-60);
	protfolioSB.style('border','solid 2px black');

	//protfolioSImg
	let protfolioSImg = createDiv('');
	protfolioSImg.parent(protfolioS);
	protfolioSImg.size(LeftDivBigW/2-60,LeftDivBigW/3)
	//protfolioSImg.style('background-image','url(RECENT_PLAY_IMG/'+rightDivS_img_scr+')');
	protfolioSImg.style('background-image','url(RECENT_PLAY_IMG/1231.png)');
	protfolioSImg.style('background-position','center center');
	protfolioSImg.style('background-repeat','no-repeat');
	protfolioSImg.style('background-size','cover');




	protfolioLeftSS.push(0);
	protfolioLeftSAll.push(protfolioS);
	protfolioLeftSBpaddingAll.push(0);




}










function createProtfolioRight(){

	//homePageRight.style('background-color','gold');
	protfolioUrl = [];

	//createProtfolioRightDivBig
	protfolioRightDiv = createDiv('');
	rightDivBigs.push(protfolioRightDiv);
	pageStatus.push(0);
	rightDivTitles.push('＋ PROTFOLIO OVERVIEW &nbsp');
	protfolioRightDiv.parent(homePageRight);
	protfolioRightDiv.id('protfolioRightDiv');
	protfolioRightDiv.attribute('align', 'center');
	protfolioRightDiv.style('box-sizing','border-box');
	protfolioRightDiv.style('overflow-x','hidden');
	protfolioRightDiv.style('overflow-y','scroll');
	protfolioRightDiv.style('margin-left',20+'px');
	protfolioRightDiv.style('margin-right',20+'px');
	//protfolioRightDiv.style('background-color','rgba(120,120,120,0.5)');
	protfolioRightDiv.position(rightDivBigX,rightDivBigY);
	protfolioRightDiv.size(rightDivBigW,rightDivBigH);

	let headSpace = createDiv('');
	headSpace.parent(protfolioRightDiv);
	headSpace.size(rightDivBigW,90);


	//createProtfolioImg
	protfolioImg = createDiv('');
	protfolioImg.parent(protfolioRightDiv);
	protfolioImg.style('background-image','url(PROTFOLIO_IMG/PROTFOLIO.png');
	protfolioImg.style('box-sizing','border-box');
	protfolioImg.style('box-shadow','2px 2px 9px rgba(90,90,90,0.2)');
	protfolioImg.style('cursor','pointer');
	protfolioImg.style('border','solid 1px silver');
	protfolioImg.style('background-position','center center');
	protfolioImg.style('background-repeat','no-repeat');
	protfolioImg.style('background-size','cover');
	protfolioImg.size(270*n,350*n);
	let protfolioImgX = 130;
	let protfolioImgY = 150;
	protfolioImg.position(protfolioImgX-(1-n)*20,protfolioImgY);

	protfolioImg.mouseOver(protfolioOver);
	protfolioImg.mouseOut(protfolioOut);

	protfolioUrl.push(protfolioImg);
	protfolioImg.mouseClicked(protfolioClicked);

	//c
	InfluenceImg = createDiv('');
	InfluenceImg.parent(protfolioRightDiv);
	InfluenceImg.style('background-image','url(PROTFOLIO_IMG/INFLUENCE_DESIGN.png');
	InfluenceImg.style('box-sizing','border-box');
	InfluenceImg.style('box-shadow','2px 2px 9px rgba(90,90,90,0.2)');
	InfluenceImg.style('margin','10px 0px 10px 0px');
	InfluenceImg.style('cursor','pointer');
	InfluenceImg.style('border','solid 1px silver');
	InfluenceImg.style('background-position','center center');
	InfluenceImg.style('background-repeat','no-repeat');
	InfluenceImg.style('background-size','cover');
	InfluenceImg.size(180*n,250*n);
	InfluenceImg.position(protfolioImgX-80-(1-n)*20,protfolioImgY+150);

	InfluenceImg.mouseOver(protfolioOver);
	InfluenceImg.mouseOut(protfolioOut);

	protfolioUrl.push(InfluenceImg);
	InfluenceImg.mouseClicked(protfolioClicked);


	//
	InfluenceHopeImg = createDiv('');
	InfluenceHopeImg.parent(protfolioRightDiv);
	InfluenceHopeImg.style('background-image','url(PROTFOLIO_IMG/INFLUENCE_DESIGN_HOPE.png');
	InfluenceHopeImg.style('box-sizing','border-box');
	InfluenceHopeImg.style('box-shadow','2px 2px 9px rgba(90,90,90,0.2)');
	InfluenceHopeImg.style('margin','10px 0px 10px 0px');
	//InfluenceHopeImg.style('float','left');
	InfluenceHopeImg.style('cursor','pointer');
	InfluenceHopeImg.style('border','solid 1px silver');
	InfluenceHopeImg.style('background-position','center center');
	InfluenceHopeImg.style('background-repeat','no-repeat');
	InfluenceHopeImg.style('background-size','cover');
	InfluenceHopeImg.size(200*n,150*n);
	InfluenceHopeImg.position(protfolioImgX+40-(1-n)*20,protfolioImgY+275);

	InfluenceHopeImg.mouseOver(protfolioOver);
	InfluenceHopeImg.mouseOut(protfolioOut);

	protfolioUrl.push(InfluenceHopeImg);
	InfluenceHopeImg.mouseClicked(protfolioClicked);

}