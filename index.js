var cards = new Array();
var ongoing = new Array();
var selectedArray = new Array();
var ongoingTemp = new Array();

cards[0] = "cards/i-bask-in-your-silent-awe.jpg";
cards[1] = "cards/i-know-all-i-see-all.jpg";
cards[2] = "cards/imprison-this-insolent-wretch.jpg";
cards[3] = "cards/my-undead-horde-awakens.jpg";
cards[4] = "cards/nature-shields-its-own.jpg";
cards[5] = "cards/nothing-can-stop-me-now.jpg";
cards[6] = "cards/the-very-soil-shall-shake.jpg";
cards[7] = "cards/your-inescapable-doom.jpg";
for (let index = 0; index < 8; index++) {
    ongoing[index] = cards[index];
}
cards[8] = "cards/a-display-of-my-dark-power.jpg";
cards[9] = "cards/all-in-good-time.jpg";
cards[10] = "cards/all-shall-smolder-in-my-wake.jpg";
cards[11] = "cards/approach-my-molten-realm.jpg";
cards[12] = "cards/behold-the-power-of-destruction.jpg";
cards[13] = "cards/choose-your-champion.jpg";
cards[14] = "cards/dance-pathetic-marionette.jpg";
cards[15] = "cards/drench-the-soil-in-their-blood.jpg";
cards[16] = "cards/embrace-my-diabolical-vision.jpg";
cards[17] = "cards/every-hope-shall-vanish.jpg";
cards[18] = "cards/every-last-vestige-shall-rot.jpg";
cards[19] = "cards/your-will-is-not-your-own.jpg";
cards[20] = "cards/evil-comes-to-fruition.jpg";
cards[21] = "cards/feed-the-machine.jpg";
cards[22] = "cards/i-call-on-the-ancient-magics.jpg";
cards[23] = "cards/i-delight-in-your-convulsions.jpg";
cards[24] = "cards/ignite-the-cloneforge.jpg";
cards[25] = "cards/into-the-earthen-maw.jpg";
cards[26] = "cards/introductions-are-in-order.jpg";
cards[27] = "cards/afieds.jpg";
cards[28] = "cards/look-skyward-and-despair.jpg";
cards[29] = "cards/may-civilization-collapse.jpg";
cards[30] = "cards/mortal-flesh-is-weak.jpg";
cards[31] = "cards/my-crushing-masterstroke.jpg";
cards[32] = "cards/my-genius-knows-no-bounds.jpg";
cards[33] = "cards/my-wish-is-your-command.jpg";
cards[34] = "cards/nature-demands-an-offering.jpg";
cards[35] = "cards/only-blood-ends-your-nightmares.jpg";
cards[36] = "cards/perhaps-youve-met-my-cohort.jpg";
cards[37] = "cards/plots-that-span-centuries.jpg";
cards[38] = "cards/realms-befitting-my-majesty.jpg";
cards[39] = "cards/roots-of-all-evil.jpg";
cards[40] = "cards/rotted-ones-lay-siege.jpg";
cards[41] = "cards/surrender-your-thoughts.jpg";
cards[42] = "cards/the-dead-shall-serve.jpg";
cards[43] = "cards/the-fate-of-the-flammable.jpg";
cards[44] = "cards/the-iron-guardian-stirs.jpg";
cards[45] = "cards/the-pieces-are-coming-together.jpg";
cards[46] = "cards/tooth-claw-and-tail.jpg";
cards[47] = "cards/which-of-you-burns-brightest.jpg";
cards[48] = "cards/your-fate-is-thrice-sealed.jpg";
cards[49] = "cards/your-puny-minds-cannot-fathom.jpg";


var BringAbDeck = new Array();
BringAbDeck[0] = cards[13];
BringAbDeck[1] = cards[13];
BringAbDeck[2] = cards[14];
BringAbDeck[3] = cards[42];
BringAbDeck[4] = cards[42];
BringAbDeck[5] = cards[8];
BringAbDeck[6] = cards[17];
BringAbDeck[7] = cards[17];
BringAbDeck[8] = cards[23];
BringAbDeck[9] = cards[26];
BringAbDeck[10] = cards[30];
BringAbDeck[11] = cards[3];
BringAbDeck[12] = cards[35];
BringAbDeck[13] = cards[35];
BringAbDeck[14] = cards[38];
BringAbDeck[15] = cards[40];
BringAbDeck[16] = cards[40];
BringAbDeck[17] = cards[41];
BringAbDeck[18] = cards[48];
BringAbDeck[19] = cards[49];


