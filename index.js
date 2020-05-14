const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let rank = "Know our Predicted Rank for 2019!";

function getRank(name, mark){
    rank = "Hi " + name + ", your Rank lies in between" ; 
    if(mark > 250){
        rank = rank + " 1 - 200";
    }
    else if(mark > 221){
        rank = rank + " 201 - 500";
    }
    else if(mark > 202){
        rank = rank + " 501 - 1000";
    }
    else if(mark > 196){
        rank = rank + " 1001 - 1500";
    }
    else if(mark > 186){
        rank = rank + " 1501 - 2000";
    }
    else if(mark > 176){
        rank = rank + " 2001 - 2500";
    }
    else if(mark > 250){
        rank = rank + " 2501 - 3000";
    }
    else if(mark > 173){
        rank = rank + " 3001 - 3500";
    }
    else if(mark > 164){
        rank = rank + " 3501 - 4000";
    }
    else if(mark > 156){
        rank = rank +" 4001 - 5000";
    }
    else if(mark > 151){
        rank = rank +" 5001 - 6000";
    }
    else if(mark > 143){
        rank = rank +" 6001 - 7000";
    }
    else if(mark > 138){
        rank = rank +" 7001 - 8000";
    }
    else if(mark > 128){
        rank = rank +" 8001 - 10000";
    }
    else if(mark > 119){
        rank = rank +" 10001 - 12000";
    }
    else if(mark > 111){
        rank = rank +" 12001 - 15000";
    }
    else 
    {
        rank = "Hi " + name + "Your Rank is more 15000";
    }   
};

function rankReset(mark){
    rank = "Know our Predicted Rank for 2019!";
};

app.get("/", function(request, response){
    response.render(__dirname + "/views/home");
});

app.get("/rank", function(request, response){
    response.render(__dirname + "/views/rank");
});

app.post("/rank", function(request, response){
    var name = request.body.name;
    // var email = request.body.email;
    var marks = request.body.marks;
    getRank(name, marks);
    response.render(__dirname + "/views/result",  { rank: rank });
});

app.post("/result", function(request, response){
    rankReset();
    response.redirect('/rank');
});


app.get("/about", function(request, response){
    response.render(__dirname + "/views/about");
});

app.get("/model", function(request, response){
    response.render(__dirname + "/views/model");
});


app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });
  