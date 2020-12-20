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

data=pd.read_csv("protagonistret.csv")

X=data.iloc[:,2:]

X_transformed = power_transform(X, method='yeo-johnson')
scaler = MinMaxScaler(feature_range=(0,1))
X_transformed = scaler.fit_transform(X_transformed)
np.random.seed(42)
inertia = []
for i in range(2, 10):
    model = KMeans(n_clusters=i)
    model.fit(X_transformed)
    inertia.append(model.inertia_)
sns.pointplot(x=list(range(2, 10)), y=inertia)
plt.title('SSE on K-Means based on # of clusters')
'''plt.show()'''
np.random.seed(42)
model = KMeans(n_clusters=7)
model.fit(X_transformed)
cluster = model.predict(X_transformed)
data['cluster'] = cluster
for i in range(7):
    temp=data.loc[data['cluster']==i]
    temp.to_csv(f'mood{i}.csv')
