//1、引入express

const express = require('express')

//2、创建应用对象
const app = express()

//3、创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server', (request, response) => {
	//设置响应头       设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*')
	// ('Access-Control-Allow-Origin', '*')
	//设置响应
	response.send('hello ajax')
})
//可以接收任意类型的请求
app.all('/server', (request, response) => {
	//设置响应头       设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*')
	// ('Access-Control-Allow-Origin', '*')
	//响应头
	response.setHeader('Access-Control-Allow-Headers', '*')

	//设置响应
	response.send('hello ajax post')
})
//JSON响应
app.all('/json-server', (request, response) => {
	//设置响应头       设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*')
	// ('Access-Control-Allow-Origin', '*')
	//响应头
	response.setHeader('Access-Control-Allow-Headers', '*')
	//响应一个数据
	const data = {
		name: 'huge'
	}
	let str = JSON.stringify(data)
	//设置响应
	response.send(str)
})
//针对IE缓存
app.get('/ie', (request, response) => {
	//设置响应头       设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*')
	// ('Access-Control-Allow-Origin', '*')
	//设置响应
	response.send('hello IE-23')
})
//延迟响应
app.all('/delay', (request, response) => {
	//设置响应头       设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*')
	response.setHeader('Access-Control-Allow-Headers', '*')
	setTimeout(() => {
		//设置响应
		response.send('延迟响应')
	}, 3000)

})
//jquery 服务
app.all('/jquery-sever', (request, response) => {
	//设置响应头       设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*')
	const data = { name: "Huge" }
	//设置响应
	// response.send('hello jQuery ajax')
	response.send(JSON.stringify(data))
})
//axios 服务
app.all('/axios-server', (request, response) => {
	//设置响应头       设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*')

	response.setHeader('Access-Control-Allow-Headers', '*')
	const data = { name: "Huge" }
	//设置响应
	// response.send('hello axios ajax')
	response.send(JSON.stringify(data))
})
//fetch 服务
app.all('/fetch-server', (request, response) => {
	//设置响应头       设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*')

	response.setHeader('Access-Control-Allow-Headers', '*')
	const data = { name: "Huge" }
	//设置响应
	// response.send('hello fetch ajax')
	response.send(JSON.stringify(data))
})
//jsonp 服务
app.all('/jsonp-server', (request, response) => {
	//设置响应头       设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*')

	//设置响应
	// response.send("console.log('hello jsonp')")
	const data = {
		name: '梅长苏'
	}
	//将数据转化为字符串
	let str = JSON.stringify(data)
	//返回结果
	response.end(`handle(${str})`)
})
//用户名检测是否存在
app.all('/check-username', (request, response) => {
	//设置响应头       设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*')

	//设置响应
	// response.send("console.log('hello jsonp')")
	const data = {
		exist: 1,
		msg: '用户名已经存在'
	}
	//将数据转化为字符串
	let str = JSON.stringify(data)
	//返回结果
	response.end(`handel(${str})`)
})
//用户名检测是否存在
app.all('/jquery-jsonp-server', (request, response) => {
	//设置响应头       设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*')

	//设置响应

	const data = {
		name: 1001,
		ctiy: ['北京','杭州','上海']
	}
	//将数据转化为字符串
	let str = JSON.stringify(data)
	//接收callback参数
	let cb=request.query.callback;
	//返回结果
	response.end(`${cb}(${str})`)
})


//4、监听端口 启动服务
app.listen(8000, () => {
	console.log("服务启动,8000 端口监听中···");
})

