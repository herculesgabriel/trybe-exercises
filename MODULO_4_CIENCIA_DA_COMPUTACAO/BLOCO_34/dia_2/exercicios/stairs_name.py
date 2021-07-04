def print_stairs_name(name):
    name_length = len(name)
    removed_letters = 0

    for index in range(name_length):
        for position in range(name_length - removed_letters):
            print(name[position].upper(), end="")

        removed_letters += 1
        print()


if __name__ == "__main__":
    name = input("Digite o seu nome: ")
    print_stairs_name(name)
