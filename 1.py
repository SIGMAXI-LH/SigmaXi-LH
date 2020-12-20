import requests
import spotipy
import spotipy.oauth2 as oauth2
import csv
import tensorflow
import keras
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
from sklearn.preprocessing import power_transform
from sklearn.preprocessing import MinMaxScaler
CLIENT_ID = '4d5b09fc9350447090f50634ec46d7d6'
CLIENT_SECRET = '83afe1e9545745f08335a1bd279defba'
AUTH_URL = 'https://accounts.spotify.com/api/token'
auth_response = requests.post(AUTH_URL, {
    'grant_type': 'client_credentials',
    'client_id': CLIENT_ID,
    'client_secret': CLIENT_SECRET,
})

auth_response_data = auth_response.json()

access_token = auth_response_data['access_token']

headers = {
    'Authorization': 'Bearer {token}'.format(token=access_token)
}

BASE_URL = 'https://api.spotify.com/v1/'

with open('protagonistret.csv', 'a+') as file:
        writer = csv.writer(file)
        writer.writerow(["name","URL","danceability", "loudness","speechiness","acousticness","liveness","energy","instrumentalness","valence","tempo"])    
def playlist(username, playlist_id):
    with open('protagonistret.csv', 'a+') as file:
        writer = csv.writer(file)
        results = spotify.user_playlist(username, playlist_id,
                                        fields='tracks,next,name,uri')
        
        

        tracks = results['tracks']
        while True:
                for item in tracks['items']:
                    if 'track' in item:
                        track = item['track']
                        
                    else:
                        track = item
                    try:
                        track_url = track['external_urls']['spotify']
                        r = requests.get(BASE_URL + 'audio-features/' + track_url[31:], headers=headers)
                        r = r.json()
                        writer.writerow([track['name'],track_url, r['danceability'], r['loudness'],r['speechiness'],r['acousticness'],r['liveness'],r['energy'],r['instrumentalness'],r["valence"],r["tempo"]])                    
                    except KeyError:
                        print(u'Skipping track {0} by {1} (local only?)'.format(
                                track['name'], track['artists'][0]['name']))
                if tracks['next']:
                    tracks = spotify.next(tracks)
                else:
                    break
    

token = access_token
spotify = spotipy.Spotify(auth=token)
file1 = open("myfile.txt","r")
c=file1.read()
c=c[34:]
c=c[:22]
li=[]
list.append(c)
list=['37i9dQZF1DX0XUfTFmNBRM','37i9dQZF1DX8j8N3CkBtqv']
for c in list:
    playlist('doldher', c)
    
