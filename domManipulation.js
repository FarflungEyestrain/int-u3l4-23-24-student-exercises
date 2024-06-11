// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
    image.src = "https://media.tenor.com/phShJyoer9QAAAAM/markiplier.gif";





});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener('click', function() {
    image.src = "https://media.tenor.com/1gR1ggdyLTAAAAAM/markiplier-markiplier-dance.gif";


});

// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener('click', function() {
    image.src = "https://static.wikia.nocookie.net/645c00ac-dbdb-482b-8058-434c8f71e2e3/scale-to-width/755";


});

// BONUS
// 7. Try using different event types for your buttons.
