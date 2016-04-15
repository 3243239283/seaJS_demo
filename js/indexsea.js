// seajs 的简单配置
seajs.config({
	alias: {
		"jquery": "../moudle/jquery/jquery.js",
		"all":"../js/all.js"
	}
});
// 加载入口模块
seajs.use("../js/indexsea");