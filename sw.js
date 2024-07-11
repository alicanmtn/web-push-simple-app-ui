//sunucu üzerinden gelecek notificationları bize gösterecek yer

//bir push eventi meydana gelince bana bunu ver
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
        title: "Action 1",
      },
      {
        action: "close",
        title: "Bildirimleri Kapat",
      },
    ],
  };

  e.waitUntil(
    self.registration.showNotification("Burası Notification Başlığı..", config)
  );
});
