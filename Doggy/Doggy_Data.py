import sqlite3
import psycopg2
from django.conf import settings
import os
from datetime import date
import time
import sys
import csv
import re
import traceback
def DoggyData(drop_table):
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Doggy.settings')
    # conn = sqlite3.connect('WC.db.sqlite')]
    dbsettings = settings.DATABASES['default']

    conn = psycopg2.connect(host=dbsettings["HOST"], database=dbsettings["NAME"],
                            user=dbsettings["USER"], password=dbsettings["PASSWORD"])
    cur = conn.cursor()
    if(drop_table == 'yes') :
        cur.execute('''
        DROP TABLE IF EXISTS Doggy_Info
        ''')
    cur.execute('''
    CREATE TABLE IF NOT EXISTS Doggy_Info (
        id SERIAL PRIMARY KEY,
        name TEXT,
        pic TEXT,
        caption  TEXT,
        des TEXT
        )
    ''')
    conn.commit()
    print("...")
    cur.close()
    print("Your Data has been successfully uploaded")
DoggyData('yes')
