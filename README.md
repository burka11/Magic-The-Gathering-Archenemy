# Magic-The-Gathering-Archenemy

Final Project of Programming Web Application Course

<p>
<br><b>Main goal</b>
<br>Examplary program: <a href="https://math.uni.lodz.pl/~peter/junk/arch/archenemy2.rar">RAR (package)</a>
<br>→ this application is meant to be a <i>helper</i> in Magic: The Gathering Archenemy matches;
<br>→ cards should be shuffled like in a regular deck, consisting of 20 cards (available in the above <a href="https://math.uni.lodz.pl/~peter/junk/arch/archenemy2.rar">.rar</a> package);
<br>→ deck(s) can be constructed on your own, picked from the existing list (included in .rar) or gathered randomly;
<br>→ each deck should contain up to two copies of a given card (there may be either 0, 1 or 2 cards with the same name);
<br>→ every card (if not set aside) should go to the bottom of the deck after picking the next one;
<br><br>For each numbered task there's one point to earn (no halves, so please read carefully).
</p>

<ul>
<br><b>Scoring</b>
<li>4 pts: 3;
<li>6 pts: 4;
<li>8 pts: 5.
</ul>


<ol>
<br><b>Tasks</b>
<li>Implement the main functionality of the webapp (providing cards from the shuffled deck, one at a time);
<li>The window should display proper title and icon (eg. <a href="https://magic.wizards.com/sites/all/themes/wiz_mtg/icons/favicon.ico">this</a> one);
<li>Print which turn is it (so how many cards were already displayed) as an integer;
<li>Display currently drawn card in the center of the window;
<li>Adjust the size of the currently shown card to be always as high as the window's height (even when resizing the browser);
<li>Allow the user to set aside cards marked as an <i>Ongoing Scheme</i> (instead of a regular <i>Scheme</i> - indicated in the middle of a card);
<br>→ use a thumbnail (small picture) to display current scheme and all ongoing schemes (listed one on another or under another, as you prefer);
<br>→ instead of displaying the current card in the center, display a bigger version (preview) of the card pointed by user's cursor;
<li>When right-clicked, the ongoing scheme should be <i>abandoned</i> (so it's not displayed aside anymore and returns to the bottom of the deck);
<li>Allow the user to choose between your deck and another, randomly generated;
<br>→ <i>+1 bonus point for implementing more then one deck of your own</i>.
</ol>
