class ExternalScene extends Phaser.Scene {

  constructor() {

    super('myScene');
   // this.sceneNumber = sceneNumber
  }

  preload() {
    this.load.sceneFile('ExternalScene001', '../assets/scenes/ExternalScene001.js');
  }

  create() {
    this.game.scene.switch( 'myScene','myScene2');
  }

}
