addEventListener("message", async function(event) {
    if (event.data == 'closeIframe') {
        const oldIframe = document.getElementById('cm-frame');
        if (oldIframe) {
            oldIframe.remove();
            return;
        }   
    }

    if (event.data == 'openIframe') {
        console.log('xxxx') 
    }
  }, false);