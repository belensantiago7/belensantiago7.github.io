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

  drawRectangle(point1, point2, point3, point4, rectangleProperties = {}) {
    const context = this.canvas.getContext("2d");
    context.lineWidth = rectangleProperties.width || 5;
    context.strokeStyle = rectangleProperties.color || '#FF00000';

    context.moveTo(point1.x, point1.y);
    context.beginPath();
    context.lineTo(point2.x, point2.y);
    context.lineTo(point3.x, point3.y);
    context.lineTo(point4.x, point4.y);
    context.lineTo(point1.x, point1.y);
    context.closePath();
    context.fill();
    context.stroke();
  }

  drawSquare(startingPoint, lineWidth, squareProperties ={}) {
    const context = this.canvas.getContext("2d");
    context.lineWidth = squareProperties.width || 5;
    context.strokeStyle = squareProperties.color || '#FF00000';

    context.beginPath();
    context.moveTo(startingPoint.x, startingPoint.y);
    context.lineTo(startingPoint.x + lineWidth, startingPoint.y);
    context.lineTo(startingPoint.x + lineWidth, startingPoint.y + lineWidth);
    context.lineTo(startingPoint.x, startingPoint.x + lineWidth);
    context.lineTo(startingPoint.x, startingPoint.y)
    context.closePath();
    context.fill();
    context.stroke();

    // TODO(week 3): Implement.
  }

  drawCircle() {
    // TODO(week 3): Implement.
    // See here for more information:
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
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
 2, 3, 4,5,2,
 */
function generateRandomValue(minValue = 1, maxValue = 10) {
  min = Math.ceil(minValue);
  max = Math.floor(maxValue);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomPoint() {
  // TODO:
  // Use generateRandomValue to create a ranom x and a random y value.
  // HINT: we can use the constants CANVAS_HEIGHT and CANVAS_WIDTH for the max
  //     x and y values.
  return {
    x: generateRandomValue(0, CANVAS_HEIGHT),
    y: generateRandomValue(0, CANVAS_WIDTH)
  };
}
