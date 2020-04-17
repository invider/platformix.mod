const Z = 1

const hidden = true

let level

function load() {
    if (!$.lvl.level) return
    level = $.lvl.level[2]
}

function draw() {
    if (!level) {
        load()
        return
    }

    const l0 = level.layers[0]

    let i = 0
    for (let y = 0; y < l0.gridCellsY; y++) {
        for (let x = 0; x < l0.gridCellsX; x++) {
            const tilex = l0.data[i++]

            res.tileset.dirt.draw(tilex, 20 + x*32, 20 + y*32, 32, 32)
        }
    }
}

