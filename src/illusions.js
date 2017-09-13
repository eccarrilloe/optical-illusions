/**
* Optical Illusions
*/

export default class Illusions {

  constructor(p, config) {
    this.illusionState = 1;
    this.config = config;
    this.p = p;

    // FlashLag Variables
    this.flashLagRedBoxPosX = 0;
    this.flashLagBoxSize = 30;

    // Motion Bounce
    this.motionBouncePosition = 250;
    this.motionBounceSize = 20;
    this.beep = null;
    this.textFont = null;

    // SteppingFeet Variables
    this.steppingFeetBarWidth = 20;
    this.steppingFeetPosX = 0;
    this.steppingFeetDirection = 1;
    this.steppingFeetWidth = 80;
    this.steppingFeetHeight = 30;

    // Blue vs Green
    this.blueVsGreenBoxWidth = 500;
    this.blueVsGreenBoxHeight = 300;
    this.blueVsGreenStripeHeight = 5;
  }

  loadResources() {
    this.beep = this.p.loadSound('beep.mp3');
    this.textFont = this.p.loadFont('VulturemotorDemo.otf');
  }

  welcome() {
    this.p.background(50, 50, 50);
    this.p.textSize(70);
    this.p.fill(255, 255, 255);
    this.p.textAlign(this.p.CENTER, this.p.CENTER);
    this.p.textFont(this.textFont);
    this.p.text('Optical Illusions', this.config.sketchWidth / 2, (this.config.sketchHeight / 2) - 50);
    this.p.textSize(30);
    this.p.text('by Edward Carrillo', this.config.sketchWidth / 2, (this.config.sketchHeight / 2) + 50);
  }

  chessboardIllusion() {
    this.p.strokeWeight(1);
    this.p.stroke(50, 50, 50);
    switch (this.illusionState) {
      case 1:
        for (let i = 0; (i * this.config.boxWidth) <= this.config.sketchWidth; i += 1) {
          for (let j = 0; (j * this.config.boxHeight) <= this.config.sketchHeight; j += 1) {
            let x = i * this.config.boxWidth;
            const y = j * this.config.boxHeight;

            if (j % 2 === 1) {
              x += this.config.boxOffset;
            }

            if ((i % 2 === 1 && j % 2 === 0) || (i % 2 === 0 && j % 2 === 1)) {
              this.p.fill(0, 0, 0);
              this.p.rect(x, y, this.config.boxWidth, this.config.boxHeight);
            } else {
              this.p.fill(255, 255, 255);
              this.p.rect(x, y, this.config.boxWidth, this.config.boxHeight);
            }
          }
        }
        break;
      case 2:
        for (let i = 0; (i * this.config.boxWidth) <= this.config.sketchWidth; i += 1) {
          for (let j = 0; (j * this.config.boxHeight) <= this.config.sketchHeight; j += 1) {
            let x = i * this.config.boxWidth;
            const y = j * this.config.boxHeight;

            if (j % 2 === 1) {
              x += this.config.boxOffset;
            }

            this.p.fill(255, 255, 255);
            this.p.rect(x, y, this.config.boxWidth, this.config.boxHeight);
          }
        }
        break;
      default:
        this.illusionState = 1;
    }
  }

  neckerCube() {
    this.p.background(255, 255, 255);
    this.p.strokeWeight(15);
    this.p.strokeCap(this.p.ROUND);

    switch (this.illusionState) {
      case 0:
        this.p.stroke(0, 0, 0);

        /* First Box */
        this.p.line(300, 150, 500, 150);
        this.p.line(300, 350, 500, 350);
        this.p.line(300, 150, 300, 350);
        this.p.line(500, 150, 500, 350);

        /* Second Box */
        this.p.line(350, 100, 550, 100);
        this.p.line(350, 300, 550, 300);
        this.p.line(350, 100, 350, 300);
        this.p.line(550, 100, 550, 300);

        /* Edges */
        this.p.line(300, 150, 350, 100);
        this.p.line(500, 150, 550, 100);
        this.p.line(300, 350, 350, 300);
        this.p.line(500, 350, 550, 300);
        break;
      case 1:
        /* Fist Option */
        this.p.stroke(100, 100, 100);
        this.p.line(350, 300, 550, 300);
        this.p.line(350, 100, 350, 300);
        this.p.line(300, 350, 350, 300);

        /* First Box */
        this.p.stroke(0, 0, 0);
        this.p.line(300, 150, 500, 150);
        this.p.line(300, 350, 500, 350);
        this.p.line(300, 150, 300, 350);
        this.p.line(500, 150, 500, 350);

        /* Second Box */
        this.p.line(350, 100, 550, 100);
        this.p.line(550, 100, 550, 300);

        /* Edges */
        this.p.line(300, 150, 350, 100);
        this.p.line(500, 150, 550, 100);
        this.p.line(500, 350, 550, 300);
        break;
      case 2:
        /* Second Option */
        this.p.stroke(100, 100, 100);
        this.p.line(300, 150, 500, 150);
        this.p.line(500, 150, 550, 100);
        this.p.line(500, 150, 500, 350);

        /* First Box */
        this.p.stroke(0, 0, 0);
        this.p.line(300, 350, 500, 350);
        this.p.line(300, 150, 300, 350);
        this.p.line(550, 100, 550, 300);

        /* Second Box */
        this.p.line(350, 100, 550, 100);
        this.p.line(350, 100, 350, 300);
        this.p.line(350, 300, 550, 300);

        /* Edges */
        this.p.line(300, 150, 350, 100);
        this.p.line(300, 350, 350, 300);
        this.p.line(500, 350, 550, 300);
        break;
      default:
        this.illusionState = 0;
    }
  }

