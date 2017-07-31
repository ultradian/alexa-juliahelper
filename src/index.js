/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * Alexa skill to describe Julia commands
 * author: Milton Huang
 * code based on template from https://github.com/alexa/skill-sample-nodejs-howto
 **/

'use strict';

const Alexa = require('alexa-sdk');
// responses is list of possible verbal answers keyed to answerKey
const responses = require('./responses');

const APP_ID = "amzn1.ask.skill.992d5aaa-c129-4bc5-a906-92ed837c51fd"; // app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            RESPONSES: responses.RESPONSE_EN_US,
            SKILL_NAME: 'Julia Helper',
            WELCOME_MESSAGE: "Welcome to Julia Helper. You can ask a question like, how do I add an element to an array? .. or what is the function to get all the values from a dictionary? ... what can I help you with?",
            WELCOME_REPROMT: 'For instructions on what you can say, please say help me.',
            DISPLAY_CARD_TITLE: '%s',
            HELP_MESSAGE: "You can ask a question like, how do I add an element to an array? .. or what is the function to get all the values from a dictionary? ... what can I help you with?",
            HELP_REPROMT: "You can ask a question like, how do I add an element to an array? .. or what is the function to get all the values from a dictionary? ... what can I help you with?",
            STOP_MESSAGE: 'Goodbye!',
            UNHANDLED_MESSAGE: "I'm confused. Can you rephrase that?",
            UNHANDLED_REPROMT: "I'm confused by your question.  Please rephrase it.",
            ANSWER_REPEAT_MESSAGE: 'Try saying repeat.',
            MISMATCH_REPROMPT: 'Can you word that a different way?',
            NO_MATCH: "I\'m sorry, I don\'t understand your question<break strength=\"strong\"/>",
            NO_MATCH_REPROMPT: 'Please try something else',
        },
    },
    'en-US': {
        translation: {
            RESPONSES: responses.RESPONSE_EN_US,
            SKILL_NAME: 'American Julia Helper',
        },
    },
    'en-GB': {
        translation: {
            RESPONSES: responses.RESPONSE_EN_GB,
            SKILL_NAME: 'British Julia Helper',
        },
    },
 };

// noun checks


