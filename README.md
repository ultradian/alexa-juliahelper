# alexa-juliahelper
code for the Alexa skill Julia Helper

The file `responses.js` contains an object with all the potential responses of the skill.  The hard part is triggering the responses.  The interaction model is in the speech-assets folder, in this case breaking down the expected input into possible VERBS, NOUNS, ADJECTIVES, PREPOSITIONS, DETERMINERS, and SUBORDCONJUNCTION (subordinate conjunctions == 'if'). Probably an easier model if I broke 'is' out of the set of VERBS, but that is later.  For now the meat is a nasty set of `if` statements to choose the proper trigger (`answerKey`).  

Input phrases that seem to work for me are in the list, `goodPhrase.txt`.  Ones we need to improve the coding for at in `badPhrase.txt`.

