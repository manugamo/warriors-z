class Options extends Phaser.State {

  create() {
    this.game.add.sprite(0, 0, 'options_bg');
    this.music = this.game.add.audio('options_song', 1, true);
    this.music.play();

    this.about_game();
    this.music_game();
    this.controls_game();

    this.game.add.button(550, 430, 'button', this.goToBack, this, 0, 1, 0);
    this.game.add.text(565, 445, 'Volver', {
      fill: 'red',
      font: '28px saiyan'
    });

    this.game.add.button(0, 430, 'button', this.goToCredits, this, 0, 1, 0);
    this.game.add.text(12, 445, 'Creditos', {
      fill: 'red',
      font: '26px saiyan'
    });

    this.game.add.button(300, 430, 'button', this.goToHowToPlay, this, 0, 1, 0);
    this.game.add.text(312, 445, 'Tutorial', {
      fill: 'red',
      font: '26px saiyan'
    });

  }

  update() {

  }

  render () {
  }

  goToBack() {
    this.music.stop();
    this.game.state.start('menu');
  }

  goToCredits() {
    this.music.stop();
    this.game.state.start('credits');
  }

  goToHowToPlay() {
    this.music.stop();
    this.game.state.start('how_to_play');
    //this.game.state.start('how_to_play');
  }

  about_game(){
    var about_game = new Phaser.Rectangle(170, 25, 430, 50);
    this.game.debug.geom(about_game, 'rgba(0,0,0,0.3)');
    this.game.add.text(15, 40, 'Acerca del juego ', {
      fill: 'red',
      font: '22px saiyan'
    });
    this.game.add.text(175, 30, 'Warriors Z es un juego del genero Shoot`em up basado en el ', {
      fill: 'black',
      font: '18px saiyan'
    });
    this.game.add.text(175, 50, 'famoso anime Dragon Ball.', {
      fill: 'black',
      font: '18px saiyan'
    });
  }

  music_game(){
    var music_game = new Phaser.Rectangle(170, 80, 430, 110);
    this.game.debug.geom(music_game, 'rgba(0,0,0,0.3)');
    this.game.add.text(15, 120, 'Musica del juego ', {
      fill: 'red',
      font: '22px saiyan'
    });
    this.game.add.button(175, 85, 'button', this.listen_menu_song, this, 0, 1, 0);
    this.game.add.text(195, 95, 'Menu', {
      fill: 'black',
      font: '28px saiyan'
    });
    this.game.add.button(340, 85, 'button', this.listen_options_song, this, 0, 1, 0);
    this.game.add.text(355, 100, 'Opciones', {
      fill: 'black',
      font: '24px saiyan'
    });
    this.game.add.button(505, 85, 'button', this.listen_credits_song, this, 0, 1, 0);
    this.game.add.text(515, 95, 'Creditos', {
      fill: 'black',
      font: '28px saiyan'
    });
    this.game.add.button(175, 130, 'button', this.listen_level_song, this, 0, 1, 0);
    this.game.add.text(195, 140, 'Nivel', {
      fill: 'black',
      font: '28px saiyan'
    });
    this.game.add.button(340, 130, 'button', this.listen_boss_battle_song, this, 0, 1, 0);
    this.game.add.text(355, 145, 'Batalla', {
      fill: 'black',
      font: '24px saiyan'
    });
    this.game.add.button(505, 130, 'button', this.listen_complete_level_song, this, 0, 1, 0);
    this.game.add.text(515, 145, 'Completo', {
      fill: 'black',
      font: '24px saiyan'
    });
  }

  controls_game(){
    var controls_game = new Phaser.Rectangle(170, 200, 430, 200);
    this.game.debug.geom(controls_game, 'rgba(0,0,0,0.3)');
    this.game.add.text(15, 290, 'Controles del juego ', {
      fill: 'red',
      font: '20px saiyan'
    });
    this.game.add.sprite(170, 200, 'controls_bg');
  }

  listen_menu_song() {
    this.music.stop();
    this.music = this.game.add.audio('menu_song', 1, true);
    this.music.play();
  }
  listen_options_song() {
    this.music.stop();
    this.music = this.game.add.audio('options_song', 1, true);
    this.music.play();
  }
  listen_credits_song() {
    this.music.stop();
    this.music = this.game.add.audio('credits_song', 1, true);
    this.music.play();
  }
  listen_level_song() {
    this.music.stop();
    this.music = this.game.add.audio('level_song', 1, true);
    this.music.play();
  }
  listen_boss_battle_song() {
    this.music.stop();
    this.music = this.game.add.audio('boss_battle_song', 1, true);
    this.music.play();
  }
  listen_complete_level_song() {
    this.music.stop();
    this.music = this.game.add.audio('complete_level_song', 1, true);
    this.music.play();
  }

}

export default Options;
