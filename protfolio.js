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
let protfolioLeftSIntroductionAll;





function createProtfolioLeft(){

	LeftDivBigW = homePageLeftW-lineW*4;
	LeftDivBigH = homePageLeftH;
	LeftDivBigX = l+lineW;
	LeftDivBigY = t;

	protfolioLeftSS = [];
	protfolioLeftSAll = [];
	protfolioLeftSBpaddingAll = [];
	protfolioLeftSIntroductionAll = [];


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
	head.style('text-align','right');
	head.style('font-size','24pt');
	head.style('margin','90px 30px 30px 30px');
	head.style('font-family','Microsoft YaHei');
	head.style('font-weight','990');
	head.html('PROTFOLIO');
	createProtfolioLeftS('TREE','url(PROTFOLIO_IMG/OVER_LIFE.jpg)','该作品运用数字图像生成技术完成，通过模拟简单的计算机生命在屏幕中的演绎而生成的视觉图像。作品对不同的树的图片经行了数字化的图像生命演绎，其算法能够简单的识别原始图像中的树干，树枝与树叶并作不同的处理。而作品的最终呈现更加偏向动态的展示，而非纯粹的静态。过程也均有电脑自动完成。其原理是将图片等分成若干个长宽为5-20像素不等的区块，计算机将自下而上，逐排对途中所有区块经行探查与演绎，对图形探查后将留下痕迹，并根据算法判断出痕迹的样貌，从而模拟生命在屏幕上蔓延的状态。并最终得到这组以树为主题的作品。');
	createProtfolioLeftS('INFLUENCE FONT','url(PROTFOLIO_IMG/INFLUENCE_FONT.jpg)','Star with INFLUENCE FONT programing object.A motional font object with montion graphic.It is still a idea right now ,It will be gradually improced in future.');
	createProtfolioLeftS('ZOKEI poster','url(PROTFOLIO_IMG/zokei_poster.jpg)','以“ZOKEI展”中的“ZO”为创作原型经行的海报设计。在日语中“ZO”对应汉字中的“造”、有创造之意，也包含并强调了“造”的过程，从而可以理解为物体处在变化之中之意，或反复，从零至一的创造思维概念。考虑到“ZOKEI展”也是一年一度的毕业展的特殊意义，我希望用“ZO”的概念来隐喻“出生”，并将相同的形状进行反复，迭代地运用，创作并组合了“ZO”的形状。');
	createProtfolioLeftS('BOUNDLESS','url(PROTFOLIO_IMG/BOUNDLESS.jpg)','“BOUNDLESS”是一组表现动物的海报作品，利用电脑的3d技术建立模型，并运用2dCG转绘而成。人们通常倾向于建立‘完美’的模型，但破损的模型的感觉，在我的体验中一直挥之不去，甚至它占据着比建立出漂亮模型的完美感更多的感受。而这种感觉，就像放纵出面与面之间的‘刺破’，法线的反转和在3D中拖拽出的点位的偏离一样，因此，在“BOUNDLESS”中，动物的模型是缠绕在一起的，而身体某一部分因为扭曲的力量而变形，拉伸，或相互突破。');
	createProtfolioLeftS('EGO','url(PROTFOLIO_IMG/EGO.jpg)','株式会社「天乾勿躁」から依頼して、「服装の哲学」を主題とする秋と冬の宣伝ポスターの作品である。着物というのが、機能性を持つ一方、人間の自己認識が世界への投影というものもある。どんな服装を選ぶだけではなく、どんな人になるのである。この自分への追求は一生に進んでいるかもしれない。フランス語には「je」が物理的自分に対して、英語の「ego」が思考の自己である。「je」から「ego」までのことは自己実現を隠喻する。');
	createProtfolioLeftS('作品集6','url(PROTFOLIO_IMG/protfolio_waiting.jpg)','sdsdsdsdsdsdsd');
	createProtfolioLeftS('作品集7','url(PROTFOLIO_IMG/protfolio_waiting.jpg)','sdsdsdsdsdsdsd');
	createProtfolioLeftS('作品集8','url(PROTFOLIO_IMG/protfolio_waiting.jpg)','sdsdsdsdsdsdsd');
	createProtfolioLeftS('作品集9','url(PROTFOLIO_IMG/protfolio_waiting.jpg)','sdsdsdsdsdsdsd');

	idProtfolioLeftS();

}



