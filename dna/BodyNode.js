const df = {
    x: 0,
    y: 0,
    w: 16,
    h: 16,
}

const friction = 2

const sideForce = {
    x: 20,
    y: 0,
}

const jumpForce = {
    x: 0,
    y: -50,
}

class BodyNode {

    constructor(st) {
        augment(this, df)
        augment(this, st)

        this.mv = lib.v2.zero()
    }

    evo(dt) {
        // apply gravity
        this.mv = lib.v2.add(this.mv,
            lib.v2.scale(env.tune.gravityV2, dt))

        // friction
        this.mv.x = this.mv.x * max((1-friction*dt), 0)

        // move
        this.x = this.x + this.mv.x * dt
        this.y = this.y + this.mv.y * dt

        // graound bound
        if (this.y >= ry(1)-this.h/2) {
            this.y = ry(1)-this.h/2
            this.mv.y = 0
        }
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

    up() {
        this.mv = lib.v2.add(this.mv, jumpForce)
    }

    left() {
        this.mv = lib.v2.add(this.mv, lib.v2.inverse(sideForce))
    }

    down() {
    }

    right() {
        const before = lib.v2.toString(this.mv)
        this.mv = lib.v2.add(this.mv, sideForce)
        const after = lib.v2.toString(this.mv)
        log(before + ' -> ' + after)
    }
}
