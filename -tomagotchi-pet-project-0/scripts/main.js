// ==== Variables ==== //

const $age = $('#age')
const $penguinBox = $('#penguin-box')
const $hunger = $('#hunger');
const $sleepiness = $('#sleepiness');
const $boredom = $('#boredom');
const $sickness = $('#sickness');
const $cleanliness = $('#cleanliness');
const $wellbeing = $('#wellbeing');
const $misbehaving = $('#misbehaving');
const $chipi = $('#chipi');

const $feed = $('#feed')
const $putToBed = $('#put-to-bed')
const $play = $('#play')
const $giveMedicine = $('#give-medicine')
const $cleanUp = $('#clean-up')
const $cheerUp = $('#cheer-up')
const $scold = $('#scold')
const $payAttention = $('#pay-attention')

// ==== Penguin Class ==== //

class Penguin {
    constructor(dead = false, age = 1, hunger = 1, sleepiness = 1, boredom = 1, sickness = false, cleanliness = true, wellbeing = 10, misbehaving = false, chipi = false) {
        this.dead = dead;
        this.age = age;
        this.hunger = hunger; 
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.sickness = sickness;
        this.cleanliness = cleanliness;
        this.wellbeing = wellbeing;
        this.misbehaving = misbehaving;
        this.chipi = chipi;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    // deadCheck() {
    //     if (user.hunger === 10 || user.sleepiness === 10|| user.boredom === 10 || user.wellbeing === 1) {
    //         $age.empty();
    //         $age.append(`${user.name} died too young...`)
    //         $penguinBox.empty();
    //         $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
    //         return;
    //     } else {
    //         continue;
    //     }
    // }
    growUp() {
        if (user.hunger === 10 || user.sleepiness === 10|| user.boredom === 10 || user.wellbeing === 1) {
            $age.empty();
            $age.append(`${user.name} died too young...`)
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            return;
        }
        this.age += 1;
        if (this.age < 31) { // average life span of 
            setTimeout(this.growUp.bind(this), 1000);
            $age.empty();
            $age.append(`${user.name} is ${user.age} years old`);  
            if (this.age > 15) {
                $penguinBox.empty();
                $penguinBox.append(`<i id="linux-penguin" class="fab fa-linux fa-6x"></i>`);
            } else if (this.age > 10) {
                $penguinBox.empty();
            $penguinBox.append(`<i id="linux-penguin" class="fab fa-linux fa-5x"></i>`);
            } else if (this.age > 5) {
                $penguinBox.empty();
                $penguinBox.append(`<i id="linux-penguin" class="fab fa-linux fa-4x"></i>`);
            } else {
                $penguinBox.empty();
                $penguinBox.append(`<i id="linux-penguin" class="fab fa-linux fa-2x"></i>`);
            }
        } else {
            $age.empty();
            $penguinBox.empty();
            $penguinBox.append(`<i class="far fa-laugh-beam fa-5x"></i>`)
            $age.append(`${user.name} left this world happy! Great job!`)
            return;
        }
    }
    
    hungry() {
        if (user.hunger === 10 || user.sleepiness === 10|| user.boredom === 10 || user.wellbeing === 1) {
            $age.empty();
            $age.append(`${user.name} died too young...`)
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            return;
        }
        this.hunger += 1;
        if (this.hunger <= 10) {
            setTimeout(this.hungry.bind(this), 700);
            // console.log(`Still going strong with ${this.hunger} hunger points`)
            $hunger.empty();
            $hunger.append(`
                <p class="icon-int">${user.hunger}<p>
                `)  
        } else {
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            return;
        }
    }
    tired() {
        if (user.hunger === 10 || user.sleepiness === 10|| user.boredom === 10 || user.wellbeing === 1) {
            $age.empty();
            $age.append(`${user.name} died too young...`)
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            return;
        }
        this.sleepiness += 1;
        if (this.sleepiness <= 10) {
            setTimeout(this.tired.bind(this), 5000);
            // console.log(`Still going strong with ${this.sleepiness} sleepiness points`)
            $sleepiness.empty();
            $sleepiness.append(`
                <p class="icon-int">${user.sleepiness}<p>
                `)
        } else {
                $penguinBox.empty();
                $penguinBox.append(`<i class="fas fa-igloo"></i fa-6x>`)
                return;
        }
    }
    bored() {
        if (user.hunger === 10 || user.sleepiness === 10|| user.boredom === 10 || user.wellbeing === 1) {
            $age.empty();
            $age.append(`${user.name} died too young...`)
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            return;
        }
        this.boredom += 1;
        if (this.boredom <= 10) {
            setTimeout(this.bored.bind(this), 5000);
            // console.log(`Still going strong with ${this.boredom} bordem points`)
            $boredom.empty();
            $boredom.append(`
                <p class="icon-int">${user.boredom}<p>
                `)
        } else {
                $penguinBox.empty();
                $penguinBox.append(`<i class="fas fa-igloo"></i fa-6x>`)
                return;
        }
    }
    isSick() {
        if (user.hunger === 10 || user.sleepiness === 10|| user.boredom === 10 || user.wellbeing === 1) {
            $age.empty();
            $age.append(`${user.name} died too young...`)
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            return;
        }
        this.sickness = true;
        this.hunger += 1;
        if (this.sickness === true && this.hunger <= 10) {
            setTimeout(this.isSick.bind(this), 2000);
            // console.log(`Still going strong with ${this.hunger} hunger points`)
            $sickness.empty();
            $sickness.append(`<i class="fas fa-skull-crossbones fa"></i>`);
            $hunger.empty();
            $hunger.append(`${user.hunger}`)
        }
    }
    pooed() {
        if (user.hunger === 10 || user.sleepiness === 10|| user.boredom === 10 || user.wellbeing === 1) {
            $age.empty();
            $age.append(`${user.name} died too young...`)
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            return;
        }
        this.cleanliness = false;
        this.sleepiness += 1;
        if (this.cleanliness === false && this.sleepiness <= 10) {
            setTimeout(this.pooed.bind(this), 2000);
            // console.log(`Still going strong with ${this.sleepiness} sleepiness points`)
            $cleanliness.empty();
            $cleanliness.append(`<i class="fas fa-poo fa"></i>`);
            $sleepiness.empty();
            $sleepiness.append(`${user.sleepiness}`)
        }
    }
    cleanUp() {
        this.cleanliness = true;
    }
    depressed() {
        if (user.hunger === 10 || user.sleepiness === 10|| user.boredom === 10 || user.wellbeing === 1) {
            $age.empty();
            $age.append(`${user.name} died too young...`)
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            return;
        }
        this.wellbeing -= 1;
        if(this.wellbeing >= 1) {
            setTimeout(this.depressed.bind(this), 5000);
            // console.log(`Still going strong with ${this.wellbeing} wellbeing points`)
            $wellbeing.empty();
            $wellbeing.append(`
                <p class="icon-int">${user.wellbeing}<p>
                `)
        } // else {
        //     $penguinBox.empty();
        //     $penguinBox.append(`<i class="fas fa-igloo"></i fa-6x>`)
        // }
    }
    cheerUp() {
        this.wellbeing -= 1;
    }
    actingOut() {
        if (user.hunger === 10 || user.sleepiness === 10|| user.boredom === 10 || user.wellbeing === 1) {
            $age.empty();
            $age.append(`${user.name} died too young...`)
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            return;
        }
        this.misbehaving = true;
        this.wellbeing -= 1;
        if ( this.misbehaving === true && this.wellbeing >= 1) {
            setTimeout(this.actingOut.bind(this), 2000);
            // console.log(`Still going strong with ${this.wellbeing} wellbeing points`)
            $misbehaving.empty();
            $misbehaving.append(`<i class="far fa-tired fa"></i>`)
            $wellbeing.empty();
            $wellbeing.append(`${user.wellbeing}`);
        }
    }
    scold() {
        this.misbehaving = false;
    }
    feelsNeglected() {
        if (user.hunger === 10 || user.sleepiness === 10|| user.boredom === 10 || user.wellbeing === 1) {
            $age.empty();
            $age.append(`${user.name} died too young...`)
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            return;
        }
        this.chipi = true;
        this.boredom += 1;
        if (this.chipi === true && this.boredom < 10) {
            setTimeout(this.feelsNeglected.bind(this), 2000);
            // console.log(`Still going strong with ${this.boredom} bordem points`)
            $chipi.empty();
            $chipi.append(`<i class="far fa-sad-cry"></i>`)
            $boredom.empty();
            $boredom.append(`${user.boredom}`)
        }
    }
    payAttention() {
        this.chipi = false;
    }
    curveBalls() {
        if (user.hunger === 10 || user.sleepiness === 10|| user.boredom === 10 || user.wellbeing === 1) {
            $age.empty();
            $age.append(`${user.name} died too young...`)
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            return;
        }
        let selectorInt = Math.floor(Math.random() * (6 - 1) + 1);
        switch (selectorInt) {
            case 1:
                console.log("case 1...");
                break;
            case 2:
                this.isSick();
                console.log("isSick...");
                break;
            case 3:
                this.pooed();
                console.log("pooed...");
                break;
            case 4:
                this.actingOut();
                console.log("actingOut...");
                break;
            case 5:
                this.feelsNeglected();
                console.log("feelsNeglected...");
                break;
            default:
                console.log("You got lucky...");
                break;
        }
    }
    game() {
        if (user.hunger === 10 || user.sleepiness === 10|| user.boredom === 10 || user.wellbeing === 1) {
            $age.empty();
            $age.append(`${user.name} died too young...`)
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            return;
        }
        this.hungry();
        this.tired();
        this.bored();
        this.depressed();
        this.growUp();
        this.curveBalls();
    }
}

// ==== Name penguin ==== //
let user = new Penguin()

var penName = document.getElementById("penguin-name"); 
const $submitName = $('#submit-name')
$submitName.on('click', () => {
    
});

// console.log(user)
console.log(user.getName());
console.log(penName);

// ==== Game Play ==== //

user.game();

// ==== Event Listeners ==== //

$feed.on('click', () => {
    // console.log(user.hunger);
    if (user.hunger > 1) {
    user.hunger -= 1;
    $hunger.empty();
    $hunger.append(user.hunger);
    }
});

$putToBed.on('click', () => {
    // console.log(user.hunger);
    if (user.sleepiness > 1) {
        user.sleepiness -= 1;
        $sleepiness.empty();
        $sleepiness.append(user.sleepiness);
    }
});

$play.on('click', () => {
    // console.log(user.hunger);
    if (user.boredom > 1) {
        user.boredom -= 1;
        $boredom.empty();
        $boredom.append(user.boredom);
    }
});

$cheerUp.on('click', () => {
    // console.log(user.hunger);
    if (user.wellbeing < 10) {
        user.wellbeing += 1;
        $wellbeing.empty();
        $wellbeing.append(user.wellbeing);
    }
});

$giveMedicine.on('click', () => {
    // console.log('test')
    if (user.sickness === true) {
        user.sickness = false;
    }
});

$cleanUp.on('click', () => {
    // console.log('test poop')
});

$scold.on('click', () => {
    // console.log('test scold')
});

$payAttention.on('click', () => {
    // console.log('test attention')
});