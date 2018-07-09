const LaunchRequestHandler = require('./handlers/launchRequestHandler');
const HelloWorldIntentHandler = require('./handlers/helloWorldIntentHandler');
const HelpIntentHandler = require('./handlers/helpIntentHandler');
const CancelAndStopIntentHandler = require('./handlers/cancelAndStopIntentHandler');
const SessionEndedRequestHandler = require('./handlers/sessionEndedRequestHandler');
const ErrorHandler = require('./handlers/errorHandler');

const GetMovieDetailsIntentHandler = require('./handlers/getMovieDetailsIntentHandler');

const Alexa = require('ask-sdk-core');
const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    GetMovieDetailsIntentHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
