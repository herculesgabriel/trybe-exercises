def countdown(number):
    if number < 1:
        print("Finished!")
    else:
        print(number)
        countdown(number - 1)


countdown(5)
