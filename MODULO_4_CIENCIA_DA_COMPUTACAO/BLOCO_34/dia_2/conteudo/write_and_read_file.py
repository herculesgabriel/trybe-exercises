FILENAME = "meu_arquivo.txt"


def read_file(filename):
    file = open(filename, mode="r")

    content = file.read()
    print(content)
    file.close()


def write_file(filename, line=None, lines=None):
    file = open(filename, mode="w")

    if line and not lines:
        file.write(line)
    else:
        file.writelines(lines)

    file.close()


def write_binary_file(filename, data):
    file = open(filename, mode="wb")

    file.write(data)
    file.close()


def read_binary_file(filename):
    file = open(filename, mode="rb")

    content = file.read()
    print(content)

    file.close()


write_file(FILENAME, line="Primeira linha do arquivo!")
read_file(FILENAME)

lines_list = [f"{line}\n" for line in range(5)]

write_file("iterating_file.txt", lines=lines_list)
read_file("iterating_file.txt")

write_binary_file("binary_file.dat", b"C\xc3\xa1ssio 30")
read_binary_file("binary_file.dat")
