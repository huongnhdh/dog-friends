import json
with open('./res-bak.json', 'r') as data:
    new_array_data = []
    json_array_data = json.load(data)
    for item in json_array_data:
        (k, v), = item.items()
        new_item =  {'code': k, **v}                
        new_array_data.append(new_item)
    print(new_array_data)