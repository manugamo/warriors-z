class Menu extends Phaser.State {

  create() {
    this.game.add.sprite(0, 0, 'menu_bg');
    this.music = this.game.add.audio('menu_song', 1, true);
    this.music.play();

    var centerX = this.game.world.centerX;
    var centerY = this.game.world.centerY;

    this.game.add.sprite(390, 60, 'game_title');

    this.game.add.button(450, 160, 'buttonJumbo', this.goToLevelOpening, this, 0, 1, 0);
    this.game.add.sprite(385, 95, 'play_button');

    this.game.add.button(450, 250, 'buttonJumbo', this.goToOptions, this, 0, 1, 0);
    this.game.add.sprite(380, 178, 'options_button');

  }

  update() {}

  goToLevelOpening() {
    this.music.stop();
    this.game.state.start('level_opening');
  }

  goToOptions() {
    this.music.stop();
    this.game.state.start('options');
  }

}

export default Menu;
