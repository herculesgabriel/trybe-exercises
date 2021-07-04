import csv


def read_file():
    with open("balneabilidade.csv") as file:
        reader = csv.reader(file, delimiter=",", quotechar='"')
        # reader = csv.DictReader(file, delimiter=",", quotechar='"')
        header, *data = reader

        bathing_by_campaign = {}

        for row in data:
            campaign = row[6]
            bathing = row[2]
            # campaign = row["numero_boletim"]  # as linhas são dicionários
            # bathing = row["categoria"]

            if campaign not in bathing_by_campaign:
                bathing_by_campaign[campaign] = {
                    "Própria": 0,
                    "Imprópria": 0,
                    "Muito Boa": 0,
                    "Indisponível": 0,
                    "Satisfatória": 0,
                }
            bathing_by_campaign[campaign][bathing] += 1

        return bathing_by_campaign


bathing_by_campaign = read_file()

with open("bathing_report.csv", mode="w") as new_file:
    headers = [
        "Campanha",
        "Própria",
        "Imprópria",
        "Muito Boa",
        "Indisponível",
        "Satisfatória",
    ]

    writer = csv.writer(new_file)
    # writer = csv.DictWriter(file, fieldnames=header)

    writer.writerow(headers)

    for campaign, bathing in bathing_by_campaign.items():
        row = [campaign, *bathing.values()]
        # row = {"Campanha": campaign, **bathing}

        writer.writerow(row)
