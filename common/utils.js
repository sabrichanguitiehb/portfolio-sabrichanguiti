//https://archive.p5js.org/examples/form-star.html7
/**
 * 
 * @param {number} x x-coordinate of the center of the star
 * @param {number} y y-coordinate of the center of the star
 * @param {number} radius1 inner radius of the star
 * @param {number} radius2 outer radius of the star
 * @param {number} npoints number of points the star has
 * @param {number} rotation rotation in degrees
 */
function star(x, y, radius1, radius2, npoints = 5, rotation = 0) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = radians(rotation); a < TWO_PI + radians(rotation); a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}