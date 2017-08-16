
let gettingtabs = browser.tabs.query({active: true, currentWindow: true});
gettingtabs.then((tabs) => {
  if (tabs[0]) {
    let activeTab = tabs[0];
    var twitter_uri = "https://twitter.com/intent/tweet?url=" +
        encodeURIComponent(activeTab.url) +
        "&text=" + encodeURIComponent(activeTab.title);
    window.location.href = twitter_uri;
  }
});

