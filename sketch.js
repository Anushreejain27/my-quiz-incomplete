var canva;
var gameState, contestantCount, database, quiz, question, contestant;

function setup(){
  canvas = createCanvas(1460,680);
  database = firebase.database();
       
   quiz1 = new Quiz()  
   quiz1.getState()
   quiz1.start()
         
}
      
           
function draw(){
  background(255, 225, 2);
  if(contestantCount === 4){
    quiz1.update(1);
  }
  if(gameState === 1){
    clear();
    quiz1.play();
  }       
  
  

}
