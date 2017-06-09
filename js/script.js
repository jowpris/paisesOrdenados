var datos = JSON.parse ('[{ "Name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" }, { "Name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" }, { "Name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" }, { "Name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" }, { "Name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" }, { "Name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" }, { "Name" : "Island Trading", "City" : "Cowes", "Country" : "UK" }, { "Name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" }, { "Name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" }, { "Name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" }, { "Name" : "North/South", "City" : "London", "Country" : "UK" }, { "Name" : "Paris spécialités", "City" : "Paris", "Country" : "France" }, { "Name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" }, { "Name" : "Simons bistro", "City" : "København", "Country" : "Denmark" }, { "Name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" }, { "Name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" }, { "Name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" }]');

var paises = [];

datos.forEach(function(element) {
  
   if(paises.indexOf(element["Country"])==-1){
      paises.push(element["Country"]); 
   }

}, this);

var tPaises = document.getElementById("paises");
paises = paises.sort();
paises.forEach(function(pais){

  var tr = document.createElement("tr");
  var ul = document.createElement("ul");

  tr.innerHTML = "<tr><td>"+pais+"</td>";
  
  datos.forEach(function(element){
      
    if(pais == element["Country"]){
      var templateCiudades = "<li>ciudad</li>";
      var li = document.createElement("li");
        
    li.textContent = element["City"];
    ul.appendChild(li);
    }
  });
    
    tr.innerHTML += "<td>"+ul.innerHTML+"</td></tr>";
    tPaises.appendChild(tr);

});