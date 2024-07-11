"use strict";
var retentionUrl = "https://pushr.euromsg.com/retention";

var version = "1.6";

var postToServer = function (endpoint, body) {
  fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("push", function (event) {
  console.log(event);

  var data = "";
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

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  var url = event.notification.data.url;
  var pushId = event.notification.data.pushId;
  var button_identifier = "";
  var isCloseAction = false;
  if (event.action) {
    var selectedAction = event.notification.data.actions.find(function (
      action
    ) {
      return action.action == event.action;
    });
    if (selectedAction && selectedAction.url && clients.openWindow) {
      clients.openWindow(selectedAction.url);
    } else {
      isCloseAction = true;
    }
    button_identifier = event.action;
  }
  postToServer(retentionUrl, {
    pushId: pushId,
    status: "O",
    button_identifier: button_identifier,
  });
  if (!isCloseAction) {
    try {
      event.waitUntil(
        clients
          .matchAll({
            type: "window",
          })
          .then(function (windowClients) {
            for (var i = 0; i < windowClients.length; i++) {
              var client = windowClients[i];
              console.log("WindowClient", client);
              if (client.url === url && "focus" in client) {
                return client.focus();
              }
            }
            if (clients.openWindow) {
              return clients.openWindow(url);
            }
          })
      );
    } catch (error) {
      console.log(error);
      event.waitUntil(
        clients
          .matchAll({
            type: "window",
          })
          .then(function (windowClients) {
            for (var i = 0; i < windowClients.length; i++) {
              var client = windowClients[i];
              console.log("WindowClient", client);
              if (client.url === url && "focus" in client) {
                return client.focus();
              }
            }
            if (clients.openWindow) {
              return clients.openWindow(url);
            }
          })
      );
    }
  }
});
