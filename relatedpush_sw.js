self.addEventListener("push", (event) => {
  var data = "";
  if (event.data) {
    data = event.data.json();
    if (data.data && data.data.notification) {
      data.notification = data.data.notification;
    }
  } else {
    console.log("notification payload error.");
    return 0;
  }
  const config = {
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3",
    },
    body: data.notification.message,
    icon: "images/logo.png",
    requireInteraction: true,
  };
  var title = data.notification.title;
  try {
    event.waitUntil(self.registration.showNotification("Title", config));

    event.waitUntil(self.registration.showNotification(title, config));
  } catch (error) {
    console.log(error);
    self.registration.showNotification(title, config);
  }
});
