# get curl  https://dog.ceo/api/breeds/list/all 
# get message
# python getdatajson.py >> result.txt
import time
from socket import timeout
import logging
import urllib.request
import json

def get_data_breed(breed):    
    url = 'https://dog.ceo/api/breed/{}/images/random'.format('/'.join(breed))
    try:
        response = urllib.request.urlopen(url, timeout=15).read().decode('utf-8')
        json_res = json.loads(response) 
        # print(json_res)
        return  json_res.get('message')
    # except (HTTPError, URLError) as error:
    #     logging.error('Data of %s not retrieved because %s\nURL: %s', name, error, url)
    # except timeout:
    #     logging.error('socket timed out - URL %s', url)
    except:
        # logging.error('%s', e.message)
        return None
    # with urllib.request.urlopen(url) as res:
        # json_res = json.loads(res.read().decode('UTF-8'))
        # print(json_res)
        # result['-'.join(breed[::-1])] = { 'url': json_res.get('message') }
        
# print('starting request for all breed')
all_breeds =  {'terrier': ['american', 'australian', 'bedlington', 'border', 'dandie', 'fox', 'irish', 'kerryblue', 'lakeland', 'norfolk', 'norwich', 'patterdale', 'russell', 'scottish', 'sealyham', 'silky', 'tibetan', 'toy', 'westhighland', 'wheaten', 'yorkshire'], 'saluki': [], 'borzoi': [], 'shiba': [], 'brabancon': [], 'clumber': [], 'ridgeback': ['rhodesian'], 'newfoundland': [], 'affenpinscher': [], 'dhole': [], 'weimaraner': [], 'spaniel': ['blenheim', 'brittany', 'cocker', 'irish', 'japanese', 'sussex', 'welsh'], 'kelpie': [], 'bullterrier': ['staffordshire'], 'samoyed': [], 'greyhound': ['italian'], 'corgi': ['cardigan'], 'wolfhound': ['irish'], 'rottweiler': [], 'kuvasz': [], 'pomeranian': [], 'leonberg': [], 'schnauzer': ['giant', 'miniature'], 'husky': [], 'cockapoo': [], 'mastiff': ['bull', 'english', 'tibetan'], 'pug': [], 'vizsla': [], 'otterhound': [], 'akita': [], 'malamute': [], 'mix': [], 'dachshund': [], 'airedale': [], 'retriever': ['chesapeake', 'curly', 'flatcoated', 'golden'], 'basenji': [], 'african': [], 'komondor': [], 'beagle': [], 'pinscher': ['miniature'], 'pembroke': [], 'pointer': ['german', 'germanlonghair'], 'pyrenees': [], 'entlebucher': [], 'dalmatian': [], 'dane': ['great'], 'deerhound': ['scottish'], 'mexicanhairless': [], 'labrador': [], 'sheepdog': ['english', 'shetland'], 'setter': ['english', 'gordon', 'irish'], 'germanshepherd': [], 'cattledog': ['australian'], 'pekinese': [], 'papillon': [], 'dingo': [], 'appenzeller': [], 'poodle': ['miniature', 'standard', 'toy'], 'springer': ['english'], 'malinois': [], 'eskimo': [], 'hound': ['afghan', 'basset', 'blood', 'english', 'ibizan', 'walker'], 'whippet': [], 'chow': [], 'keeshond': [], 'doberman': [], 'boxer': [], 'chihuahua': [], 'redbone': [], 'frise': ['bichon'], 'shihtzu': [], 'elkhound': ['norwegian'], 'bluetick': [], 'collie': ['border'], 'lhasa': [], 'coonhound': [], 'cairn': [], 'groenendael': [], 'cotondetulear': [], 'bouvier': [], 'schipperke': [], 'stbernard': [], 'maltese': [], 'mountain': ['bernese', 'swiss'], 'bulldog': ['boston', 'english', 'french'], 'puggle': [], 'briard': []}   
# try:
#     response = urllib.request.urlopen('https://dog.ceo/api/breeds/list/all', timeout=10).read().decode('utf-8')
#     json_respone = json.loads(response)
#     all_breeds = json_respone.get('message')
# except (HTTPError, URLError) as error:
#     logging.error('Data of %s not retrieved because %s\nURL: %s', name, error, url)
# except timeout:
#     logging.error('socket timed out - URL %s', url)
# else:
#     logging.info('Access successful.')
    
# with urllib.request.urlopen('https://dog.ceo/api/breeds/list/all', timeout=5) as res:
    # json_respone = json.loads(res.read().decode('UTF-8'))
    
with open('result.json', 'a') as fres:
    # print('Get all breed: {}'.format(all_breeds))
    # print('starting request for breed detail')
    result = {}
    for breed, value in all_breeds.items():    
        # print('{}-{}'.format(breed, value))
        breeds = [ [breed] ] if not value else [ [breed, v] for v in value ]
        # print('{}'.format(breeds))
        for b in breeds:
            # print('start request for breed detai: {}'.format(b))
            res = get_data_breed(b)
            key = '-'.join(b[::-1])
            if not res:
                res = get_data_breed(b)
            val = { 'url': res } if res else { 'url': b }
            # result['-'.join(b[::-1])] = { 'url': res } if res else { 'url': b }
            json.dumps({key: val}, fres)
            print(json.dumps({key: val}))
# print('Done request for breed detai: {}'.format(result))
# print('Done request for breed detai: {}'.format(json.dumps(result)))
with open('result3.json', 'wb') as res:
    json.dumps(result, res)