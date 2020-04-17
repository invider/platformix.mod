function setup() {
    // setup level 3
    lab.attach(_.lvl.level[3].sky)
    lab.attach(_.lvl.level[3].dirt)
    lab.attach(_.lvl.level[3].decor)

    lab.dirt.step = 32
    lab.sky.step = 32
    lab.decor.step = 32

    lab.spawn(dna.Hero, {
        name: 'hero',
        Z: 11,
        x: 300,
        y: 90,
        w: 32,
        h: 48,
    })

    lab.spawn(dna.FixedMesh, {
        name: 'block',
        Z: 11,
        x: 340,
        y: ry(1) - 16,
        w: 32,
        h: 32,
    })
}
