var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "tweet-that",
  label: "Tweet that link",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  var url = tabs.activeTab.url;
  var title = tabs.activeTab.title;

  tabs.open({
    url: "https://twitter.com/intent/tweet?url="
      + encodeURIComponent(url)
      + "&text=" + encodeURIComponent(title),
    inBackground: true,
    onOpen: function (tab) {
      tab.activate();
    }
  });
}
