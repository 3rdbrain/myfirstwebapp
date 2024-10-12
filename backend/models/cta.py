from pydantic import BaseModel, EmailStr
from datetime import datetime

class CTAAction(BaseModel):
    name: str
    email: EmailStr
    action_time: datetime

# Example usage
if __name__ == "__main__":
    example_data = {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "action_time": datetime.now()
    }
    cta_action = CTAAction(**example_data)
    print(cta_action)