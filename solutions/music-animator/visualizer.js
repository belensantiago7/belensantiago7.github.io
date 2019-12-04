const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 600;
const BACKGROUND_COLOR = "white";

class AbstractVisualizer {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.start();
  }

  renderBeatAnimation() {
    throw new Error('Please extend class and override method');
  }

  start() {
    this.drawBackground(this.canvas, {width: CANVAS_WIDTH, height: CANVAS_HEIGHT});
  }

  drawRectangle(point1, point2, point3, point4, rectangleProperties) {
    const context = this.canvas.getContext("2d");
    context.fillStyle = rectangleProperties.color;
    context.moveTo(point1.x, point1.y);
    context.beginPath();
    context.lineTo(point2.x, point2.y);
    context.lineTo(point3.x, point3.y);
    context.lineTo(point4.x, point4.y);
    context.lineTo(point1.x, point1.y);
    context.fill();
    context.strokeStyle = rectangleProperties.color;
    context.stroke();
  }

  drawSquare(point, sideLength, color) {
    const point1 = {
      x: point.x,
      y: point.y,
    }
    const point2 = {
      x: point.x + sideLength,
      y: point.y,
    };
    const point3 = {
      x: point.x + sideLength,
      y: point.y + sideLength,
    };
    const point4 = {
      x: point.x,
      y: point.y + sideLength,
    };
    this.drawRectangle(
      point1,
      point2,
      point3,
      point4,
      {color: color})
  }

  drawCircle(centerPoint, radius, color) {
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(centerPoint.x, centerPoint.y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    context.strokeStyle = color;
    context.stroke();
  }

  drawBackground(canvas, canvasDimensions, color = BACKGROUND_COLOR) {
    const context = canvas.getContext("2d");
    context.canvas.width = canvasDimensions.width;
    context.canvas.height = canvasDimensions.height;
    context.fillStyle = color;
    context.fillRect(0, 0, canvasDimensions.width, canvasDimensions.height);
  }
}

/**
 * Generates a hexadecimal random color.
 */
function generateRandomColor() {
  const color = generateRandomValue(0x0, 0xFFFFFF);
  return '#' + color.toString(16);
}

/**
 * Generates a random value between [min, max] (inclusive).
 */
function generateRandomValue(minValue = 1, maxValue = 10) {
  min = Math.ceil(minValue);
  max = Math.floor(maxValue);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomPoint() {
  return {
    x: generateRandomValue(0, CANVAS_WIDTH),
    y: generateRandomValue(0, CANVAS_HEIGHT),
  };
}
