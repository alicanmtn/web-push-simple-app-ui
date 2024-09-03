window.addEventListener("load", async () => {
  const subscribeButton = document.querySelector("#subscribeButton");

  //register service worker
  const sW = await navigator.serviceWorker.register("./relatedpush_sw.js");
  console.log("Service Worker => ", sW);

  subscribeButton.addEventListener("click", async () => {
    const serviceWorker = await navigator.serviceWorker.ready;
    const clientId = await serviceWorker.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey:
          "BK3BKsyBoxXPQs8ID2OP1DkOhZOu7U_sNeKVJP-j75xSWzgdYosdYp9UyjUWA0-YgTsCX1KdU0qMxIOLBc1vMNU",
      })
      .then(() => {
        console.log(clientId);
        console.log(JSON.stringify(clientId));
      })
      .catch((err) => {
        console.log("Hata meydana geldi, ", err);
      });
  });
});
