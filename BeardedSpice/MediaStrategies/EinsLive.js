//
//  1Live.js
//  BeardedSpice
//
//  Created by Edgar de Graaff on 07/14/18.
//  Copyright (c) 2016 GPL v3 http://www.gnu.org/licenses/gpl.html
//

BSStrategy = {
  version: 1,
  displayName: "1Live",
  accepts: {
    method: "predicateOnTab",
    format: "%K LIKE[c] '*www1.wdr.de*'",
    args: ["URL"]
  },

  isPlaying: function () {
    return !!document.querySelector('#playCtrl');
  },
  toggle: function () {
    var playCtrl = document.querySelector('#playCtrl');
    if (playCtrl) {
      playCtrl.click();
    } else {
      document.querySelectorAll('.wdrrPlayerPlayBtn')[0].click();
    }
  },
  previous: function () { },
  next: function () {  },
  pause: function () {
    var playCtrl = document.querySelector('#playCtrl');
    if (playCtrl) {
      playCtrl.click();
    }
  },
  favorite: function () {}
};
