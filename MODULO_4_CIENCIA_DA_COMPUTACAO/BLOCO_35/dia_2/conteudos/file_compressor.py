from abc import ABC, abstractmethod
from zipfile import ZipFile
import gzip


class FileCompressor(ABC):
    FILE_PATH = ''

    @abstractmethod
    def compress(self, filename):
        raise NotImplementedError


class GzipCompressor(FileCompressor):
    @classmethod
    def compress(cls, filename):
        full_path = cls.FILE_PATH + filename + ".gz"

        with open(filename, "rb") as file:
            with gzip.open(full_path, mode="wb") as gzip_file:
                gzip_file.writelines(file)


class ZipCompressor(FileCompressor):
    @staticmethod
    def compress(filename):
        with ZipFile(filename + ".zip", mode="w") as zip_file:
            zip_file.write(filename)
