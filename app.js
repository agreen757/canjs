var express = require('express'),
    jade = require('jade'),
    path = require('path');

var twit = require('twit');
var T = new twit({
    consumer_key: 'ifYRUgfpEctzwrhVkCnlsGHhZ',
    consumer_secret: '8mcyW8KAhDhbvu4DTQdvDytMViCCNLRFgjtek5rIuJ6cZeewlo',
    access_token: '2345694962-YkesAp9P3tVTyt9AdqXJ9nQmMHlFqkIfMGQ5cdS',
    access_token_secret: 'sw8gz44TBtjmXbct7qNqLqxk208YkSsn7ldOlFBoC4ISE'
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