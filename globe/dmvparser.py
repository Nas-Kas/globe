import json
from pprint import pprint
from array import array

with open('dmvorg.json') as data_file:
    data = json.load(data_file)
#latitude
#pprint(data['data'][1][31])
#longitude
    
    count = 0;
for rows in data['data']:
    pprint(data['data'][count][32])
    count = count  + 1
    #pprint(data['data'][2][32])
