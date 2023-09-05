function Portofolio() {
  var Nama = document.getElementById("inputnama").value;
  var role = document.getElementById("inputrole").value;
  var Avaibility = document.getElementById("inputavaibility").value;
  var Usia = document.getElementById("inputusia").value;
  var Lokasi = document.getElementById("inputlokasi").value;
  var Experience = document.getElementById("inputyearsexperience").value;
  var Email = document.getElementById("inputemail").value;

  document.getElementById("nama").innerHTML = Nama;
  document.getElementById("role").innerHTML = role;
  document.getElementById("Avaibility").innerHTML = Avaibility;
  document.getElementById("usia").innerHTML = Usia;
  document.getElementById("lokasi").innerHTML = Lokasi;
  document.getElementById("experience").innerHTML = Experience;
  document.getElementById("email").innerHTML = Email;

  return false;
}
