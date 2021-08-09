import requests
import json

response = requests.get("https://api.github.com/users")

users = json.loads(response.text)

for user in users:
    print(user["login"], user["url"])