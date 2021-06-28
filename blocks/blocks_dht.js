Blockly.Blocks['DHT_ESP32_Setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("DhtSensor1",null,["Plugin.DHTesp"],["Plugin.DHTesp"]), "instance")
        .appendField("Setup")
        .appendField(new Blockly.FieldDropdown([["DHT11","DHT11"], ["DHT22","DHT22"], ["AM2302","AM2302"], ["RHT03","RHT03"]]), "dht_type")
        .appendField("pin")
        .appendField(new Blockly.FieldDropdown([
                                              ["32", "32"],
                                              ["33", "33"],
                                              ["27", "27"],
                                              ["26", "26"],
                                              ["25", "25"],
                                              ["23", "23"],
                                              ["22", "22"],
                                              ["21", "21"],
                                              ["19", "19"],
                                              ["18", "18"],
                                              ["17", "17"],
                                              ["16", "16"],
                                              ["15", "15"],
                                              ["14", "14"],
                                              ["13", "13"],
                                              ["12", "12"],
                                              ["5", "5"],
                                              ["4", "4"],
                                              ["2", "2"],
                                              ["0", "0"]]), "pin");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("setup sensor DHT ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['DHT_ESP32_readTemp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("DhtSensor1",null,["Plugin.DHTesp"],["Plugin.DHTesp"]), "instance")
        .appendField("read temperature °C");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read temperature in Celsius");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['DHT_ESP32_readHumid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("DhtSensor1",null,["Plugin.DHTesp"],["Plugin.DHTesp"]), "instance")
        .appendField("read humidity %");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read humidity in percentage");
 this.setHelpUrl("");
  }
};