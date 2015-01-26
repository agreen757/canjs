//can.js stuff

var data = {message:"Hello Bitovi"};
    
var frag = can.view("app-template",data)

$('#my-app').html(frag)

//some other work

var otherinfo = {info:'tweets about canjs'}

var frag1 = can.view("second",otherinfo);

$('#my-firstcontain').html(frag1)


//get some tweets

$.post('/tweets', {data:'data'},function(data){
        //tweets.push({text:data.text})
        var tweets = new can.List([])
        
        //$('#tweets').html(frag3);
       
        for(i in data){
            tweets.push({url:data[i].url,image:data[i].image,user:data[i].user,text:data[i].text})
        }
       var frag3 = can.view("twitter",{tweet:tweets})
       $('#tweets').html(frag3)
       //console.log(data)
    })

/*setInterval(function(){
    
},5000)*/
