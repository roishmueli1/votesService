var events = require('events');
    eventsConfig = require('./config');

module.exports = writeToBrowser = Array(); 
module.exports = class Votes extends events.EventEmitter{
    constructor(title, data, arr,maxVotes) {
        super();
        this.arr = data;
        this.title = title;
        this.data = data;
        this.maxVotes = maxVotes;
        this.counter = 0;
        console.log(`Votes subject: ${this.title}`);
        console.log(`Max votes: ${maxVotes}`);
        writeToBrowser.push(`Subject: ${this.title}:`);
        writeToBrowser.push(`Max votes: ${this.maxVotes}:`);
    }
    addVote(data) {
        if(this.counter < this.maxVotes){
            var numOfVote = ++this.arr[data]; 
            this.counter++;
        writeToBrowser.push(`${data} ${numOfVote}`);
        this.emit(eventsConfig.ADD, data, numOfVote);
        }
    }
    reset() {
        for (var data in this.arr){
            var zeroVote = this.arr[data] = 0;
            //console.log(`${data}: ${zeroVote}`);
        writeToBrowser.push(`Reset Votes!!! ${data}: ${zeroVote}`)
        }
        this.emit('resetAllVotes');
    }

    getAll(){
        writeToBrowser.push(`*Last results* ${this.title}:`, this.arr);
        this.emit('getAllVotes', this.arr)
    }
}

    
