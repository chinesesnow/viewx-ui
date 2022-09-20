export default {
	
	/**获取当前时间UNIX时间戳*/
	getUnixTimestamp() {
		let timestamp = Date.parse(new Date()) / 1000
		return timestamp
	},
	
	/**unix时间戳转换成普通时间*/
	unixTimestamp2Date(timestamp = 0, type = 0) {
		if (timestamp <= 0) {
			let d = new Date()
		} else {
			let d = new Date(timestamp * 1000)
		}
		let Y = d.getFullYear()
		let M = d.getMonth() + 1
		let D = d.getDate()
		let H = d.getHours()
		let Mi = d.getMinutes()
		let S = d.getSeconds()

		if (M < 10) M = '0' + M}
		if (D < 10) D = '0' + D}
		if (H < 10) H = '0' + H}
		if (Mi < 10)Mi = '0' + Mi}
		if (S < 10) S = '0' + S}

		if (type == 0) {
			return Y + '-' + M + '-' + D + ' ' + H + ':' + Mi + ':' + S
		} else if (type == 1) {
			return Y + '-' + M + '-' + D
		} else if (type == 2) {
			return H + ':' + Mi + ':' + S
		} else if (type == 3) {
			return M + '/' + D
		}
	},
	
	/**获得多少天以后的日期*/
	getDateByAddDays(addDayCount = 0) {
		let dat = new Date()
		dat.setDate(dat.getDate() + addDayCount)
		let y = dat.getFullYear()
		let m = dat.getMonth() + 1
		let d = dat.getDate()
		if (m < 10) {
			m = '0' + m
		}
		if (d < 10) {
			d = '0' + d
		}
		return y + "-" + m + "-" + d
	},
	
	/**获取随机数*/
	getRandom(max) {
		return Math.floor(Math.random() * max)
	},
	
	/*获取url里面的参数**/
	getUrlParam(url) {
		var s = location.href
		s = s.replace("?", "?&").split("&");
		var re = ""
		for (var i = 0; i < s.length; i++) {
			if (s[i].indexOf(url + "=") == 0) {
				re = s[i].replace(url + "=", "")
			}
		}
		return re
	},
	
	/**验证身份证号码*/
	IsIDcard: function(num) {
		num = num.toUpperCase();
	
		var len, re;
		len = num.length;
		if (len == 0) return true;
	
		//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。    
		if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
			return false;
		}
	
		//验证前两位地区是否有效 
		var aCity = {
			11: "北京",
			12: "天津",
			13: "河北",
			14: "山西",
			15: "内蒙古",
			21: "辽宁",
			22: "吉林",
			23: "黑龙江",
			31: "上海",
			32: "江苏",
			33: "浙江",
			34: "安徽",
			35: "福建",
			36: "江西",
			37: "山东",
			41: "河南",
			42: "湖北",
			43: "湖南",
			44: "广东",
			45: "广西",
			46: "海南",
			50: "重庆",
			51: "四川",
			52: "贵州",
			53: "云南",
			54: "西藏",
			61: "陕西",
			62: "甘肃",
			63: "青海",
			64: "宁夏",
			65: "新疆",
			71: "台湾",
			81: "香港",
			82: "澳门",
			91: "国外"
		}
	
		if (aCity[parseInt(num.substr(0, 2))] == null) {
			return false;
		}
	
		//当身份证为15位时的验证出生日期。 
		if (len == 15) {
			re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
			var arrSplit = num.match(re);
	
			//检查生日日期是否正确  
			var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
			var bGoodDay;
			bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (
				dtmBirth.getDate() == Number(arrSplit[4]));
			if (!bGoodDay) {
				return false;
			}
		}
	
		//当身份证号为18位时，校验出生日期和校验位。 
		if (len == 18) {
			re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
			var arrSplit = num.match(re);
			//检查生日日期是否正确  
			var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
			var bGoodDay;
			bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) &&
				(dtmBirth.getDate() == Number(arrSplit[4]));
			if (!bGoodDay) {
				return false;
			} else {
				//检验18位身份证的校验码是否正确。 
				//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
				var valnum;
				var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
				var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
				var nTemp = 0,
					i;
				for (i = 0; i < 17; i++) {
					nTemp += num.substr(i, 1) * arrInt[i];
				}
				valnum = arrCh[nTemp % 11];
				if (valnum != num.substr(17, 1)) {
					return false;
				}
			}
		}
		return true;
	},
	
	/**手机号码验证 返回Boolean*/
	mobileCheck(mobile) {
		let preg = "^(0|86|17951)?(16[0-9]|17[0-9]|13[0-9]|15[012356789]|18[0-9]|19[0-9]|14[57])[0-9]{8}$"
		let result = new RegExp(preg, "gim").test(mobile)
		return result
	},
	
	/**邮箱验证 返回Boolean*/
	emailCheck(email) {
		let preg = "^\\w+((-\\w+)|(\.\\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$"
		let result = new RegExp(preg, "gim").test(email)
		return result
	},
	
	/**字符串去左右空格*/
	stringTrim(s) {
		return s.replace(/(^\s*)|(\s*$)/g, "")
	},
	
	/**提取富文本字符串中的img标签 生成自适应图片的字符串*/
	getImgSrcfromString(str) {
		let new_str = str
		let img_reg = /<img.*?(?:>|\/>)/gi
		let src_reg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i
		let imgs = str.match(img_reg)
		if (imgs != null) {
			for (let i = 0; i < imgs.length; i++) {
				let src = imgs[i].match(src_reg)[1]
				new_str = new_str.replace(imgs[i],
					`<img style="width:100%;height:auto;margin:10px 0;" src=${src} />`)
			}
		}
		return new_str
	},
	
	/**数组中重复元素删除*/
	repeatArrayClear(array) {
		let arr = []
		for (let i = 0; i < array.length; i++) {
			if (arr.indexOf(array[i]) == -1) {
				arr.push(array[i])
			}
		}
		return arr
	},
	
	/**H5端压缩图片 通过回调函数获取压缩后的图片*/
	recursionCompressH5(url, isReturnBase64,callback) {
		uni.showLoading({title:'自动压缩中...'})
		uni.getImageInfo({
			src: url,
			success:(res)=> {
				let canvasWidth = res.width
				let canvasHeight = res.height
				let img = new Image()
				img.src = res.path
				let canvas = document.createElement("canvas")
				let ctx = canvas.getContext("2d")
				canvas.width = canvasWidth / 1.5
				canvas.height = canvasHeight / 1.5
				ctx.drawImage(img, 0, 0, canvasWidth / 1.5, canvasHeight / 1.5)
				canvas.toBlob((fileSrc) =>{
					let imgSrc = window.URL.createObjectURL(fileSrc)
					uni.getFileInfo({
						filePath: imgSrc,
						success: (resFileInfo) => {
							if (resFileInfo.size > 1048576) {
								//压缩后大于1M就继续压缩
								this.recursionCompressH5(imgSrc, isReturnBase64,callback)
								return
							} else {
								let resultBase64 = canvas.toDataURL("image/jpg")
								callback(!isReturnBase64 ? resultBase64 :imgSrc)
							}
						}
					})
				})
			}
		})
	}
	
}
