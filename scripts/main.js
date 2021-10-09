// ==== Starting Settings ==== //

$("#screen").hide()
$("#player-controls").hide()
$("#play-again").hide()
$('#game-reset-instructions').hide()

// ==== Variables ==== //

const $btn = $("#btn-start");
const $playAgain = $('#play-again')
const $gameResetInstructions = $('#game-reset-instructions')

const $hunger = $('#hunger');
const $sleepiness = $('#sleepiness');
const $boredom = $('#boredom');
const $wellbeing = $('#wellbeing');

let $age = $('#age')
let $penguinBox = $('#penguin-box')

const $btnAction = $('.btn-action')

const $feed = $('#feed')
const $putToBed = $('#put-to-bed')
const $play = $('#play')
const $cheerUp = $('#cheer-up')
// const $giveMedicine = $('#give-medicine')
// const $cleanUp = $('#clean-up')
// const $scold = $('#scold')
// const $payAttention = $('#pay-attention')


// ==== Penguin Class ==== // 

class Penguin {
    constructor(name) {
        this.name = name;
        this.dead = false;
        this.age = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.wellbeing = 10;
        // this.sickness = false;
        // this.cleanliness = true;
        // this.misbehaving = false;
        // this.chipi = false;
        this.updateMetrics = null;
    }
    setName(name) {
        this.name = name;
    }
    handleMetrics = () => {
        const icons = [
            `<i id="linux-penguin" class="fab fa-linux fa-8x"></i>`, 
            `<i id="linux-penguin" class="fab fa-linux fa-6x"></i>`,
            `<i id="linux-penguin" class="fab fa-linux fa-4x"></i>`, 
            `<i id="linux-penguin" class="fab fa-linux fa-2x"></i>`,
            `<i class="far fa-laugh-beam fa-5x"></i>`
        ];
        const end = () => {
            $btnAction.hide()
            $playAgain.show()
        }
        const gameOver = () =>{
            $age.text(`Oh no! ${user.name} died at age: ${user.age}`)
            $penguinBox.empty();
            $penguinBox.append(`<i class="fas fa-igloo fa-3x"></i fa-6x>`)
            end();
            $gameResetInstructions.show()
            $gameResetInstructions.text(`Looks like you dropped the ball... on ${user.name}. Go ahead and try again, but this time don't kill the bird.`)
            return;
        }
        const renderMetrics = (element, metric) => {
            element.text(`${metric}`)
        }
        const isThirty = () => {
            $age.text("Nice penguin skills!")
            $gameResetInstructions.text(`${user.name} left this world happy! Great job!`)
            $gameResetInstructions.show()
            $penguinBox.empty();
            $penguinBox.append(icons[4])
            end();
            return;
        }
        this.hunger += 1;
        renderMetrics($hunger, this.hunger)
        this.sleepiness += 1;
        renderMetrics($sleepiness, this.sleepiness)
        this.boredom += 1;
        renderMetrics($boredom, this.boredom)
        this.wellbeing -= 1;
        renderMetrics($wellbeing, this.wellbeing)
        
        if (this.hunger === 10 || this.boredom >= 10 || this.sleepiness >= 10 || this.wellbeing === 0 || this.age === 30) {
            this.age === 30 ? isThirty() : gameOver() 
            let disableButton =  clearInterval(this.updateMetrics) 
            return disableButton;
        }
        this.age += 1;
        renderMetrics($age, `${user.name} is ${user.age} years old`)
        if (this.age <= 30) { // average life span of 
            // $age.text(`${user.name} is ${user.age} years old`);  
            if (this.age > 15) {
                $penguinBox.empty();
                $penguinBox.append(icons[0]);
            } else if (this.age > 10) {
                $penguinBox.empty();
                $penguinBox.append(icons[1]);
            } else if (this.age > 5) {
                $penguinBox.empty();
                $penguinBox.append(icons[2]);
            } else {
                $penguinBox.empty();
                $penguinBox.append(icons[3]);
            }
        } 
    }
    incrementMetrics = () => {
        this.updateMetrics = setInterval(this.handleMetrics, 1000);
    };
};

// ==== Initialize User ==== //

let user = new Penguin();

// ==== Event Listeners === //

$btn.on('click', () => {
    $('#enter-name').remove()
    let $penName = $('#penguin-name').val();
    user.setName($penName);
    if ($penName === "") {
        $('#start-wrapper').append(`<p id="enter-name">Enter Name</p>`)
    } else {
        $("#instructions-container").hide();
        $("#player-controls").show();
        $('#start-wrapper').hide();
        $('#screen').show();
        user.incrementMetrics();
        $btn.attr('disabled', true);
    }
});

// decrement user.hunger
$feed.on('click', () => {
    if (user.hunger === 10 || user.boredom >= 10 || user.sleepiness >= 10 || user.wellbeing === 0 || user.age === 30) {
        $feed.prop('disabled', true);
    } else if (user.hunger > 1) {
    user.hunger -= 1;
    $hunger.empty();
    $hunger.append(user.hunger);
    } else {
        return;
    }
});

