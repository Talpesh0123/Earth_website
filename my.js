
function applyColor(className) {
   const elements = document.querySelectorAll('.color-target');

   elements.forEach(el => {
       el.classList.remove('color', 'color1', 'color2', 'color3', 'color4', 'color5', 'color6','color7');
       el.classList.add(className);
   });

   // Save to localStorage
   localStorage.setItem('selectedColorClass', className);
}

function violet() {
   applyColor('color');
}

function font() {
   applyColor('color1');
}

function red() {
   applyColor('color2');
}

function maroon() {
   applyColor('color3');
}

function skyblue() {
   applyColor('color4');
}

function pink() {
   applyColor('color5');
}

function blue() {
   applyColor('color6');
}

function green() {
   applyColor('color7');
}

function toggleMode() {
   document.body.classList.toggle('dark-mode');
   document.body.classList.toggle('light-mode');

   // Save mode
   const isDark = document.body.classList.contains('dark-mode');
   localStorage.setItem('themeMode', isDark ? 'dark' : 'light');
}

// Restore saved color and mode on page load
window.addEventListener('DOMContentLoaded', () => {
   const savedClass = localStorage.getItem('selectedColorClass');
   const savedMode = localStorage.getItem('themeMode');

   if (savedClass) {
       applyColor(savedClass);
   }

   // if (savedMode === 'dark') {
   //     document.body.classList.add('dark-mode');
   //     document.body.classList.remove('light-mode');
   // } else {
   //     document.body.classList.add('light-mode');
   //     document.body.classList.remove('dark-mode');
   // }
});

 
// function violet(){

//    document.getElementById('change').classList.add('color');
//    document.getElementById('change1').classList.add('color');
//    document.getElementById('change2').classList.add('color');
//    document.getElementById('change3').classList.add('color');
//    document.getElementById('change4').classList.add('color');
//    document.getElementById('change5').classList.add('color');
//    document.getElementById('change6').classList.add('color');
//    document.getElementById('change7').classList.add('color');
//    document.getElementById('change8').classList.add('color');
//    document.getElementById('change9').classList.add('color');
//    document.getElementById('change10').classList.add('color');
//    document.getElementById('change11').classList.add('color');
//    document.getElementById('change12').classList.add('color');
//    document.getElementById('change13').classList.add('color');
//    document.getElementById('change14').classList.add('color');
//    document.getElementById('change15').classList.add('color');
//    document.getElementById('change16').classList.add('color');
//    document.getElementById('change17').classList.add('color');
//    document.getElementById('change18').classList.add('color');
//    document.getElementById('change19').classList.add('color');
//    document.getElementById('change20').classList.add('color');
//    document.getElementById('change21').classList.add('color');
//    document.getElementById('change22').classList.add('color');

// }

// function red(){

//    document.getElementById('change').classList.add('color2');
//    document.getElementById('change1').classList.add('color2');
//    document.getElementById('change2').classList.add('color2');
//    document.getElementById('change3').classList.add('color2');
//    document.getElementById('change4').classList.add('color2');
//    document.getElementById('change5').classList.add('color2');
//    document.getElementById('change6').classList.add('color2');
//    document.getElementById('change7').classList.add('color2');
//    document.getElementById('change8').classList.add('color2');
//    document.getElementById('change9').classList.add('color2');
//    document.getElementById('change10').classList.add('color2');
//    document.getElementById('change11').classList.add('color2');
//    document.getElementById('change12').classList.add('color2');
//    document.getElementById('change13').classList.add('color2');
//    document.getElementById('change14').classList.add('color2');
//    document.getElementById('change15').classList.add('color2');
//    document.getElementById('change16').classList.add('color2');
//    document.getElementById('change17').classList.add('color2');
//    document.getElementById('change18').classList.add('color2');
//    document.getElementById('change19').classList.add('color2');
//    document.getElementById('change20').classList.add('color2');
//    document.getElementById('change21').classList.add('color2');
//    document.getElementById('change22').classList.add('color2');


// }



// function font(){

//    document.getElementById('change').classList.add('color1');
//    document.getElementById('change1').classList.add('color1');
//    document.getElementById('change2').classList.add('color1');
//    document.getElementById('change3').classList.add('color1');
//    document.getElementById('change4').classList.add('color1');
//    document.getElementById('change5').classList.add('color1');
//    document.getElementById('change6').classList.add('color1');
//    document.getElementById('change7').classList.add('color1');
//    document.getElementById('change8').classList.add('color1');
//    document.getElementById('change9').classList.add('color1');
//    document.getElementById('change10').classList.add('color1');
//    document.getElementById('change11').classList.add('color1');
//    document.getElementById('change12').classList.add('color1');
//    document.getElementById('change13').classList.add('color1');
//    document.getElementById('change14').classList.add('color1');
//    document.getElementById('change15').classList.add('color1');
//    document.getElementById('change16').classList.add('color1');
//    document.getElementById('change17').classList.add('color1');
//    document.getElementById('change18').classList.add('color1');
//    document.getElementById('change19').classList.add('color1');
//    document.getElementById('change20').classList.add('color1');
//    document.getElementById('change21').classList.add('color1');
//    document.getElementById('change22').classList.add('color1');

// }


