let backimg = [
	// 随机图从这里开始
	"url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-w85vkp.webp)",
	"url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-mplg21.webp)",
	"url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-m9g9v8.webp)",
	"url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/background.webp)",
	"url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/10.webp)",
	"url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/1.webp)",
	"url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/_20220805185049.webp)",
	"url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-mdqzoy.webp)",
];
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
let index = getRandom(0, backimg.length - 1);
// console.log(backimg);
document.querySelector("#web_bg").style.backgroundImage = backimg[index];
