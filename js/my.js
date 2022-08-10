let backimg = [
	// 随机图从这里开始
	"url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/10.jpg)",
	"url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/background.jpg)",
	"url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-y82w7l.png)",
	"url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-mplg21.png)",
    "url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-4dm75m.png)",
    "url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-m9g9v8.png)",
    "url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-4gr7p3.png)",
    "url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-9m7wr1.jpg)",
    "url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-955l51.jpg)",
    "url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-mdqzoy.jpg)",
    "url(https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/wallhaven-w85vkp.jpg)",
	
   
];
function getRandom(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}
let index = getRandom(0,backimg.length-1)
console.log(backimg);
document.querySelector("#web_bg").style.backgroundImage = backimg[index]
