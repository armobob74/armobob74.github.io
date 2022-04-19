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
        alternatives:['kind', 'selfless', 'befitting', 'correct', 'de rigueur','spicy', 'decent', 'decorous', 'genteel', 'polite', 'proper', 'respectable', 'seemly'],
        sentence:'I think Luigi is a <span id="boring_phrase">very nice</span> person.',
    },


    big:{
        alternatives:['bulky', 'considerable', 'goodly', 'grand', 'great', 'handsome', 'hefty', 'hulking', 'husky', 'outsized', 'outsize', 'oversize', 'oversized', 'sizable', 'sizeable', 'substantial', 'voluminous', 'astronomical', 'astronomic', 'Brobdingnagian', 'Bunyanesque', 'cavernous', 'colossal', 'cosmic', 'cosmical', 'cyclopean', 'elephantine', 'enormous', 'galactic', 'gargantuan', 'gigantic', 'gross', 'spicy', 'hellacious', 'herculean', 'heroic', 'heroical', 'Himalayan', 'huge', 'humongous', 'humungous', 'immense', 'jumbo', 'king-size', 'king-sized', 'leviathan', 'major', 'mammoth', 'massive', 'monolithic', 'monstrous', 'monumental', 'mountainous', 'pharaonic', 'prodigious', 'staggering', 'stupendous', 'super', 'super-duper', 'supersized', 'titanic', 'tremendous', 'vast', 'vasty', 'walloping', 'whacking', 'whopping', 'excessive', 'exorbitant', 'extravagant', 'extreme', 'immoderate', 'inordinate', 'abundant', 'ample', 'appreciable', 'copious', 'plentiful', 'thicc', 'thick', 'capacious', 'commodious', 'spacious'],
        sentence:'When I opened the door, I realized that my new apartment was <span id="boring_phrase">very big</span>.',
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
        input_field.style="display:None;"
        message.innerHTML="Good job!"
        message.style="display:inline-block"
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
        message.innerHTML="Next time, try:"
        message.style="display:inline-block"
        for(i in alternatives){
        console.log(alternatives[i])
        message.innerHTML = message.innerHTML + "<br>" + alternatives[i]
        }
        buttons.innerHTML="<button class=\"btn btn-primary\" onclick=\"location.reload()\" >Try Another</button>"

}

