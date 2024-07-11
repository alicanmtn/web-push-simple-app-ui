self.addEventListener("push", (e) => {
  console.log("e.data.text() => ", e.data.text());

  const config = {
    body: e.data.text() || "Mesaj içeriği burada yer alıyor.",
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3",
    },
    icon: "images/logo.png",
    actions: [
      {
        action: "explore",
        title: "Action1",
        // icon: "images/"
      },
      {
        action: "close",
        title: "Bildirimi Kapat",
        // icon:
      },
    ],
  };

  e.waitUntil(
    self.registration.showNotification("Burası Notification Başlığı..", config)
  );
});
