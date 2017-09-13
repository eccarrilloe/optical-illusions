let maintenanceInterval = 0;

const config = {
  sketchWidth: 800,
  sketchHeight: 500,
  boxWidth: 50,
  boxHeight: 50,
  boxOffset: 25,

  maintenanceMode: (p) => {
    p.background(0, 0, 0);
    if (maintenanceInterval % 100 < 50) {
      p.textFont('Times');
      p.textSize(48);
      p.fill(255, 235, 59);
      p.strokeWeight(1);
      p.text('Maintenance Mode', 250, 250);
    }

    maintenanceInterval = (maintenanceInterval + 1) % 100;
  },
};

export default config;
