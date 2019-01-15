
class Particle {
  /* Creates a particle at x, y.
     Colour is an object in the form of {h:0->360,s:0->1,v:0->1} (How dat, GUI prefers it)
     initialForceDirection is measured in radians. 0-> TWO_PI (constant in p5.js)
  */
 constructor(x, y, size, colour, initialForce, initialForceDirection, mass) {
   this.x = x;
   this.y = y;
   this.size = size; // Asethetic, doesn't effect movement.
   this.colour = colour;
   this.force = initialForce;
   this.forceDirection = initialForceDirection;
   this.mass = mass; // For gravity movement simulation.

   this.active = true; // When this is false, the particle is deleted and regenerated.
 }

 /** Runs a simple */
}