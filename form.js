class Form{
    constructor(){
        this.button = createButton('Start');
        this.button.style('width','80px');
        this.button.style('height','40px');
        this.button.style('background-color','#FF9234');
        this.title = createElement('h2');
        this.input = createInput('From');
        this.input.style('background-color','#FFCD3C');
        this.input.style('height', '30px');
        this.input2 = createInput('To');
        this.input2.style('background-color','#FFCD3C');
        this.input2.style('height', '30px');
        this.input3 = createInput('Time- Hour:Minutes');
        this.input3.style('background-color','#FFCD3C');
        this.input3.style('height', '30px');
        this.button2 = createButton('Vehicle- Self driven');
        this.button2.style('width','100px');
        this.button2.style('height','50px');
        this.button2.style('background-color','#FF9234');
        this.button3 = createButton('Vehicle- Other');
        this.button3.style('width','100px');
        this.button3.style('height','50px');
        this.button3.style('background-color','#FF9234');
        this.title2 = createElement('h2');
        this.input4 = createInput('Assembly point');
        this.input4.style('background-color','#FFCD3C');
        this.input4.style('height', '30px');
        this.input5 = createInput('Number of passengers required');
        this.input5.style('background-color','#FFCD3C');
        this.input5.style('width', '200px')
        this.input5.style('height', '30px');
        this.input6 = createInput('Car name');    
        this.input6.style('background-color','#FFCD3C');
        this.input6.style('height', '30px');    
        this.input7 = createInput('Car plate number');
        this.input7.style('width', '110px');
        this.input7.style('background-color','#FFCD3C');
        this.input7.style('height', '30px');
        this.input8 = createInput('Your contact number');
        this.input8.style('background-color','#FFCD3C');
        this.input8.style('height', '30px');
        this.title3 = createElement('h2');
        this.title4 = createElement('h2');
        this.button4 = createButton('OK');
        this.button4.style('height','50px');
        this.button4.style('width','80px');
        this.button4.style('background-color','#FF9234');
    }
    hide(){
       
        this.title.hide();
        this.input2.hide();
        this.input3.hide();
        this.button2.hide();
        this.button3.hide();
        this.title2.hide();
        this.input5.hide();
        this.input6.hide();
        this.input7.hide();
        this.input8.hide();
        this.button4.hide();
        this.button.hide();

      }

    display(){
    this.title.html("Hello! Welcome to the car pooling app.");
    this.title.position(displayWidth/2-130, 0);

    this.button.position(displayWidth/2, displayHeight/2);

    this.button.mousePressed(()=>{

      this.button.hide();
      this.title.hide();

      this.input.position(displayWidth/4, displayHeight/4);
      this.input2.position(displayWidth/4 + displayWidth/2, displayHeight/4);
      this.input3.position(displayWidth/2, displayHeight/2-30);
      this.button2.position(displayWidth/4, displayHeight/2);
      this.button3.position(displayWidth/4 + displayWidth/2, displayHeight/2);
      this.title2.html("Please enter all the details before choosing a vehicle");
      this.title2.position(displayWidth/2-130, displayHeight/4+displayHeight/2);
      this.input4.position(displayWidth/2, displayHeight/2);
    });

    this.button2.mousePressed(()=>{
        this.button.hide();
        this.title.hide();
        this.input.hide();
        this.input4.hide();
        this.input2.hide();
        this.input3.hide();
        this.button2.hide();
        this.button3.hide();
        this.title2.hide();

        this.input5.position(displayWidth/2, displayHeight/4);
        this.input6.position(displayWidth/4, displayHeight/2);
        this.input7.position(displayWidth/4+displayWidth/2, displayHeight/2);
        this.input8.position(displayWidth/2, displayHeight/4+displayHeight/2);
        this.button4.position(displayWidth/2, displayHeight/2);

    })

    this.button3.mousePressed(()=>{
      this.button.hide();
        this.title.hide();
        this.input.hide();
        this.input4.hide();
        this.input2.hide();
        this.input3.hide();
        this.button2.hide();
        this.button3.hide();
        this.title2.hide();

        this.title3.html('Available cars');
        this.title3.position(displayWidth/2-50, displayHeight/4-30);
        text(player.name, displayWidth/2-30, displayHeight/2);
    })

    this.button4.mousePressed(()=>{
      this.input5.hide();
      this.input6.hide();
      this.input7.hide();
      this.input8.hide();
      this.button4.hide();
     this.title4.html('Registration done!! You get to know when you get a passenger.');
     this.title4.position(displayWidth/2-180, displayHeight/2-30);
     game.update(1);
     player.name = this.input.value();
     player.update();
    })
    
    }
}