function keyDown(e) {
    switch(e.code) {
        case 'ArrowUp': lab.hero.up(); break;
        case 'ArrowLeft': lab.hero.left(); break;
        case 'ArrowDown': lab.hero.down(); break;
        case 'ArrowRight': lab.hero.right(); break;
    }
}
