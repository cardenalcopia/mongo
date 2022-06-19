class Prof
{
    constructor(name,age,nationality,profession)
    {
        this.name=name;
        this.age=age;
        this.nationality=nationality;
        this.profession=profession;

    }
}
function postProf()
{
    let profesional = new Prof(
      document.getElementById("name").value,
      document.getElementById("age").value,
      document.getElementById("nationality").value,
      document.getElementById("profession").value)
      const url ="http://localhost:3000/profesional";

      let param =
      {
          headers:{"Content-type":"application/json; charset= UTF-8"},
          body:JSON.stringify(profesional),
          method:"POST"
      }
      fetch(url,param)
      .then (function(data)
      {
          return data.json()
      })
      .then(function(result)
      {
          console.log(result)
          // if(result.error)
          //   document.getElementById("aviso").innerHTML="ERROR"
          // else
          // document.getElementById("aviso").innerHTML="creado"
          // console.log(result);
      })
}