// problem, Question Intent can't understand destructuring assignment
const handlers = {
    'LaunchRequest': function () {
        this.attributes.speechOutput = this.t('WELCOME_MESSAGE');
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes.repromptSpeech = this.t('WELCOME_REPROMT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'QuestionIntent': function () {
        let answerKey = false, mismatch = "";
        const answers = this.t('RESPONSES');
        const slots = this.event.request.intent.slots;

        var [verb1ID, verb1] = checkSlot(slots, "verb");
        var [det1ID, det1] = checkSlot(slots, "determiner");
        var [noun1ID, noun1] = checkSlot(slots, "noun");
        var [adj1ID, adj1] = checkSlot(slots, "adjective");
        var [prep1ID, prep1] = checkSlot(slots, "preposition");
        var [subordconjID, subordconj] = checkSlot(slots, "subordConjunction");
        var [verb2ID, verb2] = checkSlot(slots, "verbTwo");
        var [det2ID, det2] = checkSlot(slots, "determinerTwo");
        var [noun2ID, noun2] = checkSlot(slots, "nounTwo");
        var [adj2ID, adj2] = checkSlot(slots, "adjectiveTwo");
        var [prep2ID, prep2] = checkSlot(slots, "prepositionTwo");
        var [det3ID, det3]  = checkSlot(slots, "determinerThree");
        var [noun3ID, noun3] = checkSlot(slots, "nounThree");
    
        let heard = makePOSpattern(verb1, det1, noun1, adj1, prep1, subordconj, verb2, det2, noun2, det3, noun3);
        console.log("request: "+JSON.stringify(this.event.request.intent));
        
        if (verb1) {
            if (verb1ID == "get" || verb1ID == "find") {
                console.log("got get/find, with n1="+noun1);
                // this captures if used as adj instead of noun
                if (['abs','sqrt','mean','std','median','fft','conv','sum','sumabs','sumabs2','prod','rand','sign','fld'].includes(noun1ID)) {
                    answerKey = noun1ID;
                // check dict for n2
                } else if (['keys','values'].includes(noun1ID) && noun2ID == 'dict') {
                    answerKey = noun1ID;
                // check v1a1n1
                } else if (['item'].includes(noun1ID)) {
                    if (['first', 'last'].includes(adj1ID)) {
                        console.log("got get/find, with a1="+adj1+" item");
                        answerKey = adj1ID;
                    } else if (['max', 'min'].includes(adj1ID)) {
                        // disambiguate max vs maximum
                        if (['array','collection'].includes(noun2ID)) {
                            answerKey = adj1ID+"imum";
                        } else if (noun2ID) == 'arg') {
                            answerKey = adj1ID;
                        } else {
                            // skip mismatch this time
                        }
                    } else {
                        mismatch = "I don\'t know about finding "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+adj1+" items</prosody><break strength=\"strong\"/>";
                    }
                // check v1a1n1p1n2
                } else if (noun1ID == 'cat') {
                    if (['v','h'].includes(adj1ID)) {
                        answerKey = adj1ID+noun1ID;
                    } else {
                        mismatch = "I don\'t know about finding "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+adj1+" "+noun1+" </prosody><break strength=\"strong\"/>";
                    }
                // check posessive - TODO Alexa merges adj dict to noun
                } else if (['dict','collection'].includes(adj1ID)) {
                    if (['key', 'value'].includes(noun1ID)) {
                        answerKey = noun1ID+"s";
                    } else {
                        mismatch = "I don\'t know about finding "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+adj1+" "+noun1ID+"</prosody><break strength=\"strong\"/>";
                    }
                } else {
                    mismatch = "I don\'t know about finding "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun1+"</prosody><break strength=\"strong\"/>";
                }
            }
            if (verb1ID == "specify") {
                console.log("got specify, with n1="+noun1);
                if (['range'].includes(noun1ID)) {
                    answerKey = 'colon';
                } else {
                    mismatch = "I don\'t know about defining "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun1+"</prosody><break strength=\"strong\"/>";
                }
            }
            if (verb1ID == "generate") {
                console.log("got generate, with n1="+noun1);
                if (['rand'].includes(noun1ID)) {
                    answerKey = noun1ID;
                } else if (['range'].includes(noun1ID)) {
                    answerKey = 'colon';
                } else if (noun1ID == 'cat') {
                    if (['v','h'].includes(adj1ID)) {
                        answerKey = adj1ID+noun1ID;
                    } else {
                        mismatch = "I don\'t know about creating "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+adj1+" "+noun1+" </prosody><break strength=\"strong\"/>";
                    }
                } else {
                    mismatch = "I don\'t know about generating "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun1+"</prosody><break strength=\"strong\"/>";
                }
            }
             if (verb1ID == "reverse") {
                console.log("got reverse, with n1="+noun1);
                if (noun1ID == 'string' || noun2ID == 'string') {
                    answerKey = 'reverse';
                } else {
                    mismatch = "I don\'t know about reversing "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun1+"</prosody><break strength=\"strong\"/>";
                }
            } 
             if (verb1ID == "combine") {
                console.log("got combine, with n1="+noun1);
                if (['dict'].includes(noun1ID)) {
                    answerKey = 'merge';
                } else if (['set'].includes(noun1ID)) {
                    answerKey = 'union';
                } else if (['string'].includes(noun1ID)) {
                    answerKey = 'concatenate';
                } else {
                    mismatch = "I don\'t know about combining "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun1+"</prosody><break strength=\"strong\"/>";
                }
            }
             if (verb1ID == "concatenate") {
                console.log("got concatenate, with n1="+noun1);
                if (noun1ID == 'string') {
                    answerKey = 'concatenate';
                } else if (noun1ID == 'set') {
                    answerKey = 'union';
                } else {
                    mismatch = "I don\'t know about concatenating "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun1+"</prosody><break strength=\"strong\"/>";
                }
            }
            // v1a1n1p1n2
            
            if (verb1ID == "test" && subordconj && verb2ID == "is") {
                console.log("got test if is, with n1="+noun1+" n2="+noun2);
                if (['ascii','digit','empty','even','lower','odd','pow2','space','subset','upper'].includes(adj1ID)) {
                    answerKey = "is"+adj1ID;
                } else if (['ascii','digit','empty','even','lower','odd','pow2','space','subset','upper'].includes(adj2ID)) {
                    answerKey = "is"+adj2ID;
                } else {
                    mismatch = "I don\'t know about testing if "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun1+"</prosody> is <prosody rate=\"x-slow\" volume=\"x-loud\">"+adj1ID+adj2ID+"</prosody><break strength=\"strong\"/>";
                }
            }
            if (verb1ID == "test" && subordconj && verb2ID == "contains") {
                console.log("got test if contains, with n1="+noun1+" n2="+noun2);
                if (noun1ID == "dict" && ['key'].includes(noun2ID)) {
                    answerKey = 'haskey';
                } else if (['collection','array','dict','set'].includes(noun1ID) && ['item'].includes(noun2ID)) {
                    answerKey = 'in';
                } else if (['string'].includes(noun1ID) && ['another','string','char','one'].includes(noun2ID)) {
                    answerKey = 'in';
                } else {
                    mismatch = "I don\'t know about testing if "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun1+"</prosody> has "+det2+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun2+"</prosody><break strength=\"strong\"/>";
                }
            }
            if (verb1ID == "test" && subordconj && verb2ID == "starts") {
                console.log("got test if starts, with n1="+noun1+" n2="+noun2);
                if (noun1ID == "string" && ['another'].includes(noun2ID)) {
                    answerKey = 'startswith';
                } else {
                    mismatch = "I don\'t know about testing if "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun1+"</prosody> starts "+det2+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun2+"</prosody><break strength=\"strong\"/>";
                }
            }
            if (verb1ID == "test" && subordconj && verb2ID == "ends") {
                console.log("got test if ends, with n1="+noun1+" n2="+noun2);
                if (noun1ID == "string" && ['another'].includes(noun2ID)) {
                    answerKey = 'endswith';
                } else {
                    mismatch = "I don\'t know about testing if "+det1+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun1+"</prosody> ends "+det2+" <prosody rate=\"x-slow\" volume=\"x-loud\">"+noun2+"</prosody><break strength=\"strong\"/>";
                }
            }
        }
        
        console.log("mismatch: " + mismatch);
        
        if (answerKey) {
            this.attributes.speechOutput = answers[answerKey];
            this.attributes.repromptSpeech = this.t('ANSWER_REPEAT_MESSAGE');
            this.emit(':ask', answers[answerKey], this.attributes.repromptSpeech);
        } else {
            let speechOutput = mismatch;
            let repromptSpeech = this.t('MISMATCH_REPROMPT');
            if (!mismatch) {
                speechOutput = this.t('NO_MATCH') + "I heard you ask "+heard+"<break strength=\"strong\"/>";
                repromptSpeech = this.t('NO_MATCH_REPROMPT');
            }
            speechOutput += repromptSpeech;
            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;
            this.emit(':ask', speechOutput, repromptSpeech);
        }
    },
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'Unhandled': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMPT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
};