var ScorchDeck = new Array();
ScorchDeck[0] = cards[10];
ScorchDeck[1] = cards[10];
ScorchDeck[2] = cards[11];
ScorchDeck[3] = cards[43];
ScorchDeck[4] = cards[0];
ScorchDeck[5] = cards[0];
ScorchDeck[6] = cards[23];
ScorchDeck[7] = cards[26];
ScorchDeck[8] = cards[27];
ScorchDeck[9] = cards[28];
ScorchDeck[10] = cards[28];
ScorchDeck[11] = cards[31];
ScorchDeck[12] = cards[33];
ScorchDeck[13] = cards[33];
ScorchDeck[14] = cards[38];
ScorchDeck[15] = cards[46];
ScorchDeck[16] = cards[47];
ScorchDeck[17] = cards[47];
ScorchDeck[18] = cards[48];
ScorchDeck[19] = cards[49];

var AssembleDeck = new Array();
AssembleDeck[0] = cards[9];
AssembleDeck[1] = cards[12];
AssembleDeck[2] = cards[16];
AssembleDeck[3] = cards[21];
AssembleDeck[4] = cards[21];
AssembleDeck[5] = cards[23];
AssembleDeck[6] = cards[1];
AssembleDeck[7] = cards[7];
AssembleDeck[8] = cards[24];
AssembleDeck[9] = cards[24];
AssembleDeck[10] = cards[26];
AssembleDeck[11] = cards[44];
AssembleDeck[12] = cards[44];
AssembleDeck[13] = cards[32];
AssembleDeck[14] = cards[5];
AssembleDeck[15] = cards[45];
AssembleDeck[16] = cards[45];
AssembleDeck[17] = cards[38];
AssembleDeck[18] = cards[48];
AssembleDeck[19] = cards[49];

var TrampleDeck = new Array();
TrampleDeck[0] = cards[18];
TrampleDeck[1] = cards[18];
TrampleDeck[2] = cards[20];
TrampleDeck[3] = cards[22];
TrampleDeck[4] = cards[23];
TrampleDeck[5] = cards[25];
TrampleDeck[6] = cards[26];
TrampleDeck[7] = cards[29];
TrampleDeck[8] = cards[34];
TrampleDeck[9] = cards[34];
TrampleDeck[10] = cards[4];
TrampleDeck[11] = cards[4];
TrampleDeck[12] = cards[38];
TrampleDeck[13] = cards[39];
TrampleDeck[14] = cards[39];
TrampleDeck[15] = cards[6];
TrampleDeck[16] = cards[48];
TrampleDeck[17] = cards[49];
TrampleDeck[18] = cards[19];
TrampleDeck[19] = cards[19];

var burakDeck1 = new Array();
burakDeck1[0] = cards[18];
burakDeck1[1] = cards[18];
burakDeck1[2] = cards[21];
burakDeck1[3] = cards[22];
burakDeck1[4] = cards[44];
burakDeck1[5] = cards[49];
burakDeck1[6] = cards[2];
burakDeck1[7] = cards[29];
burakDeck1[8] = cards[34];
burakDeck1[9] = cards[34];
burakDeck1[10] = cards[6];
burakDeck1[11] = cards[4];
burakDeck1[12] = cards[38];
burakDeck1[13] = cards[39];
burakDeck1[14] = cards[39];
burakDeck1[15] = cards[9];
burakDeck1[16] = cards[48];
burakDeck1[17] = cards[45];
burakDeck1[18] = cards[19];
burakDeck1[19] = cards[8];

var burakDeck2 = new Array();
burakDeck2[0] = cards[20];
burakDeck2[1] = cards[20];
burakDeck2[2] = cards[22];
burakDeck2[3] = cards[22];
burakDeck2[4] = cards[46];
burakDeck2[5] = cards[41];
burakDeck2[6] = cards[5];
burakDeck2[7] = cards[29];
burakDeck2[8] = cards[31];
burakDeck2[9] = cards[33];
burakDeck2[10] = cards[2];
burakDeck2[11] = cards[1];
burakDeck2[12] = cards[38];
burakDeck2[13] = cards[39];
burakDeck2[14] = cards[44];
burakDeck2[15] = cards[23];
burakDeck2[16] = cards[24];
burakDeck2[17] = cards[27];
burakDeck2[18] = cards[21];
burakDeck2[19] = cards[11];

