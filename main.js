// ==UserScript==
// @name         Username and password generator [user;pass]
// @version      1.2
// @license      MIT
// @description  When a password input is detected, it will generate a Username;Password combination and set it to clipboard
// @author       TheEmptynessProject (https://github.com/TheEmptynessProject)
// @match        *://*/*
// @grant        GM_setClipboard
// @namespace    https://github.com/TheEmptynessProject/UsernamePasswordGenerator
// ==/UserScript==
(function() {
    'use strict';
    window.setInterval(function(){
    console.log("Scanning...")
    var inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type.toLowerCase().trim() == 'password') {
            generate();
            break;
        }
    }
    }, 5000);

    let passlen = 16; //Set your desired password length
    function generate(){
        const Letters = "abcdefghijklmnopqrstuvwxyz";
        const capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const symbols = "\|!@#£€$§%&/([)]=}?'«»+*¨´`ºª~^,.:-_<>"
        const numbers = "1234567890"
        var pass = "";
        for (let i = 0; i < passlen; i++) {
            let a = Math.round(Math.random() * 3);
            let x = 0;
            switch (a) {
                case 0:
                    x = Math.round(Math.random() * Letters.length);
                    pass += Letters.charAt(x);
                    break;
                case 1:
                    x = Math.round(Math.random() * capLetters.length);
                    pass += capLetters.charAt(x);
                    break;
                case 2:
                    x = Math.round(Math.random() * symbols.length);
                    pass += symbols.charAt(x);
                    break;
                case 3:
                    x = Math.round(Math.random() * numbers.length);
                    pass += numbers.charAt(x);
                    break;
            }
        }
        var user = "";
const first = [
  'James', 'Sophia', 'Ahmed', 'Maria', 'Chen', 'Isabella', 'Muhammad', 'Emma', 'Juan', 'Aya',
  'Mateo', 'Fatima', 'Liam', 'Sophie', 'Raj', 'Mia', 'Luca', 'Sofia', 'Yuki', 'Andrei',
  'Olivia', 'Pedro', 'Amara', 'Kai', 'Leila', 'Alejandro', 'Elsa', 'Ahmed', 'Amina', 'Viktor',
  'Alice', 'Diego', 'Maya', 'Hugo', 'Sarah', 'Ivan', 'Jasmine', 'Santiago', 'Camila', 'Felix',
  'Aisha', 'Daniel', 'Nia', 'Fabio', 'Anastasia', 'Khaled', 'Luna', 'Oscar', 'Priya', 'Amir'
];
        const second = [
  'Zephyr', 'Jamboree', 'Whimsy', 'Gobsmack', 'Bumble', 'Quasar', 'Lullaby', 'Zigzag', 'Sassafras', 'Galaxy',
  'Quokka', 'Noodle', 'Bamboo', 'Pumpernickel', 'Sphinx', 'Lollipop', 'Blizzard', 'Muffin', 'Quicksilver', 'Jellybean',
  'Penguin', 'Chameleon', 'Umbrella', 'Moonbeam', 'Sasquatch', 'Jigsaw', 'Kangaroo', 'Rhubarb', 'Waffle', 'Flapdoodle',
  'Brouhaha', 'Cactus', 'Turbulence', 'Platypus', 'Tango', 'Fandango', 'Gobbledygook', 'Kaleidoscope', 'Serenity',
  'Avalanche', 'Phoenix', 'Pegasus', 'Spectre', 'Cascade', 'Veridian', 'Abyss', 'Torrent', 'Cascade', 'Mirage'
];
        user = first[Math.round(Math.random() * first.length)] + second[Math.round(Math.random() * second.length)];
        let output = user + ";" + pass
        GM_setClipboard(output);
        console.log("Set to clipboard succesfully!")
    }
})();
