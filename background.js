chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({'time': '0'}, function() {
		console.log('Begin logger');
	});

	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
    		conditions: [new chrome.declarativeContent.PageStateMatcher({
      			pageUrl: {hostEquals: 'facebook.com'},
    		})
    		],
        	actions: [new chrome.declarativeContent.ShowPageAction()]
  		}]);
	});
});