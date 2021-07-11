from abc import ABC, abstractmethod
import json
import csv
from file_compressor import GzipCompressor, ZipCompressor


class SalesReport(ABC):
    FILE_EXTENSION = ""

    def __init__(self, export_file, compressor=GzipCompressor):
        self.export_file = export_file
        self.compressor = compressor

    def build(self):
        return [
            {"column_1": "value", "column_2": "value"},
            {"column_1": "value", "column_2": "value"},
        ]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    def get_export_file_name(self):
        return self.export_file + self.FILE_EXTENSION

    def compress(self):
        export_file_name = self.get_export_file_name()

        self.serialize()
        self.compressor.compress(export_file_name)


class SalesReportJSON(SalesReport):
    FILE_EXTENSION = ".json"

    def serialize(self):
        report = self.build()
        filename = self.get_export_file_name()

        with open(filename, "w") as file:
            json.dump(report, file)


class SalesReportCSV(SalesReport):
    FILE_EXTENSION = ".csv"

    def serialize(self):
        report = self.build()
        filename = self.get_export_file_name()

        header = [column for column in report[0].keys()]

        data = []
        for row in report:
            data_row = []
            for column in header:
                data_row.append(row.get(column))
            data.append(data_row)

        with open(filename, "w") as file:
            writer = csv.writer(file)

            writer.writerow(header)
            writer.writerows(data)


if __name__ == "__main__":
    sales_report_json = SalesReportJSON("sales_report")
    expenses_report_json = SalesReportJSON("expenses_report", ZipCompressor())
    sales_report_csv = SalesReportCSV("sales_report")

    sales_report_json.compress()
    expenses_report_json.compress()
    sales_report_csv.serialize()
