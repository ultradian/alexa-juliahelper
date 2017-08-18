# alexa-juliahelper
code for the Alexa skill Julia Helper

The file `responses.js` contains an object with all the potential responses of the skill.  The hard part is triggering the responses.  The interaction model is in the speech-assets folder, in this case breaking down the expected input into possible VERBS, NOUNS, ADJECTIVES, PREPOSITIONS, DETERMINERS, and SUBORDCONJUNCTION (subordinate conjunctions == 'if'). Probably an easier model if I broke 'is' out of the set of VERBS, but that is for later.  For now the meat is a nasty set of `if` statements in `src/index.js` which choose the proper trigger (`answerKey`).  

Input phrases that seem to work for me are in `goodPhrases.txt`.  This is used to create the data structure in `src/goodPhrases.js`which is used as the source for examples when the user asks for help.  I don't know how to automate this right now as we need to add the proper SSML for emphasis.  This should also be used to create the cards in a future version of the program.

If you want to try a goodPhrase out, you need to precede it with the phrase,  "Alexa, ask Julia Helper..." in your echo device.

If anyone is interested in contributing, we will need a way to expand the list, we probably need a way to rate how well a phase works in different conditions.  I am currently storing any non-working phrases or phrases that need improved coding  in `badPhrase.txt` with any notes.
