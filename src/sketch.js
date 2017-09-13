import config from './config';
import Illusions from './illusions';

const P5 = p5;

const sketch = (p5) => {
  const p = p5;

  let active = true;
  let current = 0;
  const illusions = new Illusions(p, config);

  /**
   * P5JS Functions
   */
  p.preload = () => {
  };

  p.setup = () => {
    const canvas = p.createCanvas(config.sketchWidth, config.sketchHeight);
    canvas.parent('sketch');

    illusions.loadResources();

    p.background(50, 50, 50);
  };

  p.draw = () => {
    if (active) {
      switch (current) {
        case 0:
          illusions.welcome();
          break;
        case 1:
          illusions.chessboardIllusion();
          break;
        case 2:
          illusions.neckerCube();
          break;
        case 3:
          illusions.grid();
          break;
        case 4:
          illusions.flashLag();
          break;
        case 5:
          illusions.motionBounce();
          break;
        // case 6:
          // illusions.lilacChaser();
        //   break;
        case 6:
          illusions.steppingFeet();
          break;
        case 7:
          illusions.blueVsGreen();
          break;
        default:
          current = 0;
      }
    } else {
      config.maintenanceMode(p);
    }
  };

  p.keyTyped = () => {
    if (p.key === ' ') {
      p.clear();
      illusions.illusionState = -1;
      current += 1;
    } else if (p.key === 'a') {
      active = !active;
    }
  };

  p.mouseClicked = () => {
    illusions.illusionState += 1;
  };
};

new P5(sketch);
