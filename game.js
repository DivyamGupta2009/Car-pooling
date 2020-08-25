class Game{
    constructor(){
        
    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      async start(){
        if(gameState === 0){
          player = new Player();
          form = new Form()
          form.display();
        }
    }

    play(){
        form.hide();
        
        Player.getPlayerInfo();
        
          var index = 0;
    
          for(var plr in allPlayers){
            index = index + 1 ;
    
            players[index-1].x = x;
            players[index-1].y = y;
    
            if (index === player.index){
              camera.position.x = displayWidth/2;
              camera.position.y = players[index-1].y;
            
          }
    
        }
    
    }
}