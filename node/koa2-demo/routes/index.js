const router = require('koa-router')()
const Todo = require("../schema/index")

/* 
 * todo index
 */
router.get('/', async (ctx, next) => {
	let todoData = await Todo.find({});
	// console.log(todoData);
	await ctx.render('index', {
		docs : todoData,
		title: 'Hello Koa 2!!!'
	})
})

/* 
 * todo Create
 */
router.post('/add',async(ctx, next) => {
	let todoData = new Todo(ctx.request.body.todo);
	todoData.createData = new Date();
	
	let todoDataSave = await Todo.create(todoData);
	console.log(todoDataSave);
	ctx.redirect('/');
})

/*
 * todo Del
 */
router.get('/del/:id',async(ctx, next) => {
	let id = ctx.params.id;
	if(!id){
    	console.log("必须指定要删除的任务。")
	} else {
		let todoDataDel = await Todo.remove({_id:id});
		ctx.redirect('/');
	}
})

/*
 * todo Read detail
 */
router.get('/detail/:id',async(ctx, next) => {
	let id = ctx.params.id;
	if(!id){
    	console.log("必须指定要任务ID。")
	} else {
		let todoDataDetail = await Todo.findById(id);
		await ctx.render('detail', {
			docs : todoDataDetail,
			title: 'Hello Koa 2!!! Detail show'
		})
	}
	
})

/*
 * todo Update
 */
router.post('/update/:id',async(ctx, next) => {
	let id = ctx.params.id;
	let todoDataNew = new Todo(ctx.request.body.todo);
	if(!id){
    	console.log("必须指定要任务ID。")
	} else {
		let todoDataUpdate = await Todo.findByIdAndUpdate(id,
			{
				$set:{
					title : todoDataNew.title,
					finishTime : todoDataNew.finishTime
				}

			},
			{ upsert : true }
		);
		ctx.redirect('/');
	}
})


router.get('/string', async (ctx, next) => {
	ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
	ctx.body = {
		title: 'koa2 json'
	}
})

module.exports = router