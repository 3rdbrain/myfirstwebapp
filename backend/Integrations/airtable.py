#from pyairtable import Table
from ..models.Onboardchecklist import Onboardchecklist
import os
from dotenv import load_dotenv
import requests
from typing import List

load_dotenv()

AIRTABLE_API_KEY = os.getenv("AIRTABLE_API_KEY")
#print(AIRTABLE_API_KEY)
BASE_ID = "appHkVGrSqxNVd0Il"
TABLE_NAME = "Onboarding checklist"

def fetch_employees() -> List[Onboardchecklist]:
    url = f"https://api.airtable.com/v0/{BASE_ID}/{TABLE_NAME}"
    headers = {
        "Authorization": f"Bearer {AIRTABLE_API_KEY}",
    }
    all_records = []
    params = {"pageSize": 100}
    while True:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()  # Raise an exception for HTTP errors
        data = response.json()
        records = data.get("records", [])
        print(records)
        for record in records:
            all_records.append(Onboardchecklist(
                name=record['fields'].get('Name', ''),
                when=record['fields'].get('When?', ''),
                complete=record['fields'].get('completed', ''),
                notes=record['fields'].get('notes', ''),
                relevantresources=record['fields'].get('relevantresources', ''),
                pointofcontact=record['fields'].get('pointofcontact', ''),
                email=record['fields'].get('email', '')
            ))
            offset = data.get("offset")
        if not offset:
            break
        params["offset"] = offset
    return all_records
