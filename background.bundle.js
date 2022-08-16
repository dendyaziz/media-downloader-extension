chrome.action.onClicked.addListener(async function (tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: async () => {
      const oldIframe = document.getElementById('cm-frame');

      if (oldIframe) {
        oldIframe.remove();
        return;
      }

      const url = parent.location.href

      const iframe = document.createElement('iframe');
      iframe.setAttribute('id', 'cm-frame');
      iframe.setAttribute('allowtransparency', true);
      iframe.setAttribute(
        'style',
        'border: none;height: 100%;width: 100%;position: fixed;z-index: 2147483647;top: 0px;left: 0px;background-color: transparent;clip: auto;overflow: hidden;opacity: 1;display: block !important;visibility: visible;'
      );
      iframe.setAttribute('scrolling', 'no');
      const frames = await `https://miniapoly.com/registry/create-external-product/dekstop?url=${url}`
      iframe.src = frames;

      document.body.appendChild(iframe);
    },
  });
});