let playgroundDiv;

function createPlayground(){
	playgroundDiv = createDiv('');
	playgroundDiv = createDiv('');
	rightDivBigs.push(playgroundDiv);
	pageStatus.push(0);
	rightDivTitles.push('＋ PLAYGROUND &nbsp');
	playgroundDiv.parent(homePageRight);
	playgroundDiv.id('protfolioDiv');
	playgroundDiv.attribute('align', 'center');
	playgroundDiv.style('box-sizing','border-box');
	playgroundDiv.style('overflow-x','hidden');
	playgroundDiv.style('overflow-y','scroll');
	playgroundDiv.style('margin-left',20+'px');
	playgroundDiv.style('margin-right',20+'px');
	playgroundDiv.style('background-color','rgba(120,120,120,0)');
	playgroundDiv.position(rightDivBigX,rightDivBigY);
	playgroundDiv.size(rightDivBigW,rightDivBigH);
}