var randomDeck = new Array();

for (var i = 0; i <  3; i++) 
{
    var random = Math.floor(Math.random() * 8);
    randomDeck[i] = ongoing[random];
}
for (var i = 3; i <  20; i++) 
{
    var random = Math.floor(Math.random() * (12) + 8);
    randomDeck[i] = cards[random];
}
    
function deckCall(value)
{
    checker(value);
    shuffleDeck(selectedArray);
    ongoingFinder(selectedArray, 0);
    document.getElementById("smlPic").src = selectedArray[0];
    document.getElementById("bigPic").src = selectedArray[0];
    count = 1;
    countShow.innerText = "Turn: " + 1;
    document.getElementById("img1").src = "";
    document.getElementById("img2").src = "";
    document.getElementById("img3").src = "";
    for (var i = 0; i < 3; i++) 
    {
        ongoingTemp[i] = "";
    }

}

function shuffleDeck(array) 
{
    for (var i = array.length - 1; i > 0; i--) 
    {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
}

var i = 0;
var round = -1;
function imageClicked()
{
    TurnCounter();
    if(i < selectedArray.length )
    {
        document.getElementById("smlPic").src = selectedArray[i];
        document.getElementById("bigPic").src = selectedArray[i];
        ongoingFinder(selectedArray, i);       
        i++;
                
    }
    else
    {
      
        if (round > 0) 
        {
     
            i = 17;
            round = round*(-1); 
        }
        else
        {
            i = 0;
        }
               
        document.getElementById("smlPic").src = selectedArray[i];
        document.getElementById("bigPic").src = selectedArray[i];
        ongoingFinder(selectedArray, i);
        
    }    
}

var counterOngoing = 0;
function ongoingFinder(array, i)
{
    if( array[i] == ongoing[0] || array[i] == ongoing[1] || array[i] == ongoing[2] || array[i] == ongoing[3] || array[i] == ongoing[4] || array[i] == ongoing[5] || array[i] == ongoing[6] || array[i] == ongoing[7])
    {

        if(counterOngoing == 0)
        {
            document.getElementById("img1").src = array[i];
            ongoingTemp[0] = array[i];
            array.splice(i, 1);
            counterOngoing++;
        }
        else if(counterOngoing == 1)
        {
            document.getElementById("img2").src = array[i];
            ongoingTemp[1] = array[i];
            array.splice(i, 1);
            counterOngoing++;
        }
        else if(counterOngoing == 2)
        {
            document.getElementById("img3").src = array[i];
            ongoingTemp[2] = array[i];
            array.splice(i, 1);
            counterOngoing++;
        }                   
    }
}


function mouseOver(id)
{
    document.getElementById("bigPic").src = document.getElementById(id).src;
}


function mouseDown()
{
    
    if (counterOngoing == 3)
    {
        document.getElementById("img3").src = "";
        counterOngoing--;
        selectedArray.push(ongoingTemp[2]);
    }
    else if (counterOngoing == 2)
    {
        
        document.getElementById("img2").src = "";
        counterOngoing--;
        selectedArray.push(ongoingTemp[1]);
    }
    else if (counterOngoing == 1)
    {
        
        document.getElementById("img1").src = "";
        counterOngoing--;
        selectedArray.push(ongoingTemp[0]);
        round = round*(-1);

        
    }
        
}

var count = 1;
function TurnCounter()
{
    count++;
    countShow.innerText = "Turn: " + count;
}

function checker(value)
{
    if(value == 1)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = randomDeck[index];
        }
    }
    else if(value == 2)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = AssembleDeck[index];
        }
    }
    else if(value == 3)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = BringAbDeck[index];
        }
    }
    else if(value == 4)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = ScorchDeck[index];
        }
    }
    else if(value == 5)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = TrampleDeck[index];
        }
    }
    else if(value == 6)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = burakDeck1[index];
        }
    }

    else if(value==7)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = burakDeck2[index];
        }
    }
}