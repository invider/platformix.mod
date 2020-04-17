function setup() {
    lab.attach(_.lvl.level[3], 'level')
    
    lab.level.Z = 1
    console.dir(lab.level)
    lab.level['ground'].step = 32
    lab.level['sky'].step = 32
}
