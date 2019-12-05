let protfolioDiv;
let protfolioImg;
let InfluenceImg;
let InfluenceHopeImg;



function createProtfolio(){

	//homePageRight.style('background-color','gold');

	//createProtfolioDivBig
	protfolioDiv = createDiv('');
	rightDivBigs.push(protfolioDiv);
	rightDivStatus.push(0);
	rightDivTitles.push('＋ PROTFOLIO OVERVIEW &nbsp');
	protfolioDiv.parent(homePageRight);
	protfolioDiv.id('protfolioDiv');
	protfolioDiv.attribute('align', 'center');
	protfolioDiv.style('box-sizing','border-box');
	protfolioDiv.style('overflow-x','hidden');
	protfolioDiv.style('overflow-y','scroll');
	protfolioDiv.style('margin-left',20+'px');
	protfolioDiv.style('margin-right',20+'px');
	protfolioDiv.style('background-color','rgba(120,120,120,0)');
	protfolioDiv.position(rightDivBigX,rightDivBigY);
	protfolioDiv.size(rightDivBigW,rightDivBigH);

	let headSpace = createDiv('');
	headSpace.parent(protfolioDiv);
	headSpace.size(rightDivBigW,90);


	//createProtfolioImg
	protfolioImg = createDiv('');
	protfolioImg.parent(protfolioDiv);
	protfolioImg.style('background-image','url(PROTFOLIO_IMG/PROTFOLIO.png');
	protfolioImg.style('box-sizing','border-box');
	protfolioImg.style('cursor','pointer');
	protfolioImg.style('border','solid 1px silver');
	protfolioImg.style('background-position','center center');
	protfolioImg.style('background-repeat','no-repeat');
	protfolioImg.style('background-size','cover');
	protfolioImg.size(270,350);

	protfolioImg.mouseOver(protfolioOver);
	protfolioImg.mouseOut(protfolioOut);


	let protfolioImgX = 130;
	let protfolioImgY = 150;
	protfolioImg.position(protfolioImgX,protfolioImgY);
	//c
	InfluenceImg = createDiv('');
	InfluenceImg.parent(protfolioDiv);
	InfluenceImg.style('background-image','url(PROTFOLIO_IMG/INFLUENCE_DESIGN.png');
	InfluenceImg.style('box-sizing','border-box');
	InfluenceImg.style('margin','10px 0px 10px 0px');
	//InfluenceImg.style('float','left');
	InfluenceImg.style('cursor','pointer');
	InfluenceImg.style('border','solid 1px silver');
	InfluenceImg.style('background-position','center center');
	InfluenceImg.style('background-repeat','no-repeat');
	InfluenceImg.style('background-size','cover');
	InfluenceImg.size(180,250);
	InfluenceImg.position(protfolioImgX-80,protfolioImgY+150);

	InfluenceImg.mouseOver(protfolioOver);
	InfluenceImg.mouseOut(protfolioOut);

	//
	InfluenceHopeImg = createDiv('');
	InfluenceHopeImg.parent(protfolioDiv);
	InfluenceHopeImg.style('background-image','url(PROTFOLIO_IMG/INFLUENCE_DESIGN_HOPE.png');
	InfluenceHopeImg.style('box-sizing','border-box');
	InfluenceHopeImg.style('margin','10px 0px 10px 0px');
	//InfluenceHopeImg.style('float','left');
	InfluenceHopeImg.style('cursor','pointer');
	InfluenceHopeImg.style('border','solid 1px silver');
	InfluenceHopeImg.style('background-position','center center');
	InfluenceHopeImg.style('background-repeat','no-repeat');
	InfluenceHopeImg.style('background-size','cover');
	InfluenceHopeImg.size(200,150);
	InfluenceHopeImg.position(protfolioImgX+40,protfolioImgY+275);

	InfluenceHopeImg.mouseOver(protfolioOver);
	InfluenceHopeImg.mouseOut(protfolioOut);

}