  grid() {
    switch (this.illusionState) {
      case 1:
        this.p.stroke(255, 255, 255);
        this.p.strokeWeight(10);
        this.p.fill(0, 0, 0);
        for (let i = 0; (i * this.config.boxWidth) <= this.config.sketchWidth; i += 1) {
          for (let j = 0; (j * this.config.boxHeight) <= this.config.sketchHeight; j += 1) {
            const x = i * this.config.boxWidth;
            const y = j * this.config.boxHeight;

            this.p.fill(0, 0, 0);
            this.p.rect(x, y, this.config.boxWidth, this.config.boxHeight);
          }
        }
        break;
      case 2:
        this.p.stroke(200, 200, 200);
        this.p.strokeWeight(5);
        this.p.fill(0, 0, 0);
        for (let i = 0; (i * this.config.boxWidth) <= this.config.sketchWidth; i += 1) {
          for (let j = 0; (j * this.config.boxHeight) <= this.config.sketchHeight; j += 1) {
            const x = i * this.config.boxWidth;
            const y = j * this.config.boxHeight;

            this.p.strokeWeight(5);
            this.p.fill(0, 0, 0);
            this.p.rect(x, y, this.config.boxWidth, this.config.boxHeight);
            this.p.fill(255, 255, 255);
            this.p.strokeWeight(1);
            this.p.ellipse(x, y, 10, 10);
          }
        }
        break;
      default:
        this.illusionState = 1;
    }
  }

  flashLag() {
    this.p.background(0, 0, 0);
    this.p.stroke(0);
    switch (this.illusionState) {
      case 1:
        this.p.fill(255, 0, 0);
        this.p.rect(this.flashLagRedBoxPosX, 200, this.flashLagBoxSize, this.flashLagBoxSize);
        if (this.flashLagRedBoxPosX === this.config.sketchWidth / 2) {
          this.p.fill(0, 255, 0);
          this.p.rect(this.flashLagRedBoxPosX, 250, this.flashLagBoxSize, this.flashLagBoxSize);
        }
        break;
      case 2:
        this.p.fill(255, 0, 0);
        this.p.rect(this.flashLagRedBoxPosX, 200, this.flashLagBoxSize, this.flashLagBoxSize);
        this.p.fill(0, 255, 0);
        this.p.rect(this.config.sketchWidth / 2, 250, this.flashLagBoxSize, this.flashLagBoxSize);
        break;
      default:
        this.illusionState = 1;
    }
    this.flashLagRedBoxPosX = this.flashLagRedBoxPosX + 5;
    if (this.flashLagRedBoxPosX > this.config.sketchWidth) {
      this.flashLagRedBoxPosX = 0;
    }
  }

  motionBounce() {
    this.p.background(200, 200, 200);
    this.p.fill(0, 0, 255);
    this.p.noStroke();
    this.p.ellipse(this.motionBouncePosition, this.motionBouncePosition - 150,
      this.motionBounceSize, this.motionBounceSize);
    this.p.ellipse(800 - this.motionBouncePosition, this.motionBouncePosition - 150,
      this.motionBounceSize, this.motionBounceSize);

    if (this.motionBouncePosition < 550) {
      if (this.motionBouncePosition === 400) {
        this.beep.play();
      }

      this.motionBouncePosition += 5;
    } else if (this.illusionState !== 1) {
      this.illusionState = 1;
      this.motionBouncePosition = 250;
    }
  }

  lilacChaser() {
    this.p.background(150, 150, 150);
    this.p.noFill();
    this.p.ellipse(200, 250, 50, 50);
    this.p.ellipse(400, 50, 50, 50);
    this.p.ellipse(500, 86.6, 50, 50);
    this.p.ellipse(533.2, 183.2, 50, 50);
    this.p.ellipse(600, 250, 50, 50);
    this.p.ellipse(400, 450, 50, 50);
    this.p.ellipse(400, 250, 400, 400);
  }

