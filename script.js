let selectedPlatform = "";

const cityData = {
  Maharashtra: ["Mumbai","Pune"],
  Delhi: ["New Delhi"],
  Karnataka: ["Bangalore"]
};

function selectPlatform(btn, platform) {
  selectedPlatform = platform;
  document.querySelectorAll('.platform-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function updateCities() {
  const state = document.getElementById("state").value;
  const city = document.getElementById("city");

  city.innerHTML = "<option>Select City</option>";

  cityData[state].forEach(c=>{
    let opt = document.createElement("option");
    opt.textContent = c;
    city.appendChild(opt);
  });
}

function generatePolicy() {
  const data = {
    name: document.getElementById("name").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    platform: selectedPlatform
  };

  if(!data.name || !data.city || !data.state || !data.platform){
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("userData", JSON.stringify(data));
  window.location.href = "plan.html";
}