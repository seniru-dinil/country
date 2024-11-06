const searchFunction = async (val) => {
  buttonPressed();
  if (val == "") document.getElementById("row").innerHTML = "";
  const res = await fetch(`https://restcountries.com/v3.1/name/${val}`);
  const Jres = await res.json();
  console.log(Jres[0]);
  let data = Jres[0];

  const body = `
                <div class="col-md-4 height p-4">
            <div class="card  mx-auto" style="width: 18rem">
              <img src="${data.flags.png}" class="card-img-top" alt="..." class="img-fluid" style="width:100%; height: 150px;"/>
              <div class="card-body">
                <h5 class="card-title fs-3 py-3">${data.name.common}</h5>
                <h5 class="h6 ">Capital: ${data.capital} </h5>                
                <h5 class="h6 ">Population: ${data.population} </h5>                
          <a href="${data.maps.googleMaps}">
              <button class="btn btn-primary mt-3">View on Google</button>
          </a>            
              </div>            
            </div>
          </div>
  `;
  document.getElementById("row").innerHTML = body;
};

const buttonPressed = () => {
  document.getElementById("row").classList.toggle("active");
  document.getElementById("row").value = "";
};

let x = 21;

const setMainBody = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const Jres = await res.json();
  const row = document.getElementById("inner");
  console.log(Jres);
  let innerData = "";
  for (let i = 0; i < x; i++) {
    innerData += `
    <div class="col-md-4 height p-4">
            <div class="card  mx-auto" style="width: 18rem">
              <img src="${Jres[i].flags.png}" class="card-img-top" alt="..." class="img-fluid" style="width:100%; height: 150px;"/>
              <div class="card-body">
                <h5 class="card-title fs-3 py-3">${Jres[i].name.common}</h5>
                <h5 class="h6 opacity-75">Capital    : ${Jres[i].capital} </h5>                
                <h5 class="h6 opacity-75">Population : ${Jres[i].population} </h5>                
          <a href="${Jres[i].maps.googleMaps}">
              <button class="btn btn-primary mt-3">View on Google</button>
          </a>            
              </div>            
            </div>
          </div>
    `;
  }
  row.innerHTML = innerData;
};

setMainBody();

const reload = () => {
  x += 12;
  setMainBody();
};
