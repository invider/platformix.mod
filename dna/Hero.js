// @depends(dna/DynamicMesh)

const slide = 50
const maxSlide = 100

class Hero extends dna.DynamicMesh {

    constructor(st) {
        super(st)
    }

    activate(action) {
        this.action = action
    }

    deactivate(action) {
        this.action = 0
    }

    evo(dt) {
        // adjust movement
        switch(this.action) {
            case 1:
                if (this.mv.y > -1 && this.mv.y < 1) {
                    this.mv.y = -100
                }
                break

            case 2:
                this.mv.x = min(this.mv.x - slide * dt, -maxSlide)
                break
            case 4:
                this.mv.x = max(this.mv.x + slide * dt, maxSlide)
                break

        }
        super.evo(dt)
    }

    draw() {
        blocky()
        image(res.ninja.idle_0, this.x-40, this.y-60, 100, 100)
        if (this.debug) super.draw()
        super.draw()

        fill('#ffff00')
        font('24px moon')
        baseBottom()
        alignCenter()
        text('#' + this.action, this.x, this.y - this.h/2)
    }
}
