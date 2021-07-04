import json


def read_file():
    with open("pokemon.json") as file:
        pokemons = json.load(file)
        pokemon_name = pokemons["results"][0]["name"]

        print(pokemon_name)


def read_file_content():
    with open("pokemon.json") as file:
        content = file.read()
        pokemons = json.loads(content)
        pokemon_name = pokemons["results"][0]["name"]

        print(pokemon_name)


def save_grass_pokemons():
    with open("filtered_pokemons.json", mode="w") as new_file:
        with open("pokemon.json") as file:
            pokemons = json.load(file)["results"]

            filtered_pokemons = [
                pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
            ]

            # json_result = json.dumps(filtered_pokemons)
            # new_file.write(json_result)
            json.dump(filtered_pokemons, new_file)


save_grass_pokemons()
