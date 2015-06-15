// The onClicked callback function.
function onClickHandler(info, tab) {
    var text = encodeURIComponent(info.selectionText || tab.title);
    var pageUrl = encodeURIComponent(info.pageUrl);

    chrome.windows.create({
        url: "https://twitter.com/intent/tweet?text=" + text + "&url=" + pageUrl,
        type: "panel",
        top: 0,
        left: 0,
        height: 400,
        width: 700
    });
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function () {

    //Define right click context
    var contexts = ["page", "selection", "link", "editable", "image", "video", "audio"];

    //Add item to context menu
    chrome.contextMenus.create({"title": "Tweet This!", "id": "select2Tweet", "contexts": contexts});
});