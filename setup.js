function setup() {
    // setup level 3
    lab.attach(_.lvl.level[3], 'level')
    
    lab.level.Z = 1
    lab.level['ground'].step = 32
    lab.level['sky'].step = 32

    lab.spawn(dna.BodyNode, {
        name: 'hero',
        Z: 11,
        x: 300,
        y: 90,
        w: 32,
        h: 32,
    })
}