// decrement sleepiness
$putToBed.on('click', () => {
    if (user.hunger === 10 || user.boredom >= 10 || user.sleepiness >= 10 || user.wellbeing === 0 || user.age === 30) {
        $putToBed.prop('disabled', true);
    } else if (user.sleepiness > 1) {
        user.sleepiness -= 1;
        $sleepiness.empty();
        $sleepiness.append(user.sleepiness);
    } else {
        return;
    }
});

// decrement user.boredom
$play.on('click', () => {
    if (user.hunger === 10 || user.boredom >= 10 || user.sleepiness >= 10 || user.wellbeing === 0 || user.age === 30) {
        $play.prop('disabled', true);
    } else if (user.boredom > 1) {
        user.boredom -= 1;
        $boredom.empty();
        $boredom.append(user.boredom);
    } else {
        return;
    }
});

// increments user.wellbeing
$cheerUp.on('click', () => {
    if (user.hunger === 10 || user.boredom >= 10 || user.sleepiness >= 10 || user.wellbeing === 0 || user.age === 30) {
        $cheerUp.prop('disabled', true);
    } else if (user.wellbeing < 10) {
        user.wellbeing += 1;
        $wellbeing.empty();
        $wellbeing.append(user.wellbeing);
    } else {
        return;
    }
});

$playAgain.on('click', () => {
    location.reload();
});

// ==== Take Aways ==== //

//be open to pushing for using new tech
//be a bit more daring
//use previous labs as guides
//work with other classmates on their projects (you learn a lot)

// ==== Challenges ==== //

//staying excited about Tamagotchi
//clearInterval()
//create a function that takes parameters that can used as a callback in
//     an event listener 

// ==== Triumphs ==== //
//creating the layout in CSS (discovered I really like that part of it)
//get the game to stop when the charater dies
//refactoring some functions to cut my code in half 
//     (thanks, Adonis and Brian!)

// ==== Stretch Features ==== // 

// callback for event listeners --> increment metrics

/* const btnDec = (btn, property, field) => {
    if (user.hunger === 10 || user.boredom >= 10 || user.sleepiness >= 10 || user.wellbeing === 0 || user.age === 30) {
        btn.prop('disabled', true);
    } else if (property > 1) {
        property -= 1;
        field.empty()
        field.append(property);
        console.log(property)
    } else {
        return;
    }
} */

// callback for event listeners --> decrement metrics

/* function btnInc(btn, property, field) {
    if (user.hunger === 10 || user.boredom >= 10 || user.sleepiness >= 10 || user.wellbeing === 0 || user.age === 30) {
        btn.prop('disabled', true);
    } else if (property < 10) {
        property += 1;
        field.text(property);
    } else {
        return;
    }
} */

// attempt at implementation --> seems to be a scope issue
// exhibits abnormal behavior: decrements user.hunger, but
// only one integer at a time; setInterval resets the count
// and keeps all numbers at the same count; again, seems to
// be a scope issue

/* $feed.on( 'click', () => { btnDec($feed, user.hunger, $hunger); }); */

// I wanted to add some addition functionality to make the 
// game a bit more interesting. I thought I could add some
// boolean values that would randomly toggle between true
// and false, increaseing the rate at which certain metrics
// went up. The idea would be to use an object or an array
// to house the parameters, then randomly select one and 
// change it to TRUE. This could initiate a 'turbo interval'
// that would increment the given value until the user 
// hit the correct button to set the value back to false
// and clear the 'turbo interval'

// const stretchMetricsArr = [
//     this.sickness, 
//     this.cleanliness, 
//     this.misbehaving, 
//     this.chipi
// ];

// const stretchIcons = [
//     `<i class="fas fa-head-side-cough"></i>`,
//     `<i class="fas fa-poo"></i>`,
//     `<i class="fas fa-snowplow"></i>`,
//     `<i class="fas fa-heart-broken"></i>`
// ];

// const toggleExtra = (stretchMetrics) => {
//     stretchMetricsArr[Math.floor(Math.random() * (5))];
//     stretchMetrics ? stretchMetrics === false : stretchMetrics === true;
// }

// $giveMedicine.on('click', () => {
//     if (user.hunger === 10 || user.boredom >= 10 || user.sleepiness >= 10 || user.wellbeing === 0 || user.age === 30) {
//         $giveMedicine.prop('disabled', true);
//     } else if (user.sickness === true) {
//         user.sickness === false;
//         $giveMedicine.empty();
//         $giveMedicine.append(stretchIcons[0]);
//     } else {
//         return;
//     }
// });

// ==== Words of Wisdom ==== //

//use all resources at our desposal --> we're not 'supposed' 
//     to know anything
//use console.log() for EVERYTHING... and then comment it out
//don't start without a plan for the logic

// ==== Additional Questions ==== //

/** 
 * What are considered to be best practices deciding 
 * between putting DOM elements in the HTML or using
 * JS to manipulate the DOM?
 * 
 * How can I set up an event listener to use a callback
 * that takes parameters?
 * 
 * What are the differences between functions and 
 * arrow functions regarding specifically the 
 * 'this' keyword and scope in general? 
 */