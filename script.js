$(function() {
	doSplitCircles()
	setInterval(()=>{
		doSplitCircles()
	},5000)
});

let doSplitCircles = () => {
	$('.bg-design span').each((i, e) => {
		let a = Math.random() * 100; 
		let b = Math.random() * 95;
		let c = Math.random();
		$(e).css({'left': a + 'vw','top': b + 'vh','opacity': c});
	});
}