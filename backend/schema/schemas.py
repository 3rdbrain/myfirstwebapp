
def individual_serial(todo) -> dict:
    return{
        "id": str(todo["_id"]),
        "name": todo["name"],
        "description": todo["description"],
        "complete": todo["complete"]

    }

def list_serial(todos) ->list:
    return[individual_serial(todo) for todo in todos]

def cta_serial(cta) -> dict:
    return{
        "id": str(cta["_id"]),
        "name": cta["name"],
        "email": cta["email"],
        "action_time": cta["action_time"]
    }

def list_cta_serial(ctas) -> list:
    return[cta_serial(cta) for cta in ctas]

def pet_serial(pet) -> dict:
    return {
        "id": str(pet["_id"]),
        "name": pet["name"],
        "species": pet["species"],
        "age": pet.get("age"),
        "owner_email": pet["owner_email"]
    }

def list_pet_serial(pets) -> list:
    return [pet_serial(pet) for pet in pets]