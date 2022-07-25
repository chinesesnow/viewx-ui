import common from './resources/util/common.js'

export default{
	install:(Vue)=>{
		Vue.prototype.common=common
	}
}
