# alexa-juliahelper
code for the Alexa skill Julia Helper

The file `responses.js` contains an object with all the potential responses of the skill.  The hard part is triggering the responses.  The interaction model is in the speech-assets folder, in this case breaking down the expected input into possible VERBS, NOUNS, ADJECTIVES, PREPOSITIONS, DETERMINERS, and SUBORDCONJUNCTION (subordinate conjunctions == 'if'). Probably an easier model if I broke 'is' out of the set of VERBS, but that is later.  For now the meat is a nasty set of `if` statements to choose the proper trigger (`answerKey`).  

Input phrases that seem to work for me are in a data structure in `src/goodPhrases.js`.  This list is selected from as examples when the user asks for help.  If you want to try one out, you need to preceeded it with the phrase,  "Alexa, ask Julia Helper...".

If anyone is interested in contributing, we will need a way to expand the list, we probably need a way to rate how well a phase works in different conditions.  The ones we need to improve the coding for at in `badPhrase.txt` with any notes.

