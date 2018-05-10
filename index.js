var events = require('events'),
    eventsConfig = require('./config'),
    votes = require('./votes');
var http = require('http'),
    express = require('express'),
    app = express();

//--------the callbacks function--------------//
function reset() {
    console.log('Reset !!!')
    console.log(`All votes reset`);
}

function getAllVotes(arr) {
        console.log(`*Last results* -> `,this.arr);
        console.log(`\n`);
}

//---------------Football Player Votes-----------------//
var arr = [];
var maxVotes = 15; //Max for all subjects
var title = 'Football Player';
var footballPlayer = {
    Messi: 0, 
    Ronaldo: 0,
    Naymar: 0,
    Zlatan :0
}

var fp = new votes(title, footballPlayer, arr, maxVotes);
fp.on('resetAllVotes', reset);
fp.on('getAllVotes', getAllVotes);
fp.on(eventsConfig.ADD, function(data, numOfVote){

        console.log(`| ${data} | -> Vote number: ${numOfVote}`);    
});

fp.addVote("Messi");
fp.addVote("Messi");
fp.addVote("Ronaldo");
fp.addVote("Messi");
fp.addVote("Messi");
fp.addVote("Messi");
fp.addVote("Zlatan");
fp.addVote("Zlatan");
fp.addVote("Naymar");
fp.addVote("Ronaldo");
fp.addVote("Naymar");
fp.addVote("Ronaldo");
fp.addVote("Messi");
fp.addVote("Ronaldo");
fp.addVote("Messi");
fp.addVote("Zlatan");
fp.addVote("Zlatan");
fp.addVote("Zlatan");
fp.addVote("Zlatan");
fp.addVote("Naymar");
fp.addVote("Zlatan");
fp.getAll();

//---------------Basketball Player Votes-----------------//
var arr = [];
var title = 'Basketball Player';
var basketballPlayer = {
    LabronJames: 0, 
    StefKerry: 0,
    KevinDurant: 0
}

var bp = new votes(title, basketballPlayer, arr, maxVotes);

bp.on('getAllVotes', getAllVotes);
bp.on('resetAllVotes', reset)
bp.on(eventsConfig.ADD, function(data, numOfVote){

    console.log(`| ${data} | -> Vote number: ${numOfVote}`);
});

bp.addVote("LabronJames");
bp.addVote("LabronJames");
bp.addVote("KevinDurant");
bp.addVote("StefKerry");
bp.addVote("StefKerry");
bp.reset();
bp.addVote("KevinDurant");
bp.addVote("KevinDurant");
bp.addVote("StefKerry");
bp.addVote("KevinDurant");
bp.addVote("StefKerry");
bp.addVote("StefKerry");
bp.addVote("StefKerry");
bp.addVote("KevinDurant");
bp.addVote("StefKerry");
bp.addVote("StefKerry");
bp.getAll();

//---------------Prime Minister Votes-----------------//
var arr = [];
var title = 'Prime Minister';
var PrimeMinister = {
    Bibi: 0, 
    HaninZoabi: 0,
    YairLapid: 0,
    AviGabai: 0,
    OrenHazan: 0,
    MuhamadSalah: 0
}

var pm = new votes(title, PrimeMinister, arr, maxVotes);
pm.on('resetAllVotes', reset);
pm.on('getAllVotes', getAllVotes);
pm.on(eventsConfig.ADD, function(data, numOfVote){

        console.log(`| ${data} | -> Vote number: ${numOfVote}`);    
});

//pm.addVote('Bibi');
pm.addVote('HaninZoabi');
pm.addVote('YairLapid');
pm.addVote('AviGabai');
pm.addVote('OrenHazan');
pm.addVote('MuhamadSalah');
pm.addVote('MuhamadSalah');
pm.addVote('AviGabai');
pm.addVote('AviGabai');
pm.addVote('MuhamadSalah');
pm.addVote('OrenHazan');
pm.addVote('OrenHazan');
pm.addVote('MuhamadSalah');
pm.addVote('HaninZoabi');
pm.addVote('HaninZoabi');
pm.addVote('YairLapid');
pm.addVote('YairLapid');
pm.addVote('YairLapid');
pm.addVote('YairLapid');
pm.addVote('YairLapid');
pm.addVote('HaninZoabi');
pm.addVote('AviGabai');
pm.addVote('AviGabai');
pm.addVote('AviGabai');
pm.addVote('HaninZoabi');
pm.addVote('HaninZoabi');
pm.getAll();

//----------------------------------------------------//

app.get('/', function(req, res) {
    res.send(writeToBrowser);
});

http.createServer(app).listen(8080);
console.log('listening on port 8080');
    




