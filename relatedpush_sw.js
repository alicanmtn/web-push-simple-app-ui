self.addEventListener("push", (event) => {
  console.log(event.data.json());

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

  const title = data.notification.title;
  const message = data.notification.message;
  const config = {
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3",
    },
    body: message,
    icon: "images/logo.png",
    requireInteraction: true,
  };

  try {
    event.waitUntil(self.registration.showNotification(title, config));
  } catch (error) {
    console.log(error);
    self.registration.showNotification(title, config);
  }
});