function createProtfolioLeftS(protfolio_h,profolio_img_scr,profolio_content){

	//protfolioS  每个作品的展示div
	let protfolioS = createDiv('');
	protfolioS.parent(protfolioLeftDiv);
	protfolioS.style('overflow','hidden');
	protfolioS.style('float','left');
	protfolioS.style('box-sizing','border-box');
	//protfolioS.style('border','solid 1px silver');	
	protfolioS.style('margin','30px');
	//protfolioS.style('width',LeftDivBigW/2-60+'px');
	//protfolioS.style('height','auto');
	protfolioS.size(LeftDivBigW/2-60,LeftDivBigW/2-60);
	protfolioS.style('cursor','pointer');
	protfolioS.style('background-color','sliver');
	protfolioS.mouseOver(protfolioLeftSOver);
	protfolioS.mouseOut(protfolioLeftSOut);


	//protfolioSImg  每个作品展示框框中的图片div
	let protfolioSImg = createDiv('');
	protfolioSImg.parent(protfolioS);
	protfolioSImg.size(LeftDivBigW/2-60,LeftDivBigW/2-60)
	//protfolioSImg.style('background-image','url(RECENT_PLAY_IMG/'+rightDivS_img_scr+')');
	protfolioSImg.style('position','absolute');
	//protfolioSImg.style('float','none');
	protfolioSImg.style('background-image',profolio_img_scr);
	protfolioSImg.style('background-position','center center');
	protfolioSImg.style('background-repeat','no-repeat');
	protfolioSImg.style('background-size','cover');


	//protfolioLeftSIntroduction 每个作品及鼠标指上去后显示的内容简介div
	let protfolioLeftSIntroduction = createDiv('');
	protfolioLeftSIntroduction.parent(protfolioS);
	protfolioLeftSIntroduction.style('position','absolute');
	protfolioLeftSIntroduction.size(LeftDivBigW/2-60,LeftDivBigW/2-60);
	protfolioLeftSIntroduction.style('background-color','black');
	protfolioLeftSIntroduction.style('background-color','rgb(0,0,0)');
	protfolioLeftSIntroduction.hide();
	//protfolioLeftSIntroduction.style('opacity','0.6');


	let protfolioLeftSIntroductionHead = createDiv('');
	protfolioLeftSIntroductionHead.parent(protfolioLeftSIntroduction);
	protfolioLeftSIntroductionHead.style('box-sizing','border-box');
	protfolioLeftSIntroductionHead.style('font-family','Microsoft YaHei');
	protfolioLeftSIntroductionHead.style('font-size','38px');
	protfolioLeftSIntroductionHead.style('text-align','left');
	protfolioLeftSIntroductionHead.style('margin','20px 20px 0px 20px');
	protfolioLeftSIntroductionHead.style('color','white');
	protfolioLeftSIntroductionHead.html(protfolio_h);
	//protfolioLeftSIntroductionHead.style('position','absolute');
	//protfolioLeftSIntroduction.style('float','none');
	protfolioLeftSIntroductionHead.style('width',LeftDivBigW/2-60-40+'px');

	let protfolioLeftSIntroductionContant = createDiv('');
	protfolioLeftSIntroductionContant.parent(protfolioLeftSIntroduction);
	protfolioLeftSIntroductionContant.style('box-sizing','border-box');
	protfolioLeftSIntroductionContant.style('font-family','Microsoft YaHei');
	protfolioLeftSIntroductionContant.style('font-size','12px');
	protfolioLeftSIntroductionContant.style('text-align','left');
	protfolioLeftSIntroductionContant.style('margin','20px 20px 0px 20px');
	protfolioLeftSIntroductionContant.style('color','white');
	protfolioLeftSIntroductionContant.html(profolio_content);
	//protfolioLeftSIntroduction.style('float','none');
	protfolioLeftSIntroductionContant.style('width',LeftDivBigW/2-60-40+'px');


	//protfolioSB (border) 每个作品展示框框的描边
	let protfolioSB = createDiv('');
	protfolioSB.parent(protfolioS);
	protfolioSB.style('position','absolute');
	protfolioSB.style('pointer-events','none');
	protfolioSB.style('box-sizing','border-box');
	protfolioSB.size(LeftDivBigW/2-60,LeftDivBigW/2-60);
	protfolioSB.style('border','solid 1px gray');
	//protfolioSB.style('z-index','1');


	//生成各数列
	protfolioLeftSAll.push(protfolioS);
	protfolioLeftSS.push(0);
	protfolioLeftSBpaddingAll.push(0);
	protfolioLeftSIntroductionAll.push(protfolioLeftSIntroduction);



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
	protfolioImg.style('background-image','url(PROTFOLIO_IMG/PROTFOLIO.jpg');
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