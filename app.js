var express = require('express'),
    jade = require('jade'),
    path = require('path');

var twit = require('twit');
var T = new twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
})

var app = express();

app.set('view engine','jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    res.render('index');
})

app.post('/tweets', function(req,res){
    console.log('in post')
    T.get('search/tweets', {q:'#canjs',count:50}, function(err,data,resp){
        console.log(data)
        var results = []
        var counter = 0;
        for(i in data.statuses){
            counter++
            console.log(data.statuses[i].text)
            var foo = data.statuses[i];
            results.push({user:foo.user.name,text:foo.text})
            console.log(counter)
            if(counter == data.statuses.length){
                res.send(results)
            }
            
        }
    })
    //res.send('something')
})


app.listen(3000,function(){
    console.log('started on 3000')
})