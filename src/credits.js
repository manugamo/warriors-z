class Credits extends Phaser.State {

  create() {
    this.game.add.sprite(0, 0, 'credits_bg');
    this.music = this.game.add.audio('credits_song', 1, true);
    this.music.play();

    this.game.add.button(550, 430, 'button', this.goToBack, this, 0, 1, 0);
    this.game.add.text(565, 445, 'Volver', {
      fill: 'red',
      font: '28px saiyan'
    });

    this.game.add.button(0, 430, 'button', this.goToMenu, this, 0, 1, 0);
    this.game.add.text(12, 445, 'Menu', {
      fill: 'red',
      font: '30px saiyan'
    });

  }

  update() {}

  goToBack() {
    this.music.stop();
    this.game.state.start('options');
  }

  goToMenu() {
    this.music.stop();
    this.game.state.start('menu');
  }

}

export default Credits;
