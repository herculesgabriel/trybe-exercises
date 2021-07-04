import json
import random


def get_pokemons():
    with open("pokemons.json") as file:
        pokemons = json.load(file)
        pokemons_names = [pokemon["name"] for pokemon in pokemons["results"]]

        return pokemons_names


def get_random_pokemon():
    pokemons = get_pokemons()
    random_pokemon = random.choice(pokemons)

    return random_pokemon


def new_game(word):
    wrong_answer = True
    hint_size = 0

    while wrong_answer and hint_size < len(word):
        hint_size += 1

        print("Quem é esse pokémon?\nDica: ", end="")

        for index in range(hint_size):
            print(word[index], end="")

        answer = input("\n❓ -> ").lower()

        if answer == word:
            wrong_answer = False
            return "won"
        elif hint_size == len(word):
            wrong_answer = False
            print(f"\n🤦 A palavra é {word}\n")
            return "lost"
        else:
            print("\n😕 Não foi dessa vez.\n")


def start_game():
    player_score = 0

    pokemons = get_pokemons()

    while len(pokemons) > 0:
        pokemon = random.choice(pokemons)
        pokemons.remove(pokemon)

        result = new_game(pokemon.lower(), player_score)

        if result == "won":
            print("🎉 Parabéns!")
            player_score += 1
        else:
            player_score -= 1

        print(f"\n\nPontuação atual: {player_score}\n")

    print(f"🏁 Fim do jogo. Pontuação total: {player_score}")


start_game()
