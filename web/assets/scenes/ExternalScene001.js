class ExternalScene001 extends Phaser.Scene {

  constructor() {
    super('myScene2');
  }

  preload() {
    this.load.image('face', '../assets/bw-face.png');
    this.load.image('arrow', '../assets/longarrow.png');
  }

  create() {
    this.face = this.add.image(480, 300, 'face');
    this.arrow = this.add.sprite(480, 300, 'arrow').setOrigin(0, 0.5);
  }

  update() {
    this.arrow.rotation += 0.01;
  }

}
