database = {"users": []}


class User:
    def __init__(self, name: str, email: str, password: str, recovery=""):
        self.name = name
        self.email = email
        self.password = password
        self.recovery = recovery

    def reset_password(self):
        user_mailer = Mailer("reset.password@we.com", "secret", self.email)
        user_mailer.send_email("Reset your password", "Here's the link...")


class UsersRepository:
    def __init__(self, users: list):
        database["users"] = users

    def save_user(self, user: User):
        database["users"].append(user)

    def get_user(self, email: str):
        found_users = [
            user for user in database["users"] if user.email == email
        ]

        return found_users[0]


class Mailer:
    def __init__(self, email_from: str, password_from: str, email_to: str):
        self.email_from = email_from
        self.password_from = password_from
        self.email_to = email_to

    def send_email(self, subject: str, body: str):
        print("Enviando email...")
        print(f"Dados:\nDe {self.email_from}\nPara {self.email_to}")
        print(f"Assunto: {subject}\nMensagem: {body}")
        print("Email enviado.", end="\n\n")


if __name__ == "__main__":
    users = [
        User("Hercules", "hercules@mail.com", "123456"),
        User("Pedro", "pedro@mail.com", "456123"),
    ]

    users_repository = UsersRepository(users)

    user_pedro: User = users_repository.get_user(email="pedro@mail.com")
    user_pedro.reset_password()
