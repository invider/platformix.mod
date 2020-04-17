// @depends(dna/DynamicMesh)

class Hero extends dna.DynamicMesh {

    constructor(st) {
        super(st)
    }

    draw() {
        blocky()
        image(res.ninja.idle_0, this.x-40, this.y-60, 100, 100)
        if (this.debug) super.draw()
    }
}
