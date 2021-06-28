Blockly.JavaScript['DHT_ESP32_Setup'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_dht_type = block.getFieldValue('dht_type');
    var number_pin = block.getFieldValue('pin'); 
    var code = `
  #EXTINC#include "DHT.h"#END
  #VARIABLE DHT ${variable_instance}(${number_pin},${dropdown_dht_type});#END
  ${variable_instance}.begin();
  `;
    return code;
  };
  Blockly.JavaScript['DHT_ESP32_readTemp'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.readTemperature()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['DHT_ESP32_readHumid'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.readHumidity()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };