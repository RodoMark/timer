"use strict";

const alarms = process.argv;

const timer = function (alarms) {
  if (alarms.length < 1 || alarms === undefined) {
    return false;
  }

  for (const alarm of alarms) {
    setTimeout(() => {
      if (alarm < 0 || isNaN(alarm)) {
        return false;
      } else {
        process.stdout.write("BEEP! ");
        return true;
      }
    }, alarm * 1000);
  }
};

module.exports = timer;

timer(alarms);
