# Magic-The-Gathering-Archenemy

Final Project of Programming Web Application Course

Main goal
Examplary program: RAR (package)
→ this application is meant to be a helper in Magic: The Gathering Archenemy matches;
→ cards should be shuffled like in a regular deck, consisting of 20 cards (available in the above .rar package);
→ deck(s) can be constructed on your own, picked from the existing list (included in .rar) or gathered randomly;
→ each deck should contain up to two copies of a given card (there may be either 0, 1 or 2 cards with the same name);
→ every card (if not set aside) should go to the bottom of the deck after picking the next one;

For each numbered task there's one point to earn (no halves, so please read carefully).


Scoring
4 pts: 3;
6 pts: 4;
8 pts: 5.

Tasks
Implement the main functionality of the webapp (providing cards from the shuffled deck, one at a time);
The window should display proper title and icon (eg. this one);
Print which turn is it (so how many cards were already displayed) as an integer;
Display currently drawn card in the center of the window;
Adjust the size of the currently shown card to be always as high as the window's height (even when resizing the browser);
Allow the user to set aside cards marked as an Ongoing Scheme (instead of a regular Scheme - indicated in the middle of a card);
→ use a thumbnail (small picture) to display current scheme and all ongoing schemes (listed one on another or under another, as you prefer);
→ instead of displaying the current card in the center, display a bigger version (preview) of the card pointed by user's cursor;
When right-clicked, the ongoing scheme should be abandoned (so it's not displayed aside anymore and returns to the bottom of the deck);
Allow the user to choose between your deck and another, randomly generated;
→ +1 bonus point for implementing more then one deck of your own.
