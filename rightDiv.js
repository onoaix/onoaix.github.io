let line;
let lineW;
let scrollbar1;
let scrollbar2;
let bs;
let scrollY;
let scrollH;
let scrollW;
let scrollbarAlpha;

let rightDivBig;
let rightDiv;
let rightDivSAll;
let rightDivS1All;
let rightDivS2All;
let rightDivSW;
let rightDivSH;
let rightDivS1W;

let newSP
let oldSP

function createScrollbar(){

  scrollbarAlpha = 0.2;
  bs = 20;
  line = select('#line');
  line.style('height',t+windowHeight*18/20+'px');
  line.position(0,windowHeight*1/20);
  scrollbar1 = select('#scrollbar1');
  scrollbar2 = select('#scrollbar2');
  lineW = 20;
  scrollH = 10;
  scrollW = 1.5;
  scrollY = map(document.getElementById('rightDivBig').scrollTop,0,document.getElementById('rightDivBig').scrollHeight-document.getElementById('rightDivBig').offsetHeight,scrollH,windowHeight*18/20-scrollH);
  scrollbar1.size(scrollW,scrollY);
  scrollbar2.size(scrollW,windowHeight*18/20-scrollH-scrollY);
  scrollbar1.style('background-color','rgba(0,0,0,'+scrollbarAlpha+')');
  scrollbar2.style('background-color','rgba(0,0,0,'+scrollbarAlpha+')');
  

  //scrollbar.position(0,scrollY);

}


function createRightDivBig(){


	rightDivBig = createDiv('');
	rightDivBig.id('rightDivBig');
	rightDivBig.style('position','fixed');
	rightDivBig.style('box-sizing','border-box');
	rightDivBig.style('overflow-x','hidden');
	rightDivBig.style('overflow-y','scroll');
	rightDivBig.style('margin-left',20+'px');
	rightDivBig.style('margin-right',20+'px');
	rightDivBig.position(l+windowWidth*3/5+lineW,t+windowHeight*1/20);
	rightDivBig.size(windowWidth*2/5-40-40,windowHeight*18/20);
	rightDivBig.mouseOver(rightDivOver);
	rightDivBig.mouseOut(rightDivOut);
	rightDivBig.attribute('align', 'left');

	let newSP = document.getElementById('rightDivBig').scrollTop;
    let oldSP = document.getElementById('rightDivBig').scrollTop;


	let Head = createP('＋ RECENT PLAY EVENT');
	Head.parent(rightDivBig);
	Head.style('margin','30px 0px 40px 0px');
	Head.style('font-size',19+'px');
	Head.style('font-family','Microsoft YaHei');
	Head.style('font-weight','bold');
	Head.style('color','black');
	//rightDivBig.style('background-color','rgba(255,255,0,0.3)');

	rightDivSAll = [];
	rightDivS1All = [];
	rightDivS2All = [];

	createRightDiv('↑ PROTFOLIO<br>[xiaouo]','22222.png','#May 19/2019<br><br>this is my PROTFOLIO~');
	createRightDiv('BE BORN','zokei_h.png','#November 26/2019<br><br>The contribution of 「ZOKEI EXHIBITION」 poster.');
	createRightDiv('INFLUENCE DESIGN','influence_design.png','#January 28/2019<br><br>❀2019年度東京造形大学ノミネート賞受賞<br>❀CGDA Visual Communication Design Award 2019 - Silver Award 受賞<br>ビジュアルディスプレィを介してユーザーがコンテンツの操作をする時の行為が期待通りの結果に向かっているか、間違った結果に向かっているかを、その結果に到達する前に直観できるようにアフォードするUIデザイン（マイクロインタラクション）の制作研究である。');
	createRightDiv('BOUNDLESS','boudless_h.png','#November 9/2017<br><br>❀UVインクジェット、ジェット、ジェット　ノミネート賞受賞<br>私達が常に「完璧」に達さなければならないという感情に満ちたときもありますが、しかし「不完璧」ということに向けて、その完璧を打ち破るインパクトはある「完璧」ではないでしょうか。３D技術で作られた動物形のモデルがそれぞれ絡まって、ある身体の部分が変形して、お互いに突き破ている。あるパーワで身体の中から体を切って、結んでいる様子はその感覚のインパクトを演出している。');

}


function createRightDivAll(){}

function createRightDiv(rightDivS_h,rightDivS_img_scr,temp_content){

	let rightDivS = createDiv('');
	rightDivSW = windowWidth*2/5-40-40;
	rightDivSH = 190
	rightDivS.class('rightDivS');
	rightDivS.parent(rightDivBig);
	rightDivS.style('overflow','hidden');
	rightDivS.style('float','left');
	//rightDivS.style('border-bottom','solid 36px black');
	rightDivS.size(rightDivSW,rightDivSH);
	rightDivS.style('float','left');
	rightDivS.style('margin','40px 0px 40px 0px');
	//rightDivS.style('border-bottom','solid 1px gray');
	//rightDivS.style('margin-left',20+'px');
	//rightDivS.style('background-color','black');
	rightDivS.mouseOver(rightDivSOver);
	rightDivS.mouseOut(rightDivSOut);

	let rightDivS1 = createDiv('');
	rightDivS1W = rightDivSW*1/2;
	rightDivS1.parent(rightDivS);
	rightDivS1.style('float','left');
	rightDivS1.style('box-sizing','border-box');
	rightDivS1.style('border','solid 1px silver');
	rightDivS1.size(rightDivS1W,rightDivSH);
	rightDivS1.style('background-image','url(RECENT_PLAY_IMG/'+rightDivS_img_scr+')');
	rightDivS1.style('background-position','center center');
	rightDivS1.style('background-repeat','no-repeat');
	rightDivS1.style('background-size','cover');

	let rightDivS2 = createDiv('');
	rightDivS2.parent(rightDivS);
	rightDivS2.style('overflow','auto')
	rightDivS2.style('float','left');
	rightDivS2.size(rightDivSW-rightDivS1W-40-10*n,rightDivSH);
	//rightDivS2.style('border-top','solid 2px silver');
	rightDivS2.style('margin','0px 20px 0px 20px');
	//rightDivS2.style('background-color','yellow');

	let rightDivSHead = createP(rightDivS_h);
	rightDivSHead.parent(rightDivS2);
	rightDivSHead.style('word-wrap','break-word');
	rightDivSHead.style('margin',0+'px');
	//rightDivSHead.style('margin','0px 10px 10px 10px');
	rightDivSHead.style('font-size',22+'px');
	rightDivSHead.style('font-family','Microsoft YaHei');
	rightDivSHead.style('font-weight','blod');
	rightDivSHead.style('text-align','left');

	let rightDivSContent = createP(temp_content);
	rightDivSContent.parent(rightDivS2);
	//rightDivSContent.style('word-wrap','break-word');
	//rightDivSContent.style('text-overflow','ellipsis');
	//rightDivSContent.style('margin','0px 10px 0px 10px');
	rightDivSContent.style('font-size',12+'px');
	rightDivSContent.style('color','gray');
	rightDivSContent.style('font-family','"Times New Roman", Times, serif');


	rightDivSAll.push(rightDivS);
	rightDivS1All.push(rightDivS1);
	rightDivS2All.push(rightDivS2);

}