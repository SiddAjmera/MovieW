const GetMovieDetailsIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest' && request.intent.name === 'GetMovieDetails';
  },
  handle(handlerInput) {
    const speechText = `Sending details on ${handlerInput.requestEnvelope.request.intent.movie.value} to you!`;

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

module.exports = GetMovieDetailsIntentHandler;
