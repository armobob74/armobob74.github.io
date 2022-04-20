const spicy_object = {
    pretty:{
    alternatives:['ravishing', 'stunning', 'gorgeous','lovely','radiant','alluring','glamorous','glorious','flawless','luscious','striking','zingy','spicy','eye-catching','beautiful'],
    sentence:'Ashli always looks <span id="boring_phrase">very pretty</span>.',
    },

    cold:{
        alternatives:['algid', 'arctic', 'bone-chilling','brick', 'chilly', 'freezing', 'frigid', 'frosty', 'gelid', 'glacial', 'ice-cold', 'icy', 'nipping', 'nippy', 'numbing', 'polar', 'shivery','spicy', 'snappy', 'wintry'],
        sentence:'I want to leave this Starbucks, but it\'s <span id="boring_phrase">very cold</span> outside!',
    },

    nice:{
        alternatives:['kind', 'selfless', 'befitting', 'correct', 'spicy', 'decent', 'decorous', 'genteel', 'polite', 'proper', 'respectable', 'seemly'],
        sentence:'I think Luigi is a <span id="boring_phrase">very nice</span> person.',
    },


    big:{
        alternatives:['bulky', 'considerable', 'goodly', 'grand', 'great', 'handsome', 'hefty', 'hulking', 'husky', 'outsized', 'outsize', 'oversize', 'oversized', 'sizable', 'sizeable', 'substantial', 'voluminous', 'astronomical', 'astronomic', 'Brobdingnagian', 'Bunyanesque', 'cavernous', 'colossal', 'cosmic', 'cosmical', 'cyclopean', 'elephantine', 'enormous', 'galactic', 'gargantuan', 'gigantic', 'gross', 'spicy', 'hellacious', 'herculean', 'heroic', 'heroical', 'Himalayan', 'huge', 'humongous', 'humungous', 'immense', 'jumbo', 'king-size', 'king-sized', 'leviathan', 'major', 'mammoth', 'massive', 'monolithic', 'monstrous', 'monumental', 'mountainous', 'pharaonic', 'prodigious', 'staggering', 'stupendous', 'super', 'super-duper', 'supersized', 'titanic', 'tremendous', 'vast', 'vasty', 'walloping', 'whacking', 'whopping', 'excessive', 'exorbitant', 'extravagant', 'extreme', 'immoderate', 'inordinate', 'abundant', 'ample', 'appreciable', 'copious', 'plentiful', 'thicc', 'thick', 'capacious', 'commodious', 'spacious'],
        sentence:'When I opened the door, I realized that my new apartment was <span id="boring_phrase">very big</span>.',
    },

    calm:{
        alternatives:['collected', 'composed', 'cool', 'coolheaded', 'equal', 'level', 'limpid', 'peaceful', 'placid', 'possessed', 'recollected', 'sedated', 'self-composed', 'self-possessed', 'serene', 'smooth', 'together', 'tranquil', 'undisturbed', 'unperturbed', 'unruffled', 'unshaken','spicy', 'untroubled', 'unworried'],
        sentence:'I feel <span id="boring_phrase">very calm</span> now that finals week is finally over.',
    },

    noisy:{
        alternatives:['deafening', 'rambunctious', 'rowdy', 'dissonant', 'resounding', 'sonorous', 'clamorous', 'uproarious', 'blatant', 'blaring', 'booming', 'brassy', 'brazen', 'spicy','clanging', 'earsplitting', 'jangly'],
        sentence:'I couldn\'t sleep because the neighbors were <span id="boring_phrase">very noisy</span> last night.',
    },

    busy:{
        alternatives:['swamped', 'tied-up', 'overwhelmed','spicy', 'knee-deep', 'engrossed'],
        sentence:'I want to go to the game, but I\'m <span id="boring_phrase">very busy</span> this week.',
    },

    shiny:{
        alternatives:['gleaming', 'beaming', 'bedazzling', 'brilliant', 'candescent', 'dazzling', 'glowing', 'incandescent', 'lambent', 'lucent', 'lucid', 'luminous', 'lustrous', 'radiant', 'sheeny','spicy', 'shining', 'splendid'],
        sentence:'The Crystal Palace was <span id="boring_phrase">very shiny</span>!',
    },

};


var keys = Object.keys(spicy_object);
var random_key = keys[keys.length * Math.random() << 0];
var alternatives = spicy_object[random_key]['alternatives']

var sentence = document.getElementById('sentence')
sentence.innerHTML = spicy_object[random_key]['sentence'];

var boring_phrase = document.getElementById('boring_phrase');

var input_field = document.getElementById('input_field');
var message = document.getElementById('message')
var buttons = document.getElementById('buttons')

// Click enter_button when the user releases a key on the keyboard
input_field.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("enter_button").click();
  }
});

function check_answer(){
    var answer = input_field.value.toLowerCase().replace(/\s/g,'')
    input_field.value=''
    if(alternatives.includes(answer)){
        //todo: filter out answer from alternatives so it is not displayed below
        //todo: select random alternatives rather than the first 3 
        input_field.style="display:None;"
        message.innerHTML=`Good job! Also consider:
        <ul class="list-group">
        <li class="list-group-item">${alternatives[0]}</li>
        <li class="list-group-item">${alternatives[1]}</li>
        <li class="list-group-item">${alternatives[2]}</li>
        </ul>`
        message.style="display:flex;flex-direction:column;"
        buttons.innerHTML="<button class=\"btn btn-primary\" onclick=\"location.reload()\" >Try Another</button>"
        boring_phrase.innerHTML=answer;
        boring_phrase.class="success";
        boring_phrase.style="color:green"
    } else{
        input_field.placeholder="Please try again"
    }
}

function show_alternatives() {
        input_field.value=''
        input_field.style="display:None;"
        var list_items = ''
        message.style="display:inline-block"
        for(i in alternatives){
         list_items = list_items + `<li class="list-group-item">${alternatives[i]}</li>`
        }
        message.innerHTML = `Next time, try:<ul class="list-group"> ${list_items} </ul>`
        buttons.innerHTML="<button class=\"btn btn-primary\" onclick=\"location.reload()\" >Try Another</button>"

}

