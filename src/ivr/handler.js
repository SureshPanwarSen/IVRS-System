const VoiceResponse = require('twilio').twiml.VoiceResponse;

exports.welcome = () => {
  const voiceResponse = new VoiceResponse();

  const gather = voiceResponse.gather({
    action: '/fg/menu',
    numDigits: '1',
    method: 'GET',
  });

  gather.say(
    'Thanks for calling the FarmGuide. ' +
    'Please press 1 to connect with Sales Department. ' +
    'Please press 2 for Technical Support. ' +
    'Please press 3 for Financial Services. ' +
    'Please press 0 for Help. ',

    {loop: 5}
  );

  return voiceResponse.toString();
};

exports.menu = (digit) => {
  const optionActions = {
    '1': connectToSalesDepartment,
    '2': connectToTechnicalSupport,
    '3': connectToFinancialServices,
    '0': connectToHelp,
  };

  return (optionActions[digit])
    ? optionActions[digit]()
    : redirectWelcome();
};

exports.salesDept = (digit) => {
  const optionActions = {
    '2': getSalesDetails,
    '9': talkToCustomerCareExecutive,
  };

  return (optionActions[digit])
    ? optionActions[digit]()
    : redirectWelcome();
};

/**
 * @return {String}
 */
function getSalesDetails() {
  const twiml = new VoiceResponse();

  twiml.say(
    'Hi sales details of this month and year are 100 units and 1000 units. ' +
    '10 percent incresed from last month.' +
    {voice: 'alice', language: 'en-GB'}
  );

  twiml.say(
    'Thank you for calling FarmGuide.'
  );

  twiml.hangup();

  return twiml.toString();
};

/**
 * @return {String}
 */
function talkToCustomerCareExecutive() {
  const phDict = ['+91234567890', '+91234567891',
    '+91234567892', '+91234567893', '+91234567894'];

  let phNumber = '';
  phNumber = phDict[Math.floor(Math.random() * phDict.length)];

  if (phNumber) {
    const twiml = new VoiceResponse();
    twiml.dial(phNumber);
    return twiml.toString();
  }

  return redirectWelcome();
};

exports.financialDept = (digit) => {
  const optionActions = {
    '2': getFinancialStatement,
    '9': talkToCustomerCareExecutive,
  };

  return (optionActions[digit])
    ? optionActions[digit]()
    : redirectWelcome();
};

/**
 * @return {String}
 */
function getFinancialStatement() {
  const twiml = new VoiceResponse();

  twiml.say(
    'Hi your financial statement will be sent to your registered number. ' +
    {voice: 'alice', language: 'en-GB'}
  );

  twiml.say(
    'Thank you for calling FarmGuide.'
  );

  twiml.hangup();

  return twiml.toString();
};

exports.techSupport = (digit) => {
  const optionActions = {
    '2': getFarmSolution,
    '9': talkToCustomerCareExecutive,
  };

  return (optionActions[digit])
    ? optionActions[digit]()
    : redirectWelcome();
};

/**
 * @return {String}
 */
function getFarmSolution() {
  const twiml = new VoiceResponse();

  twiml.say(
    'Hi welcome to technical support. ' +
    'we will send best solutions on your registered number. ' +
    {voice: 'alice', language: 'en-GB'}
  );

  twiml.say(
    'Thank you for calling FarmGuide.'
  );

  twiml.hangup();

  return twiml.toString();
};

exports.getHelp = (digit) => {
  const optionActions = {
    '9': talkToCustomerCareExecutive,
  };

  return (optionActions[digit])
    ? optionActions[digit]()
    : redirectWelcome();
};

/**
 * @return {String}
 */
function connectToSalesDepartment() {
  const twiml = new VoiceResponse();

  twiml.say(
    'Hello, Thank you for connecting to Sales Department. ' +
    'Please press 2 to get sales details. ' +
    'Please press 9 to talk to our customer care executive of sales',
    {voice: 'alice', language: 'en-GB'}
  );

  return twiml.toString();
}

/**
 * @return {String}
 */
function connectToTechnicalSupport() {
  const twiml = new VoiceResponse();

  twiml.say(
    'Hello, Thank you for connecting to Technical Support. ' +
    'Please press 2 to get farm related best solutions. ' +
    'Please press 9 to talk to our customer ' +
    'care executive of technical support',
    {voice: 'alice', language: 'en-GB'}
  );

  return twiml.toString();
}

/**
 * @return {String}
 */
function connectToFinancialServices() {
  const twiml = new VoiceResponse();

  twiml.say(
    'Hello, Thank you for connecting with Financial Services. ' +
    'Please press 2 to get your financial statement. ' +
    'Please press 9 to talk to our customer ' +
    'care executive of financial support',
    {voice: 'alice', language: 'en-GB'}
  );

  return twiml.toString();
}


/**
 * @return {String}
 */
function connectToHelp() {
  const twiml = new VoiceResponse();

  twiml.say(
    'Hello, Thank you for connecting with FarmGuide. ' +
    'Please press 9 to talk to our customer ' +
    'care executive of financial support',
    {voice: 'alice', language: 'en-GB'}
  );

  return twiml.toString();
}


/**
 * @return {String}
 */
function redirectWelcome() {
  const twiml = new VoiceResponse();

  twiml.say('Welcome to FarmGuide. ', {
    voice: 'alice',
    language: 'en-GB',
  });

  twiml.redirect('/fg/welcome');

  return twiml.toString();
}
