while True:
    try:
        input_value = int(input("Digite um número: "))
        break
    except ValueError:
        print("Ops! Esse não é um número válido. Tente novamente...")

try:
    file = open("arquivo.txt", mode="r")
except OSError:
    print("Arquivo inexistente")
else:
    content = file.read()
    print(content)
finally:
    print("Manipulação finalizada")
