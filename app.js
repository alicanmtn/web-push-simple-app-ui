window.addEventListener("load", async () => {
  const subscribeButton = document.querySelector("#subscribeButton");

  //register service worker
  const sW = await navigator.serviceWorker.register("./sw.js");
  console.log("Service Worker => ", sW);

  subscribeButton.addEventListener("click", async () => {
    const serviceWorker = await navigator.serviceWorker.ready;
    const clientId = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BADjUo07NGwAYB8hW3eaHbFgg-7JRo_NrCrXRzvd4n2ypR86KiXb9Pu5p6yVoeO9jdUWNGQMfRlewxpQ3FvJs98",
    });
  });
});
