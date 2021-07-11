class Form {
    constructor() {
      this.title = createElement("h1");
      this.input = createInput("").attribute("placeholder", "Name");
      this.button = createButton("Play");
      this.greeting = createElement("h1");
  
      this.reset = createButton("Reset");
    }
  
    hide() {
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }
  
    enter() {
      this.title.hide();
      this.input.hide();
      this.button.hide();
  
      player.name = this.input.value();
      playerCount++;
      player.index = playerCount;
      player.updateName();
      player.updateCount(playerCount);
  
      this.greeting.html("Welcome " + player.name + "!");
      this.greeting.position(
        displayWidth / 2.1 - player.name.length * (displayWidth / 110),
        125
      );
    }
    display() {
      //create the title
  
      c11 = createSprite(300, 200);
      c22 = createSprite(510, 200);
      c33 = createSprite(720, 200);
      c44 = createSprite(930, 200);
      c55 = createSprite(1140, 200);

      c11.addImage("car1", c1);
      c11.scale = 0.4;
      c22.addImage("car2", c2);
      c22.scale = 0.4;
      c33.addImage("car3", c3);
      c33.scale = 0.4;
      c44.addImage("car4", c4);
      c44.scale = 0.4;
      c55.addImage("car4", c5);
      c55.scale = 0.4;

      chs = [c11, c22, c33, c44, c55];

      this.title.html("River Run");
      this.title.position(
        displayWidth / 2.25,
        displayHeight / 2.5 - displayHeight / 8
      );
  
      this.input.position(displayWidth / 2.25, displayHeight / 2.5);
      this.button.position(
        displayWidth / 2.1,
        displayHeight / 2.5 + displayHeight / 20
      );
      this.reset.position(10, 10);
  
      //do stuff when you hit the play button
      this.button.mousePressed(() => {
        this.title.hide();
        this.input.hide();
        this.button.hide();

        play = new Play();
        play.display();
  
        play.name = this.input.value();
        playerCount++;
        play.index = playerCount;
        play.updateName();
        play.updateCount(playerCount);
  
        this.greeting.html("Welcome " + play.name + "!");
        this.greeting.position(
          displayWidth / 2.1 - play.name.length * (displayWidth / 110),
          125
        );
      });
  
      //reset time
      this.reset.mousePressed(() => {
        play.updateCount(0);
        game.updateState(0);
  
        database.ref("/").update({
          players: null,
          finishedPlayers: 0,
        });
      });
    }
  }