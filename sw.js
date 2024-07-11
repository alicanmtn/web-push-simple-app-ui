//sunucu üzerinden gelecek notificationları bize gösterecek yer

//bir push eventi meydana gelince bana bunu ver
self.addEventListener("push", (e) => {
  console.log("e => ", e);

  const config = {
    body: e.data.text() || "Mesaj içeriği burada yer alıyor.",
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3",
    },
  };

  e.waitUntil(
    self.registration.showNotification("Burası Notification Başlığı..", config)
  );
});
