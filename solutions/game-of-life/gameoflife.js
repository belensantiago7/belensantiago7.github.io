class GameOfLife {
  constructor() {
  }

  next(shape) {
		let neighbours = {};

    for(let i = 0; i < shape.length; i++) {
      let cell = shape[i];
      let key;

      key = 'c'+(cell[0]-1)+','+(cell[1]-1);
			if (neighbours[key]) {
				neighbours[key].n++;
			} else {
				neighbours[key] = {n: 1, cell: [cell[0]-1, cell[1]-1]};
			}

			key = 'c'+(cell[0])+','+(cell[1]-1);
			if (neighbours[key]) {
				neighbours[key].n++;
			} else {
				neighbours[key] = {n: 1, cell: [cell[0], cell[1]-1]};
			}

			key = 'c'+(cell[0]+1)+','+(cell[1]-1);
			if (neighbours[key]) {
				neighbours[key].n++;
			} else {
				neighbours[key] = {n: 1, cell: [cell[0]+1, cell[1]-1]};
			}

			key = 'c'+(cell[0]-1)+','+(cell[1]);
			if (neighbours[key]) {
				neighbours[key].n++;
			} else {
				neighbours[key] = {n: 1, cell: [cell[0]-1, cell[1]]};
			}

			key = 'c'+(cell[0]+1)+','+(cell[1]);
			if (neighbours[key]) {
				neighbours[key].n++;
			} else {
				neighbours[key] = {n: 1, cell: [cell[0]+1, cell[1]]};
			}

			key = 'c'+(cell[0]-1)+','+(cell[1]+1);
			if (neighbours[key]) {
				neighbours[key].n++;
			} else {
				neighbours[key] = {n: 1, cell: [cell[0]-1, cell[1]+1]};
			}

			key = 'c'+(cell[0])+','+(cell[1]+1);
			if (neighbours[key]) {
				neighbours[key].n++;
			} else {
				neighbours[key] = {n: 1, cell: [cell[0], cell[1]+1]};
			}

			key = 'c'+(cell[0]+1)+','+(cell[1]+1);
			if (neighbours[key]) {
				neighbours[key].n++;
			} else {
				neighbours[key] = {n: 1, cell: [cell[0]+1, cell[1]+1]};
			}
		}

    for(let i = 0; i < shape.length; i++) {
      let cell = shape[i];
			let key = 'c' + cell[0] + ',' + cell[1];
			if (neighbours[key]) {
				neighbours[key].populated = true;
			}
		};

		let newShape = [];
		for (let key in neighbours) {
			if ((neighbours[key].n == 2 && neighbours[key].populated) || neighbours[key].n == 3) {
				newShape.push(neighbours[key].cell);
			}
		}

		return newShape;
  }
}

class Canvas {
  constructor(container) {
    let canvasElement = document.createElement('canvas');
    this.obj = canvasElement;
    this.pixelWidth = 803;
    this.pixelHeight = 506;
    canvasElement.width = this.pixelWidth;
    canvasElement.height = this.pixelHeight;
    container.appendChild(canvasElement);
    this.ctx = canvasElement.getContext('2d');
    this.setGridSize(11);
  }

  draw(cells) {
    this.ctx.fillStyle = "#7e7e7e";
    this.ctx.lineWidth = 1;
    this.ctx.fillRect (0, 0, this.pixelWidth, this.pixelHeight);
    this.ctx.strokeStyle = "#999";

    for(let n = this.cellSize; n < this.pixelWidth; n += this.cellSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(n + 0.5, 0);
      this.ctx.lineTo(n + 0.5, this.pixelHeight);
      this.ctx.stroke();
    }
    for(let n = this.cellSize; n < this.pixelHeight; n += this.cellSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, n + 0.5);
      this.ctx.lineTo(this.pixelWidth, n + 0.5);
      this.ctx.stroke();
    }

    this.ctx.fillStyle = "yellow";
    this.ctx.lineWidth = 1;
    cells.forEach((cell, i) => {
      this.ctx.fillRect(
        cell[0] * this.cellSize + 1,
        cell[1] * this.cellSize + 1,
        this.cellSize - 1,
        this.cellSize - 1);
    });
  }

  click(fn) {
    this.obj.addEventListener('click', (evt) => {
      let rect = canvas.obj.getBoundingClientRect();
      let left = rect.left;
      let top = rect.top;
      let cellSize = canvas.cellSize;
      let clickEvent = {};
      clickEvent.cellX = Math.floor((evt.clientX - left) / cellSize);
      clickEvent.cellY = Math.floor((evt.clientY - top) / cellSize);
      fn(clickEvent);
    });
  }

  getDimension() {
  }

  getGridSize() {
  }

  setGridSize(size) {
    this.cellSize = size;
  }
}

class Shape {
  constructor(canvas) {
    this.canvas = canvas;
    this.current = [];
    this.collection = {};
  }

  get() {
    return this.current;
  }

  set(shape)  {
    this.current = shape;
  }

  copy(shape) {
  }

  redraw() {
    this.canvas.draw(this.current);
  }

  center() {
  }

  offset(dx, dy) {
  }

  toggle(cell) {
    this.current.push(cell);
    this.redraw();
  }
}

class Controls {
  constructor(canvas, shape, gameOfLife) {
    this.canvas = canvas;
    this.shape = shape;
    this.gameOfLife = gameOfLife;
    this.generation = 0;
  }

  init(shapes) {
    this.canvas.click((evt) => {
      this.shape.toggle([evt.cellX, evt.cellY]);
    });

		document.getElementById('next').addEventListener('click', () => {
			this.next();
		});
  }

  setGeneration(gen) {
  }

  animate() {
  }

  next() {
		let shapeData = this.shape.get();
		let newShapeData = this.gameOfLife.next(shapeData);
		this.shape.set(newShapeData);
		this.shape.redraw();
  }
}

let canvasElement = document.getElementById('canvas-div');
let canvas = new Canvas(canvasElement);
let shape = new Shape(canvas);
let gameOfLife = new GameOfLife();
let controls = new Controls(canvas, shape, gameOfLife);

controls.init(shape.collection);
//controls.shape.center();
controls.shape.redraw();
