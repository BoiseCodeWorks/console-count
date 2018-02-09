function MarvelService() {
  console.log(3)


  var key = '?apikey=e44062bbc76b37176b08325d5265a0f3';
  var baseUrl = 'http://gateway.marvel.com/v1/public/'

  var marvelCharacters = []
  var myTeam = []
  var monkeys = [{ id: 1, name: 'King Kong' }, { id: 2, name: 'Donkey Kong' }]

  this.getMyTeam = function () {
      console.log(17,"or",24)
      return myTeam
  }

  this.removeFromTeam = function (id) {
    console.log(20)
      var char = getCharacterById(myTeam, id)
    console.log(22)
      if(!char){return}

      var i = myTeam.indexOf(char)

      myTeam.splice(i, 1)

   }


  this.addToTeam = function (id) {
      //itterate over the marvel characters, find where the character.id == id
      //once found push into myTeam
      console.log(12)
      var marvelCharacter = getCharacterById(marvelCharacters, id)
      console.log(14)
      if (
          !marvelCharacter ||
          getCharacterById(myTeam, id) ||
          myTeam.length >= 5
      )
      { return }

      console.log('I CAN ADD THIS PERSON TO MY TEAM')
      myTeam.push(marvelCharacter)
  }

  // look up by id
  // function getMarvelCharacterById(id){
  //     for(var i = 0; i < arr.length; i++){
  //         var character = arr[i]
  //         if(id == character.id){
  //             return character
  //         }
  //     }
  // }

  // function checkMyListForCharacter(id){
  //     for(var i = 0; i < arr.length; i++){
  //         var character = arr[i]
  //         if(id == character.id){
  //             return character
  //         }
  //     }
  // }

  function getCharacterById(arr, id) {
      console.log(13,"or",15,"or",21)
      for (var i = 0; i < arr.length; i++) {
          var character = arr[i]
          if (id == character.id) {
              return character
          }
      }
  }

  this.getCharacters = function (callWhenDone) {
      console.log(6)
      // var data = localStorage.getItem('MarvelData')
      // if (data) {
      //     console.log('7a?')
      //     marvelCharacters = JSON.parse(data);
      //     return callWhenDone(marvelCharacters)
      // }
      $.get(baseUrl + 'characters' + key, function (response) {
          console.log('Data is back:', 9)
          localStorage.setItem('MarvelData', JSON.stringify(response.data.results))
          marvelCharacters = response.data.results;
          callWhenDone(marvelCharacters)
      })
  }

}