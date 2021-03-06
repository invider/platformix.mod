const testable = {

    testPoint: function(x, y) {
        if (x < this.x || y < this.y) return false

        const tx = floor((x - this.x)/this.step)
        const ty = floor((y - this.y)/this.step)
        if (tx >= this.tw || ty >= this.th) return false

        return this.map[ty * this.tw + tx] >= 0
    },

    testRect: function(t) {
        return (
            this.testPoint(t.x, t.y)
            || this.testPoint(t.x + t.w, t.y)
            || this.testPoint(t.x, t.y + t.h)
            || this.testPoint(t.x + t.w, t.y + t.h)
        )
    },
}
