self.addEventListener("push", (event) => {
  console.log("e.data.text() => ", event.data.text());

  const config = {
    body: event.data.text() || "Mesaj içeriği burada yer alıyor.",
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

  let data = "";
  if (event.data) {
    data = event.data.json();
    if (
      data.data &&
      data.data.notification &&
      typeof data.data.notification == "string"
    ) {
      data.notification = JSON.parse(data.data.notification);
    }
  } else {
    console.log("notification payload error.");
    return 0;
  }
  let options = {
    body: data.data.notification.message,
    icon: data.data.notification.icon,
    tag: data.data.notification.tag,
    data: data.data.notification.data,
    image: data.data.notification.image,
    actions: data.data.notification.data.actions,
    requireInteraction: true,
  };
  let title = data.data.notification.title;
  e.waitUntil(
    self.registration.showNotification("Burası Notification Başlığı..", options)
  );
});
