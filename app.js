window.addEventListener("load", async () => {
  const subscribeButton = document.querySelector("#subscribeButton");

  //register service worker
  const sW = await navigator.serviceWorker.register("./firebase-messaging-sw.js");
  console.log("Service Worker => ", sW);

  let urlB64ToUint8Array = (base64String) => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  subscribeButton.addEventListener("click", async () => {
    const serviceWorker = await navigator.serviceWorker.ready;

    const SERVERKEY =
      "BK3BKsyBoxXPQs8ID2OP1DkOhZOu7U_sNeKVJP-j75xSWzgdYosdYp9UyjUWA0-YgTsCX1KdU0qMxIOLBc1vMNU";

    try {
      const clientId = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(SERVERKEY),
      });

      console.log(clientId);
      console.log(JSON.stringify(clientId));
    } catch (error) {
      console.log("Hata meydana geldi, ", error);
    }
  });
});
