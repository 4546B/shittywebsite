var numbers = [];
for (var i = 0; i < 100; i++) numbers.push(i);

function rock() {
var niall = prompt("niall is a rock in norway");
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
const nextURL = 'https://help.steampowered.com/en/faqs/view/647C-5CC1-7EA9-3C29'
  if (document.cookie.includes("niall")) {
    window.location.assign(nextURL)
  }
}
function niall() {
const nextURL = 'https://help.steampowered.com/en/faqs/view/647C-5CC1-7EA9-3C29'

let niallText = "niall is a rock in norway";
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

