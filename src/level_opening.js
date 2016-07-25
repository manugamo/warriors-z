class Level_Opening extends Phaser.State {

  create() {
    this.video = this.game.add.video('level_opening');
    this.video.play(false);
    //  x, y, anchor x, anchor y, scale x, scale y
    this.video.addToWorld();

    this.game.add.text(370, 455, 'Pulsa en la pantalla para jugar', {
      fill: 'red',
      font: '22px saiyan'
    });
    this.game.input.onDown.addOnce(this.goToPlay, this);

    this.reproduciendo = true;

  }

  update() {}

  goToPlay() {
    this.video.stop();
    this.video.currentTime = 0;
    this.game.state.start('game');
  }

}

export default Level_Opening;
