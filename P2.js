var express = require('express');
var app = express();

var fortunes = [
    "征服恐惧或者被恐惧征服",
    "河流需要春天",
    "不要畏惧未知",
    "你终将获得快乐的结局",
    "无论如何，保持简单"
];

//set view engine of handlebar
//这段代码创建了一个视图引擎，并对Express进行了配置，将其作为默认的视图引擎。
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
//。在创建Handlebars实例时，我们指明了默认布局（defaultLayout:'main'）。这就意味着除非你特别指明，否则所有视图用的都是这个布局。
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

//Assigns setting name to value. You may store any value that you want
app.set('port',process.env.port || 3000);//process.env 属性会返回包含用户环境的对象。
//注意我们指定程序端口的方式：app.set(port, process.env.PORT || 3000)。这样我们可以在启动服务器前通过设置环境变量覆盖端口。如果你在运行这个案例时发现它监听的不是3000端口，检查一下是否设置了环境变量PORT。

app.use(express.static( __dirname + '/public'));

//Express默认的状态码是200，不用显式指定
app.get('/',function(req,res){
    res.render('home');
});

//我们这次使用的不是Node的res.end，而是换成了Express的扩展res.send。我们还用res.set和res.status替换了Node的res.writeHead。
//Express还提供了一个res.type方法，可以方便地设置响应头Content-Type。尽管仍然可以使用res.writeHead和res.end，但没有必要也不作推荐。
app.get('/about', function(req, res){
    var randomFortunes = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune :randomFortunes });
});

//定制404页面
app.use(function(req,res){
    
    res.status(404);
    res.render('404');
});

//定制500页面 
//use():Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
app.use(
    function(err,req,res,next){
        console.error(err,stack);
        
        res.status(500);
        res.render('500');
    }
);

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port'));
});

