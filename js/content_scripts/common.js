chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	console.log("aaaaaaaaaaaaa");
	alert(bbbbb);
	var url = $(location).attr('search');
	alert(url);
	var title = $("title").text();
	alert(title);
	var result = "["+ title + "](" + url + '"' + title + '")';
	sendResponse({text:result});
});
