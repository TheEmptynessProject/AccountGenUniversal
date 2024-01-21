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

    function getEmail() {
        // Generate temporary email
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1",
            onload: function(response) {
                return response.response[0];
            }
        });
    }
    function waitForEmail(email) {
        const intervalId = setInterval(function() {
            GM_xmlhttpRequest({
                method: "GET",
                url: `https://www.1secmail.com/api/v1/?action=getMessages&login=${email.substring(0, email.indexOf('@'))}&domain=${email.substring(email.indexOf('@') + 1)}`,
                onload: function(response) {
                    const ref_response = JSON.parse(response.responseText);

                    if (ref_response.length > 0) {
                        const first_msg = ref_response[0];
                        const msg_id = first_msg.id;
                        const from_msg = first_msg.from || 'Unknown Sender';
                        const subject = first_msg.subject || 'No Subject';
                        const date = first_msg.date || 'No Date';

                        const msg_details = `From: ${from_msg}\nSubject: ${subject}`;

                        GM_xmlhttpRequest({
                            method: "GET",
                            url: `https://www.1secmail.com/api/v1/?action=readMessage&login=${email.substring(0, email.indexOf('@'))}&domain=${email.substring(email.indexOf('@') + 1)}&id=${msg_id}`,
                            onload: function(bodyResponse) {
                                const msg_body_response = JSON.parse(bodyResponse.responseText);
                                const msg_body = msg_body_response.body || 'No Body';
                                alert(msg_details + "\nContent:\n" + msg_body);

                                clearInterval(intervalId);
                            }
                        });
                    } else {
                        console.log("No messages were received in your Mailbox.");
                    }
                }
            });
        }, 1000);
    }

    let passlen = 16; //Set your desired password length
    function generate(){
        let email = getEmail();
        const Letters = "abcdefghijklmnopqrstuvwxyz";
        const capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const symbols = "\|!@#£€$§%&/([)]=}?'«»+*¨´`ºª~^,.:-_<>"
        const numbers = "1234567890"
        let pass = "";
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
        let user = "";
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
        let output = email + ";" + user + ";" + pass
        GM_setClipboard(output);
        waitForEmail(email);
    }
})();