  steppingFeet() {
    this.p.background(255, 255, 255);
    this.p.strokeWeight(0);

    let primaryBackground;
    let secondaryBackground;
    let primaryBar;
    let secondaryBar;

    switch (this.illusionState) {
      case 1:
        primaryBackground = [0, 0, 0];
        secondaryBackground = [255, 255, 255];
        primaryBar = [255, 255, 0];
        secondaryBar = [0, 0, 255];
        break;
      case 2:
        primaryBackground = [255, 255, 255];
        secondaryBackground = [255, 255, 255];
        primaryBar = [255, 255, 0];
        secondaryBar = [0, 0, 255];
        break;
      case 3:
        primaryBackground = [50, 50, 50];
        secondaryBackground = [200, 200, 200];
        primaryBar = [0, 255, 0];
        secondaryBar = [50, 0, 0];
        break;
      case 4:
        primaryBackground = [50, 50, 50];
        secondaryBackground = [100, 100, 100];
        primaryBar = [0, 255, 0];
        secondaryBar = [50, 0, 0];
        break;
      case 5:
        primaryBackground = [0, 0, 0];
        secondaryBackground = [255, 255, 255];
        primaryBar = [255, 255, 255];
        secondaryBar = [0, 0, 0];
        break;
      case 6:
        primaryBackground = [100, 100, 100];
        secondaryBackground = [100, 100, 100];
        primaryBar = [255, 255, 255];
        secondaryBar = [0, 0, 0];
        break;
      default:
        this.illusionState = 1;
        return;
    }

    for (let i = 0; (i * this.steppingFeetBarWidth) < this.config.sketchWidth; i += 1) {
      if (i % 2 === 0) {
        this.p.fill(primaryBackground[0], primaryBackground[1], primaryBackground[2]);
      } else {
        this.p.fill(secondaryBackground[0], secondaryBackground[1], secondaryBackground[2]);
      }
      this.p.rect(i * this.steppingFeetBarWidth, 0,
                  (i * this.steppingFeetBarWidth) + this.steppingFeetBarWidth,
                  this.config.sketchWidth);
    }

    this.p.fill(primaryBar[0], primaryBar[1], primaryBar[2]);
    this.p.rect(this.steppingFeetPosX, 170, this.steppingFeetWidth, this.steppingFeetHeight);
    this.p.fill(secondaryBar[0], secondaryBar[1], secondaryBar[2]);
    this.p.rect(this.steppingFeetPosX, 330, this.steppingFeetWidth, this.steppingFeetHeight);

    this.steppingFeetPosX += this.steppingFeetDirection;

    if (this.steppingFeetDirection === 1 &&
        this.steppingFeetPosX > this.config.sketchWidth - this.steppingFeetWidth) {
      this.steppingFeetDirection = -1;
    } else if (this.steppingFeetDirection === -1 &&
        this.steppingFeetPosX < 0) {
      this.steppingFeetDirection = 1;
    }
  }

  blueVsGreen() {
    this.p.background(255, 255, 255);
    this.p.noStroke();
    this.p.fill(255, 0, 90);
    const x0 = (this.config.sketchWidth - this.blueVsGreenBoxWidth) / 2;
    const y0 = (this.config.sketchHeight - this.blueVsGreenBoxHeight) / 2;
    this.p.rect(x0, y0, this.blueVsGreenBoxWidth, this.blueVsGreenBoxHeight);

    this.p.fill(139, 195, 74);
    this.p.rect(x0, y0 + (this.blueVsGreenBoxHeight / 2),
      this.blueVsGreenBoxWidth / 2, this.blueVsGreenBoxHeight / 2);
    this.p.rect(x0 + (this.blueVsGreenBoxWidth / 2), y0,
      this.blueVsGreenBoxWidth / 2, this.blueVsGreenBoxHeight / 2);

    switch (this.illusionState) {
      case 1:
        this.p.fill(239, 127, 26);
        for (let j = 0; j * this.blueVsGreenStripeHeight < this.blueVsGreenBoxHeight; j += 1) {
          if (j % 2 === 1) {
            this.p.rect(x0, y0 + (j * this.blueVsGreenStripeHeight),
              this.blueVsGreenBoxWidth / 2, this.blueVsGreenStripeHeight);
          }
        }

        for (let j = 0; j * this.blueVsGreenStripeHeight < this.blueVsGreenBoxHeight; j += 1) {
          if (j * this.blueVsGreenStripeHeight < this.blueVsGreenBoxHeight / 2) {
            this.p.fill(255, 0, 90);
          } else {
            this.p.fill(239, 127, 26);
          }

          if ((j * this.blueVsGreenStripeHeight < this.blueVsGreenBoxHeight / 2 && j % 2 === 1) ||
            (j * this.blueVsGreenStripeHeight >= this.blueVsGreenBoxHeight / 2 && j % 2 === 0)) {
            this.p.rect(x0 + (this.blueVsGreenBoxWidth / 2), y0 + (j * this.blueVsGreenStripeHeight),
              this.blueVsGreenBoxWidth / 2, this.blueVsGreenStripeHeight);
          }
        }
        break;
      case 2:
        break;
      default:
        this.illusionState = 1;
    }
  }
}
