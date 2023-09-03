"use strict";

// клас - предок
class Superhero {
  constructor(name, alias, team, universe) {
    this.name = name;
    this.alias = alias;
    this.team = team;
    this.universe = universe;
  }

  // метод, який показує, що герой б'ється
  fight() {
    console.log(`${this.alias} is fighting!`);
  }

  // метод, за допомогою якого герой вітається
  speak() {
    console.log(`${this.alias} says hi!`);
  }

  // метод, який показує, що герой вилікувався
  heal() {
    console.log(`${this.alias} was healed!`);
  }

  // представлення супергероя
  introduce() {
    console.log(
      `I am ${this.name}, also known as ${this.alias} from the ${this.universe} Universe.`
    );
  }
}

class Avengers extends Superhero {
  constructor(name, alias, mission, enemies = []) {
    super(name, alias, "Avengers", "Marvel");
    this.mission = mission;
    this.enemies = enemies;
    this._headquarters = "Avengers Tower, New York";
  }

  // метод для співпраці з іншою командою
  teamUp(hero) {
    console.log(`${this.alias} is teaming up with ${hero.team}.`);
  }

  // метод для захисту Землі
  defendEarth() {
    console.log(
      `${this.alias} is defending Earth from the threats. Current mission: ${this.mission}.`
    );
  }

  // метод для виклику підкріплення
  callForBackup() {
    console.log(
      `${this.alias} is calling for backup at ${this._headquarters}.`
    );
  }

  // метод для відображення головного штабу героїв
  showHeadquarters() {
    console.log(` ${this.team}'s base is at ${this._headquarters}.`);
  }

  // метод для відображення списку ворогів
  listEnemies() {
    console.log(
      `${
        this.team
      } have a long list of villains they frequently face. Some of the most recurring include: ${this.enemies.join(
        ", "
      )}.`
    );
  }

  // метод для звіту про готовність героя
  reportStatus() {
    console.log(`${this.alias} is ready for the mission!`);
  }

  // метод для виклику команди героїв до дії
  assemble() {
    console.log(`${this.alias} is assembling with the Avengers!`);
  }
}

class IronMan extends Avengers {
  constructor(armorModel, suitColor, mission, enemies = []) {
    super("Tony Stark", "Iron Man", mission, enemies); // викликаємо конструктор батьківського класу
    this.armorModel = armorModel; // модель броні
    this.suitColor = suitColor;
    this._AIAssistant = "Jarvis"; // унікальна властивість: АІ асистент
  }

  // метод, щоб літати
  fly() {
    console.log(
      `${this.alias} is flying in his ${this.armorModel} ${this.suitColor} color.`
    );
  }

  // метод для стрільби ракетами
  shootMissiles() {
    console.log(`${this.alias} is shooting missiles.`);
  }

  // комунікація з Джарвісом
  communicateWithAI() {
    console.log(`${this.alias}: "Jarvis, report status!"`);
    console.log(`${this._AIAssistant}: "All systems are functional, sir."`);
  }
}

class Thor extends Avengers {
  constructor(weapon, mission, enemies = []) {
    super("Thor Odinson", "Thor", mission, enemies);
    this.weapon = weapon;
    this._homeRealm = "Asgard";
    this._fatherName = "Odin";
    this._isWorthy = true; // чи вартий Тор Mjolnir
  }

  // метод закликання блискавок
  summonLightning() {
    if (this._isWorthy) {
      console.log(
        `${this.alias} is summoning lightning with his ${this.weapon}.`
      );
    } else {
      console.log(
        `${this.alias} fails to summon lightning with ${this.weapon} as he is not worthy right now.`
      );
    }
  }
  // метод, щоб літати швидше
  flyFaster() {
    console.log(`${this.alias} is flying faster with ${this.weapon}.`);
  }

  // чи може Тор підняти Mjolnir
  liftWeapon() {
    if (this._isWorthy) {
      console.log(`${this.alias} can lift ${this.weapon}.`);
    } else {
      console.log(`${this.alias} cannot lift ${this.weapon} right now.`);
    }
  }

  // метод, для отримання інформації про рідний світ
  showHomeRealm() {
    console.log(`${this.alias} comes from ${this._homeRealm}.`);
  }

  // метод, для отримання інформації про батька
  showFatherName() {
    console.log(`${this.alias}'s father is ${this._fatherName}.`);
  }
}

class Rocket extends Superhero {
  constructor(gadget) {
    super("Rocket Raccoon", "Rocket", "Guardians of the Galaxy", "Marvel");
    this.gadget = gadget;
    this._species = "Genetically enhanced raccoon";
    this._profession = "Mercenary & Engineer";
  }

  // метод, для стрільби
  shoot() {
    console.log(`${this.alias} is shooting with his high-tech gun.`);
  }

  // метод, для створення нового гаджета
  engineer() {
    console.log(
      `${this.alias}, the ${this._profession} is building a high-tech gadget.`
    );
  }

  // метод для відображення інформації про вид Rocket
  showSpeciesInfo() {
    console.log(`${this.alias} is a ${this._species}.`);
  }

  // метод для відображення поточного гаджета Rocket
  showGadget() {
    console.log(`${this.alias} currently has the ${this.gadget}.`);
  }
}

class StarLord extends Superhero {
  constructor(weapon) {
    super("Peter Quill", "Star-Lord", "Guardians of the Galaxy", "Marvel");
    this.weapon = weapon;
    this._ship = "The Milano";
    this._parentage = "Half human, half celestial";
    this._motherName = "Meredith";
    this._musicPlaylist = ["Awesome Mix Vol. 1", "Awesome Mix Vol. 2"]; // унікальний плейлист
  }

  // метод, щоб танцювати під музику
  dance() {
    console.log(`${this.alias} is dancing to his ${this._musicPlaylist[0]}.`);
  }

  // метод, щоб слухати музику
  listen() {
    console.log(`${this.alias} is listening ${this._musicPlaylist[1]}.`);
  }
  // метод для отримання інформації про корабель
  showShipInfo() {
    console.log(`${this.alias} owns a ship named ${this._ship}.`);
  }
  // метод для отримання інформації про походження
  showParentageInfo() {
    console.log(`${this.alias} is ${this._parentage}.`);
  }
  // метод для отримання інформації про матір
  showMotherInfo() {
    console.log(
      `${this._motherName} was the mother of ${this.name}, also known as ${this.alias}.`
    );
  }
}

const ironMan = new IronMan(
  "Mark L",
  "Red & Gold",
  "Defend Earth from Thanos",
  ["Thanos", "Ultron"]
);
const thor = new Thor("Mjolnir", "Protect Asgard and Earth", ["Loki", "Hela"]);
const rocket = new Rocket("Plasma Grenade");
const starLord = new StarLord("Quad Blasters");

thor.fight();
rocket.speak();
ironMan.heal();
starLord.introduce();

thor.teamUp(starLord);
ironMan.defendEarth();
ironMan.callForBackup();
ironMan.showHeadquarters();
thor.listEnemies();
ironMan.reportStatus();
thor.assemble();

ironMan.fly();
ironMan.shootMissiles();
ironMan.communicateWithAI();

thor.summonLightning();
thor.flyFaster();
thor.liftWeapon();
thor.showHomeRealm();
thor.showFatherName();

rocket.shoot();
rocket.engineer();
rocket.showSpeciesInfo();
rocket.showGadget();

starLord.dance();
starLord.listen();
starLord.showShipInfo();
starLord.showParentageInfo();
starLord.showMotherInfo();
