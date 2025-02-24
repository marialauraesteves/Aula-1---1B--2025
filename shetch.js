function setup() {
    createCanvas(400, 400);
  }
  //Função draw significa desenhar
  function draw() {
    background(176, 224, 230);
    circle(50, 60, 100);
    circle(150, 60, 100);
    circle(250, 60, 100);
    circle(350, 60, 100);
    circle(50, 350, 100);
    circle(150, 350, 100);
    circle(250, 350, 100);
    circle(350, 350, 100);
  
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }