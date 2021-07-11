class Play{
constructor(){
    
    this.image = loadImage("backg.gif");

}

display(){

    image(this.image,0,0,100,100);

spawnLogs();

}

updateName(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
        name: this.name,
        distance: this.distance,
        place: this.place,
        
    });
}

getFinishedPlayers(){
    var finishedPlayersRef = database.ref('finishedPlayers');
    finishedPlayersRef.on("value",(data)=>{
        finishedPlayers = data.val();
    });
}

static updateFinishedPlayers(){
    database.ref('/').update({
        finishedPlayers: finishedPlayers + 1
    });
    this.place += 1;
}

static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
    });
}


spawnLogs(){
    if (frameCount%60===0){
      var log = createSprite(600,400,40,10); 
      var rand = Math.round(random(1,3)); 
      switch(rand) {
        case 1: log.addImage(l2);
                l2.scale = 0.23
                break;
        case 2: log.addImage(l3);
                break;
        case 3: log.addImage(l4);
                break;
        default: break;
      }
  
      log.scale = 0.3
      log.velocityX = -5; 
      log.lifetime = 200; 
  
      logsGroup.add(log); 
  } 
  
  
  }

