function setup() {
    // setup level 3
    lab.attach(_.lvl.level[3], 'level')
    
    lab.level.Z = 1
    lab.level['ground'].step = 32
    lab.level['sky'].step = 32

    lab.spawn(dna.DynamicMesh, {
        name: 'hero',
        Z: 11,
        x: 300,
        y: 90,
        w: 32,
        h: 32,
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
