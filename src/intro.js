class Intro extends Phaser.State {

  create() {
    this.video = this.game.add.video('opening');
    this.video.play(false);
    //  x, y, anchor x, anchor y, scale x, scale y
    this.video.addToWorld();

    this.game.add.text(330, 455, 'Pulsa en la pantalla para ir al menu', {
      fill: 'red',
      font: '22px saiyan'
    });
    this.game.input.onDown.addOnce(this.goToMenu, this);

  }

  update() {}

  goToMenu() {
    this.video.stop();
    this.video.currentTime = 0;
    this.game.state.start('menu');
  }

}

export default Intro;
