from abc import ABC, abstractmethod
from datetime import datetime


class LOGManipulator(ABC):
    @classmethod
    @abstractmethod
    def log(cls, message):
        raise NotImplementedError


class FileLOG(LOGManipulator):
    @classmethod
    def log(cls, message):
        with open("log.txt", "a") as log_file:
            print(message, file=log_file)


class ScreenLOG(LOGManipulator):
    @classmethod
    def log(cls, message):
        print(message)


class LOG:
    def __init__(self, manipulators):
        self.__manipulators = set(manipulators)

    def add_manipulator(self, manipulator):
        self.__manipulators.add(manipulator)

    def info(self, message):
        self.__log("INFO", message)

    def debug(self, message):
        self.__log("DEBUG", message)

    def alert(self, message):
        self.__log("ALERT", message)

    def error(self, message):
        self.__log("ERROR", message)

    def __log(self, type, message):
        for manipulator in self.__manipulators:
            formatted_message = self.__format(type, message)
            manipulator.log(formatted_message)

    def __format(self, type, message):
        time = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{type} - {time}]: {message}"


if __name__ == "__main__":
    manipulators = [FileLOG, ScreenLOG]
    log = LOG(manipulators)
    log.debug("O carregamento iniciou...")
    log.info("O carregamento foi concluído.")
    log.alert("Nem todos os dados puderam ser carregados.")
    log.error("Falha ao cadastrar novo usuário")
