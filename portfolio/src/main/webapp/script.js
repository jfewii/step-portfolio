// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['images/portrait.JPG', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function randomizeImage() {
  // The images directory contains 13 images, so generate a random index between
  // 1 and 13.
  const imageIndex = Math.floor(Math.random() * 5) + 1;
  const imgUrl = 'images/jason-' + imageIndex + '.jpg';

  const imgElement = document.createElement('img');
  imgElement.src = imgUrl;

  const imageContainer = document.getElementById('random-image-container');
  // Remove the previous image.
  imageContainer.innerHTML = '';
  imageContainer.appendChild(imgElement);
}

function modalbtn() {
    var button = document.getElementById("Intro");
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function modalbtn2() {
    var button = document.getElementById("Interests");
    var modal = document.getElementById("myModal2");
    modal.style.display = "block";
}

function spanbtn(){
    var span = document.getElementsByClassName("close")[0];
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function spanbtn2(){
    var span = document.getElementsByClassName("close")[0];
    var modal = document.getElementById("myModal2");
    modal.style.display = "none";
}


// window.onclick = function(event) {
//   var modal = document.getElementById("myModal");
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// window.onclick = function(event) {
//   var modal = document.getElementById("myModal2");
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }