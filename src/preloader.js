class Preloader extends Phaser.State {

  constructor() {
    super();
    this.asset = null;
    this.ready = false;
  }

  preload() {
    //Cargando...
    this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
    this.game.add.text(100, 100, 'Cargando Warriors Z...', { font: '48px saiyan', fill: 'red' });
    this.load.setPreloadSprite(this.asset);
    this.ready = true;

    //Carga componentes de background
    this.game.load.image('menu_bg', 'assets/background/menu_bg.png');
    this.game.load.image('game_title', 'assets/background/game_title.png');
    this.game.load.image('options_bg', 'assets/background/options_bg.jpg');
    this.game.load.image('controls_bg', 'assets/background/controls_bg.png');
    this.game.load.image('credits_bg', 'assets/background/credits_bg.jpg');
    this.game.load.image('how_to_play_bg', 'assets/background/how_to_play_bg.png');
    this.game.load.image('namek_bg', 'assets/background/namek_bg_640.png');
    this.game.load.image('namek_2_bg', 'assets/background/namek_2_bg_640.png');
    this.game.load.image('namek_3_bg', 'assets/background/namek_3_bg_640.png');
    this.game.load.image('namek_4_bg', 'assets/background/namek_4_bg_640.png');
    this.game.load.image('namek_bg_level', 'assets/background/namek_bg_level.png');

    //Carga componentes de opciones


    //Carga componentes de video
    this.game.load.video('opening', 'assets/video/opening640_final.mp4');
    this.game.load.video('level_opening', 'assets/video/level_opening640_final.mp4');

    //Carga componentes de botones
    this.game.load.spritesheet('buttonJumbo', 'assets/buttons/buttonJumbo.png', 170, 100);
    this.game.load.spritesheet('button', 'assets/buttons/button.png', 95, 56);
    this.game.load.image('play_button', 'assets/buttons/play_title.png');
    this.game.load.image('options_button', 'assets/buttons/options_title.png');

    //Carga componentes de personajes
    this.game.load.spritesheet('goku', 'assets/characters/goku.png', 160, 160);

    //Carga componentes de audio
    this.game.load.audio('menu_song', 'assets/audio/menu_song.ogg');
    this.game.load.audio('options_song', 'assets/audio/options_song.ogg');
    this.game.load.audio('credits_song', 'assets/audio/credits_song.ogg');
    this.game.load.audio('how_to_play_song', 'assets/audio/how_to_play_song.ogg');
    this.game.load.audio('level_song', 'assets/audio/level_song.ogg');
    this.game.load.audio('mid_boss_battle_song', 'assets/audio/mid_boss_battle_song.ogg');
    this.game.load.audio('boss_battle_song', 'assets/audio/boss_battle_song.ogg');
    this.game.load.audio('complete_level_song', 'assets/audio/complete_level_song.ogg');


  }

  loadResources() {

  }


  create() {

  }

  update() {
    this.game.state.start('intro');
  }

  onLoadComplete() {

  }
}

export default Preloader;
