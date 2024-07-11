self.addEventListener("push", function (event) {
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
  var options = {
    body: data.notification.message,
    icon: data.notification.icon,
    tag: data.notification.tag,
    data: data.notification.data,
    image: data.notification.image,
    actions: data.notification.data.actions,
    requireInteraction: true,
  };
  var title = data.notification.title;
  try {
    event.waitUntil(self.registration.showNotification(title, options));
  } catch (error) {
    console.log(error);
    self.registration.showNotification(title, options);
  }
});
