import requests
import time

def get_latest_trends():
    # Define the base URL for the Hacker News Algolia API
    base_url = "https://hn.algolia.com/api/v1/search"

    # Define the parameters for the query
    params = {
        "query": "SaaS OR entrepreneurs OR 'SaaS ideas'",
        "tags": "story",
        "hitsPerPage": 10,  # Number of results to fetch
        "numericFilters": "created_at_i>=" + str(int(time.time()) - 86400)  # Fetch results from the last 24 hours
    }

    # Send the GET request to the Hacker News Algolia API
    response = requests.get(base_url, params=params)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()

        # Extract relevant information from the response
        trends = []
        for hit in data["hits"]:
            trend = {
                "title": hit["title"],
                "url": hit["url"],
                "author": hit["author"],
                "points": hit["points"],
                "comments": hit["num_comments"]
            }
            trends.append(trend)

        return trends
    else:
        # If the request was not successful, print an error message
        print("Error: Unable to fetch trends from Hacker News")
        return []

# Example usage
latest_trends = get_latest_trends()
for trend in latest_trends:
    print("Title:", trend["title"])
    print("URL:", trend["url"])
    print("Author:", trend["author"])
    print("Points:", trend["points"])
    print("Comments:", trend["comments"])
    print()
