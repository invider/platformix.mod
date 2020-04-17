// @depends(dna/FixedMesh)

const friction = 10

const maxSlide = 20

const slide = 20

class DynamicMesh extends dna.FixedMesh {

    constructor(st) {
        super(st)

        this.mv = lib.v2.zero()
        if (this.fixed) this.evo = false
    }

    collide(dt) {
        // calculate future dimentions 
        const hfuture = lib.v2.add(this, lib.v2.scale(this.mv, dt))
        const vfuture = {
            x: this.x - this.w/2,
            y: hfuture.y - this.h/2,
        }
        hfuture.y = this.y - this.h/2
        hfuture.x -= this.w/2
        hfuture.w = vfuture.w = this.w
        hfuture.h = vfuture.h = this.h

        // determine potential set
        const ls = this.__._ls

        function overlap(e) {
            const res = (e !== this && !e.dead && e.solid)
            return res
        }

        let collision = false
        for (let i = 0; i < ls.length; i++) {
            const target = ls[i]
            if (target
                    && target !== this
                    && target.solid
                    && !target.dead) {
                if (target.testRect(hfuture)) {
                    this.mv.x = 0
                }
                if (target.testRect(vfuture)) {
                    this.mv.y = 0
                }
            }
        }
    }

    evo(dt) {
        // apply gravity
        this.mv = lib.v2.add(this.mv,
            lib.v2.scale(env.tune.gravityV2, dt))

        // horizontal friction
        if (this.mv.y < 1) {
            this.mv.x = this.mv.x * max((1-friction*dt), 0)
        }

        // move
        this.collide(dt) // cancel movement if needed
        this.x = this.x + this.mv.x * dt
        this.y = this.y + this.mv.y * dt
    }

    draw() {
        lineWidth(2)
        stroke(.2, .5, .5)
        rect(this.x - this.w/2, this.y - this.h/2, this.w, this.h)

        // movement vector
        stroke(.1, .5, .5)
        line(this.x, this.y,
            this.x + this.mv.x,
            this.y + this.mv.y)

        // center mass
        lineWidth(4)
        fill(.3, .6, .55)
        plot(this.x-2, this.y-2)
    }
}
