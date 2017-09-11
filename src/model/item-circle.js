
import ItemBase from './item-base';
import Point from './point';
import BoundingBox from './bounding-box'

class ItemCircle extends ItemBase {
  constructor(pt, radius) {
    super(0);
    pt = pt || new Point();
    radius = radius || 0;
    let svg = {
      type: 'circle',
      x: pt.x,
      y: pt.y,
      radius: radius
    }
    this.svg = svg;
  }

  static createFromSvg(svg) {
    let circle = new ItemCircle();
    Object.assign(circle.svg, svg);
    return circle;
  }

  clone() {
    let newCircle = new ItemCircle();
    const clone = JSON.parse(JSON.stringify(this));
    Object.assign(newCircle, clone);
    return newCircle;
  }

  createBoundingBox() {
    let circle = this.svg;
    return new BoundingBox(
      circle.x - circle.radius,
      circle.y - circle.radius,
      circle.x + circle.radius,
      circle.y + circle.radius
    );
  }

  setRadius(radius) {
    this.svg.radius = radius;
  }

  move(delta) {
    this.svg.x += delta.x;
    this.svg.y += delta.y;
  }
}

export default ItemCircle;
