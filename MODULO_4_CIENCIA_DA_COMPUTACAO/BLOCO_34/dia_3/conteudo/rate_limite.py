import requests
import time

for _ in range(15):
    response = requests.get("https://www.cloudfare.com/rate-limit-test/")
    print(response.status_code)
    time.sleep(5)