// --------------- Handlers -----------------------

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // need resources object for string internationalization (i18n) features
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

function makePOSpattern(verb1, det1, noun1, adj1, prep1, subordconj, verb2, det2, noun2, det3, noun3) {
    
    let posPattern = "";
    if (verb1) {
        posPattern += "v1("+verb1+")";
    }
    if (subordconj) {
        posPattern += "s("+subordconj+")";
    }
    if (det1) {
        posPattern += "d1("+det1+")";
    }
    if (adj1) {
        posPattern += "a1("+adj1+")";
    }
    if (noun1) {
        posPattern += "n1("+noun1+")";
    }
    if (prep1) {
        posPattern += "p1("+prep1+")";
    }
    if (det2) {
        posPattern += "d2("+det2+")";
    }
    if (noun2) {
        posPattern += "n2("+noun2+")";
    }
    if (verb2) {
        posPattern += "v2("+verb2+")";
    }
    if (det3) {
        posPattern += "d3("+det3+")";
    }
    if (noun3) {
        posPattern += "n3("+noun3+")";
    }
    console.log("output: " + posPattern);
    return "how to "+verb1+" "+subordconj+" "+det1+" "+adj1+" "+noun1+" "+prep1+" "+det2+" "+noun2+" "+verb2+" "+det3+" "+noun3;

}

function checkSlot(slots, slotName) {
    let slot = slots[slotName];
    let slotID = "", slotValue = "";
    if (slot && slot.value) {
        slotValue = slot.value;
    } else {
        return ["", ""];
    }
    let resolution = (slot&& slot.resolutions &&  slot.resolutions.resolutionsPerAuthority && slot.resolutions.resolutionsPerAuthority.length > 0) ? slot.resolutions.resolutionsPerAuthority[0] : false;
    if (resolution && resolution.status.code == 'ER_SUCCESS_MATCH') {
        let resolutionValue = resolution.values[0].value;
        slotID = resolutionValue.id ? resolutionValue.id : resolutionValue.name;
    }

    //console.log("checking "+JSON.stringify(slots)); 
    //console.log("checking "+JSON.stringify(slots[slotName])); 
    //console.log("checking "+JSON.stringify(slot["value"])); 
    console.log("checkSlot "+slotName+" ID "+JSON.stringify(slotID)+" val "+JSON.stringify(slotValue)); 
    return [slotID, slotValue];
}
