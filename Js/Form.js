class Form{
    constructor(){
    this.input=createInput("name");
    this.Button=createButton("play");
    this.Greeting=createElement('h2');
    }
    hide(){
        this.Greeting.hide();
        this.input.hide();
        this.Button.hide();

    }
    display(){
        var title=createElement('h1');
        title.html("CAR RACING GAME");
        title.position(displayWidth/2-50,0);
       // this.input=createInput("Name");
        this.Button=createButton("PLAY");
        //var Greeting=createElement('h2');
        //Greeting.html("hello")
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.Button.position(displayWidth/2+30,displayHeight/2);

        this.Button.mousePressed(()=>{
         this.input.hide();
         this.Button.hide();
         player.name =this.input.value();
         playerCount+=1;
         player.index=playerCount
         player.update();
         player.updateCount(playerCount);
         //this.Greeting=createElement('h3');
         this.Greeting.html("Hello"+name);
         this.Greeting.position(displayWidth/2-70,displayHeight/4);
        })
    }
    
}