const spicy_object = {
    pretty:{
    alternatives:['ravishing', 'stunning', 'gorgeous','lovely','radiant','alluring','glamorous','glorious','flawless','luscious','striking','zingy'],
    boring_synonyms:['beautiful','eye-catching'],
    sentence:'Ashli always looks <span id="boring_phrase">very pretty</span>.',
    },

    cold:{
        alternatives:['algid', 'arctic', 'bone-chilling','brick','freezing', 'frigid', 'frosty', 'gelid', 'glacial', 'ice-cold', 'icy', 'nipping', 'nippy', 'numbing', 'polar', 'shivery', 'snappy', 'wintry'],
    boring_synonyms:['chilly'],
        sentence:'I want to leave this Starbucks, but it\'s <span id="boring_phrase">very cold</span> outside!',
    },

    nice:{
        alternatives:['kind', 'selfless', 'befitting', 'correct','decent', 'decorous', 'genteel', 'polite', 'proper', 'respectable', 'seemly'],
    boring_synonyms:[],
        sentence:'I think Luigi is a <span id="boring_phrase">very nice</span> person.',
    },


    big:{
        alternatives:['grand', 'great',  'hefty', 'hulking', 'husky', 'outsized', 'outsize', 'oversize', 'oversized', 'substantial', 'voluminous', 'astronomical', 'astronomic', 'Brobdingnagian', 'Bunyanesque', 'cavernous', 'colossal', 'cosmic', 'cosmical', 'cyclopean', 'elephantine', 'enormous', 'galactic', 'gargantuan', 'gigantic','hellacious', 'herculean', 'heroic', 'heroical', 'Himalayan', 'huge', 'humongous', 'humungous', 'immense', 'jumbo', 'king-size', 'king-sized', 'leviathan', 'major', 'mammoth', 'massive', 'monolithic', 'monstrous', 'monumental', 'mountainous', 'pharaonic', 'prodigious', 'staggering', 'stupendous', 'super', 'super-duper', 'supersized', 'titanic', 'tremendous', 'vast', 'vasty', 'walloping', 'whacking', 'whopping', 'exorbitant', 'extravagant', 'inordinate', 'abundant', 'ample',   'thicc', 'thick', 'capacious', 'commodious'],
    boring_synonyms:['bulky','considerable','goodly','handsome', 'sizable', 'sizeable','gross', 'excessive', 'immoderate', 'copious','appreciable','plentiful', 'spacious'],
        sentence:'When I opened the door, I realized that my new apartment was <span id="boring_phrase">very big</span>.',
    },

    calm:{
        alternatives:['collected', 'composed', 'cool', 'coolheaded', 'equal', 'level',  'peaceful', 'placid', 'possessed', 'recollected', 'sedated', 'self-composed', 'self-possessed', 'serene',  'together', 'tranquil', 'undisturbed', 'unperturbed', 'unruffled', 'unshaken', 'untroubled', 'unworried'],
    boring_synonyms:['limpid','smooth','relaxed'],
        sentence:'I feel <span id="boring_phrase">very calm</span> now that finals week is finally over.',
    },

    noisy:{
        alternatives:['deafening', 'rambunctious', 'rowdy', 'dissonant', 'resounding', 'sonorous', 'clamorous', 'uproarious', 'blatant', 'blaring', 'booming', 'brassy', 'brazen','clanging', 'earsplitting', 'jangly'],
    boring_synonyms:['loud'],
    
        sentence:'I couldn\'t sleep because the neighbors were <span id="boring_phrase">very noisy</span> last night.',
    },

    busy:{
        alternatives:['swamped','overwhelmed','tied-up', 'knee-deep', 'engrossed'],
        boring_synonyms:['occupied'],
        sentence:'I want to go to the game, but I\'m <span id="boring_phrase">very busy</span> this week.',
    },

    shiny:{
        alternatives:['gleaming', 'beaming', 'bedazzling', 'brilliant', 'dazzling','glistening', 'glowing', 'lambent', 'lucent',  'luminous', 'lustrous', 'radiant', 'sheeny', 'splendid'],
        boring_synonyms:['shining','lucid', 'candescent', 'incandescent'],
        sentence:'The Crystal Palace was <span id="boring_phrase">very shiny</span>!',
    },

};


//we will use a cookie to keep track of which words the user has already seen

var keys = Object.keys(spicy_object);
var keys_not_seen = keys; //assume all keys have not yet been seen

//read cookies
var all_cookies = document.cookie.split(';')
for(i in all_cookies){
    if(all_cookies[i].indexOf('keys_not_seen') != -1){
      keys_not_seen = all_cookies[i].split('=')[1].split(','); //if cookie exists, update keys_not_seen
    }
}

if(keys_not_seen[0] == ""){
    keys_not_seen = keys //reset
}

//select a random not_seen key
var random_key = keys_not_seen[keys_not_seen.length * Math.random() << 0]; //called random_key but is a boring word
//update the cookie
var new_cookie = ''
for(i in keys_not_seen){
    if(keys_not_seen[i] != random_key){
        new_cookie = new_cookie + keys_not_seen[i] + ','
    }
}
new_cookie = new_cookie.slice(0,new_cookie.length-1) //get rid of the extra comma at the end there

console.log(keys_not_seen)
document.cookie = 'keys_not_seen=' + new_cookie;

var alternatives = spicy_object[random_key]['alternatives']
var boring_synonyms = spicy_object[random_key]['boring_synonyms']

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
    if(alternatives.includes(answer) || answer == 'spicy'){
        var answer_index = alternatives.indexOf(answer)
        alternatives.splice(answer_index,1); // remove 1 value from alternatives starting at index answer_index
        input_field.style="display:None;"
        //select 3 alternatives to suggest
        var i1 = 0; 
        var i2 = 0; 
        var i3 = 0; 

        i1 = alternatives.length * Math.random() << 0;
        alt_1 = alternatives[i1]
        alternatives.splice(i1,1); //remove the i1 value from alternatives

        i2 = alternatives.length * Math.random() << 0;
        var alt_2 = alternatives[i2]
        alternatives.splice(i2,1); //remove the i2 value from alternatives

        i3 = alternatives.length * Math.random() << 0;
        var alt_3 = alternatives[i3]
        alternatives.splice(i3,1); //remove the i3 value from alternatives

        message.innerHTML=`Good job! Also consider: ${alt_1}, ${alt_2}, or ${alt_3}.`
        message.style="display:flex;flex-direction:column;"
        buttons.innerHTML="<button class=\"btn contained-btn\" onclick=\"location.reload()\" >Try Another</button>"
        boring_phrase.innerHTML=answer;
        boring_phrase.class="success";
        boring_phrase.style="color:green"
    } else if (boring_synonyms.includes(answer)) {
        input_field.placeholder = "Try something more impactful"
    } else {
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
        buttons.innerHTML="<button class=\"btn contained-btn\" onclick=\"location.reload()\" >Try Another</button>"

}

