class Player{
    constructor(){

    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name
        });
      }

    
      
    
      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
    
}