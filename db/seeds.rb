# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "json"
require "open-uri"


publicKey = "354b64a846079737d78c7b7ab3a299ea"


hash = "a904ee4ee86230876bf125b5355e902"

url = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=#{publicKey}&hash=#{hash}"
    data = URI.open(url).read
    @characters = JSON.parse(data)
    @characters = @characters.data.results

    @characters.each do |element|
      Character.create! name:  element["name"], description: element["description"], thumbnail: { path: ["path"], extension: ["extension"]}

    end
