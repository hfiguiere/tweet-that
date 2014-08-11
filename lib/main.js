var { ToggleButton } = require('sdk/ui/button/toggle');
var tabs = require("sdk/tabs");

var button = ToggleButton({
  id: "tweet-that",
  label: "Tweet that link",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

var panel = require("sdk/panel").Panel({
  width: 320,
  height: 250,
  onHide: function() {
    button.state('window', {checked: false});
  }
});

function handleClick(state) {
  var twitter_uri = "https://twitter.com/intent/tweet?url=" +
    encodeURIComponent(tabs.activeTab.url) +
    "&text=" + encodeURIComponent(tabs.activeTab.title);
  panel.contentURL = twitter_uri;
  panel.show({ position: button });
}
