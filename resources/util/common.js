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
			return Y + '-' + M + '-' + D;
		} else if (type == 2) {
			return H + ':' + Mi + ':' + S;
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
	
	
}
