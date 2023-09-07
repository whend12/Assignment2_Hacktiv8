function getInputValue(elementId) {
  return document.getElementById(elementId).value;
}

function Portofolio() {
  var Nama = getInputValue("inputnama");
  var role = getInputValue("inputrole");
  var Avaibility = getInputValue("inputavaibility");
  var Usia = getInputValue("inputusia");
  var Lokasi = getInputValue("inputlokasi");
  var Experience = getInputValue("inputyearsexperience");
  var Email = getInputValue("inputemail");

  // Validasi agar jika form tidak di isi maka default tidak hilang
  if (Nama) {
    document.getElementById("nama").innerHTML = Nama;
  }
  if (role) {
    document.getElementById("role").innerHTML = role;
  }
  if (Avaibility) {
    document.getElementById("Avaibility").innerHTML = Avaibility;
  }
  if (Usia) {
    document.getElementById("usia").innerHTML = Usia;
  }
  if (Lokasi) {
    document.getElementById("lokasi").innerHTML = Lokasi;
  }
  if (Experience) {
    document.getElementById("experience").innerHTML = Experience;
  }
  if (Email) {
    document.getElementById("email").innerHTML = Email;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return false;
}

// Action untuk Edit
var editButton = document.getElementById("editButton");

var form = document.querySelector(".form");

editButton.addEventListener("click", function (event) {
  event.preventDefault();
  form.scrollIntoView({ behavior: "smooth" });
});
