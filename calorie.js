function buildtable(result){
  if (result.length>0)
  {
      let table = document.getElementById("mytable");
      table.innerHTML = `<tr>
      <th>Name</th>
      <th>Serving Size/g</th>
      <th>Calories</th>
      <th>Protein/g</th>
      </tr>`
      let tot_prot = 0;
      let tot_cal = 0;
      for (let i=0;i<result.length;i++)
      {
          let row = `<tr>
          <td>${result[i]["name"]}</td>
          <td>${result[i]["serving_size_g"]}</td>
          <td>${result[i]["calories"]}</td>
          <td>${result[i]["protein_g"]}</td>
          </tr>`
          tot_cal += result[i]["calories"];
          tot_prot += result[i]["protein_g"];
          table.innerHTML += row;
      }
      document.getElementById("result-cal").innerHTML += "<p>Total Calories: "+tot_cal.toFixed(2)+"</p><br><p>Total Protein: "+tot_prot.toFixed(2)+"</p>";
    }
    else if (result.length == 0)
    {
      document.getElementById("result-cal").innerHTML += "<p>Food Not Found!</p>";
    }
};
function calculate(){
  const query = document.getElementById("query").value;
  fetch("https://api.api-ninjas.com/v1/nutrition?query=" + query, {
    headers: {
      "X-Api-Key": "9pKHttugZf8eZlo15m994Q==xoiiWioT3GrOnvMl",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0]);
      buildtable(data);
    })
    .catch((error) => {
      console.error(error);
      
    });
}
$("#query").hover(function () {
  $(this).animate({ "width": "25%" }, 800)
})
