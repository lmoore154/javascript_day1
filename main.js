arr = []

class Movie {

  constructor(title, directorList, genreList, year, actorList, stars, metascore){
    this.title = title,
    this.directorList = directorList
    this.genreList = genreList
    this.year = year
    this.actorList = actorList
    this.stars = stars
    this.metascore = metascore
  }

}

arr.push(new Movie("Hot Fuzz", ["Edgar Wright"], ["Action", "Comedy", "Mystery"], "2007", ["Simon Pegg", "Nick Frost"], "7.9", "81"))

arr.push(new Movie("The Prestige", ["Christopher Nolan"], ["Drama", "Mystery", "Thriller"], "2006", ["Hugh Jackman", "Christian Bale", "Michael Caine", "Scarlett Johansson", "David Bowie"], "8.5", "66"))

arr.push(new Movie("Crouching Tiger, Hidden Dragon", ["Ang Lee"], ["Action", "Adventure", "Fantasy", "Romance"], "2000", ["Yun-Fat Chow", "Michelle Yeoh", "Ziyi Zhang", "Chen Chang"], "7.9", "93"))

arr.push(new Movie("The Departed", ["Martin Scorsese"], ["Crime", "Drama", "Thriller"], "2006", ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson", "Mark Wahlberg", "Martin Sheen", "Alec Baldwin"], "8.5", "85"))

arr.push(new Movie("Ratatouille", ["Brad Bird", "Jan Pinkava"], ["Animation", "Comedy", "Family", "Fantasy"], "2007", ["Patton Oswalt", "Lou Romano", "Peter O'Toole", "Janeane Garofalo", "Ian Holm"], "8.0", "96"))


console.log(JSON.parse(JSON.stringify(arr.sort(function(a, b) {
  return a.title > b.title        // stackoverflow answer how to get later sorting not to affect earlier calls
}))))

console.log(JSON.stringify(arr))

console.log(arr.sort(function(a, b) {
  return b.stars > a.stars
}))

// Adventure

worst = []

worst.push(new Movie("Batman & Robin", ["Joel Schumacher"], ["Action", "Fantasy"], "1997", ["Arnold Schwarzenegger", "George Clooney", "Chris O'Donnell", "Uma Thurman", "Alicia Silverstone"], "3.7", "28"))

worst.push(new Movie("Starship Troopers", ["Paul Verhoeven"], ["Action", "Adventure", "Sci-Fi", "Thriller"], "1997", ["Casper Van Dien", "Dina Meyer", "Denise Richards", "Jake Busey", "Neil Patrick Harris"], "7.2", "51"))

worst.push(new Movie("Armageddon", ["Michael Bay"], ["Action", "Adventure", "Sci-Fi", "Thriller"], "1998", ["Bruce Willis", "Ben Affleck", "Billy Bob Thornton", "Liv Tyler"], "6.6", "42"))

worst.push(new Movie("Warcraft: The Beginning", ["Duncan Jones"], ["Action", "Adventure", "Fantasy"], "2016", ["Travis Fimmel", "Paula Patton", "Ben Foster", "Dominic Cooper", "Toby Kebbell", "Ben Schnetzer"], "7.0", "32"))


function makeTable(title, array){

  tempHTML = "<div class=\"row header\"><h1>" + title + "</h1></div>"

  tempHTML += "<div class=\"row\"><table class=\"table theader\"><tr><th>Title</th><th>Director List</th><th>Genre</th><th>Year</th><th>Actor List</th><th>Star Rating</th><th>Metascore</th></tr>"

  array.sort(function(a, b){
    return b.stars > a.stars
  }).forEach(function(movie){
    tempHTML += "<tr>"
    tempHTML += "<td>" + movie.title + "</td>"
    tempHTML += "<td>" + movie.directorList + "</td>"
    tempHTML += "<td>" + movie.genreList + "</td>"
    tempHTML += "<td>" + movie.year + "</td>"
    tempHTML += "<td>" + movie.actorList + "</td>"
    tempHTML += "<td>" + movie.stars + "</td>"
    tempHTML += "<td>" + movie.metascore + "</td>"
    tempHTML += "</tr>"
  })

  tempHTML += "</table></div>"
  element = document.getElementById("content")
  element.innerHTML += tempHTML
}

makeTable("Favorite Movies List", arr)
makeTable("Best and Worst", arr.concat(worst))
