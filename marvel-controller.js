function MarvelController(){
  console.log(2)


  var marvelService = new MarvelService()
  var myTeamElem = document.getElementById('my-team')
  var marvelElem = document.getElementById("marvel-characters")
  console.log(4)
  //Private
  function getCharacters(){
      console.log(5)
      marvelService.getCharacters(drawMarvel)
      console.log(7)
  }

  function drawMarvel(arr){
      console.log(10)
      var template = ''
      for(var i =0; i<arr.length;i++){
          var char = arr[i]
          char.description = char.description ? char.description : 'No Description Avalable'
          template +=`
          <div class="col s4">
    <img src="${char.thumbnail.path + '.' + char.thumbnail.extension}" alt="">
    <h4><b>Name:</b> ${char.name}</h4>
    <p><b>Description:</b> ${char.description}</p>
    <p><b>Comic Appearances:</b>${char.comics.available}</p>
    <button class="waves-effect waves-light btn" onclick="app.controllers.marvelCtrl.addToTeam(${char.id})">Add to team</button>
  </div>
          `
      }
      marvelElem.innerHTML = template
  }

  function drawMyTeam(arr){
    console.log(18,"or",25)
      var template = ''
      for(var i=0; i < arr.length; i++){
          var character = arr[i]
          template += `
              <div onclick="app.controllers.marvelCtrl.removeFromTeam(${character.id})">
                  ${character.name}
              </div>
          `
      }
      myTeamElem.innerHTML = template
  }

  function getMyTeam(){

  }


  //Public

  this.addToTeam = function addToTeam(id){
      console.log('add to team:',11)
      marvelService.addToTeam(id)
      console.log(16)
      drawMyTeam(marvelService.getMyTeam())
      
  }
  this.removeFromTeam = function removeFromTeam(id){
    console.log(19)
      marvelService.removeFromTeam(id)
    console.log(23)
      drawMyTeam(marvelService.getMyTeam())
  }

  this.search= function search(event){
    event.preventDefault();
    var formData = event.target
    var name = formData.name.value
    var position = formData.position.value
    debugger
  }



  getCharacters()
  console.log(8) 
}