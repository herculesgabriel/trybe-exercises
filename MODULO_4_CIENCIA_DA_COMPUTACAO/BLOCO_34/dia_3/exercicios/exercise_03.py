import requests

BASE_URL = "https://scrapethissite.com/pages/advanced/?gotcha=headers"
HEADERS = {"User-agent": "Mozilla", "Accept": "text/html"},

response = requests.get(BASE_URL, headers=HEADERS)

assert "bot detected" not in response.text
