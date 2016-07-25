class Game extends Phaser.State {

  create() {
    this.ki = 0;
    this.bg1 = this.game.add.tileSprite(0, 0, 640, 480, 'namek_bg_level');
    this.music = this.game.add.audio('level_song', 1, true);
    this.music.play();

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.input.onDown.add(this.goToMenu, this);
    this.goku = this.game.add.sprite(100, 100, 'goku', 0);
    this.goku.animations.add('default', [0]);
    this.goku.animations.add('kamehameha');
    this.goku.animations.play('default', 12, true);

    this.game.physics.enable(this.goku, Phaser.Physics.ARCADE);
    this.goku.body.collideWorldBounds = true;

    this.attackKey = Phaser.Keyboard.D; //Phaser.KeyCode.L
    this.kamehamehaTime = 0;
  }

  update() {
    if (this.game.input.keyboard.isDown(this.attackKey)) {
        this.goku.animations.play('kamehameha', 12, false);
        console.log('pulsado')
        if (this.ki >= 25 && this.game.time.now > this.kamehamehaTime) {
          console.log('onda vital')
          this.ki = this.ki -25;
          this.kamehamehaTime = this.game.time.now + 600;
        }
    }

    if (this.ki < 100) {
      this.ki++;
      console.log(this.ki)
    }
    this.bg1.tilePosition.x -= 1;
  }

  goToMenu() {
    this.music.stop();
    this.game.state.start('menu');
  }

}

export default Game;
