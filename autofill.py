
import datetime
import json
import pandas as pd
from fillpdf import fillpdfs

with open('data.json', 'r') as json_file:
    json_data = json.load(json_file)

form_fields = list(fillpdfs.get_form_fields('template.pdf').keys())


# Search for the field containing 'name and surname'
nameField = None
nameIndex = None
cellFields = []
cellIndexes = []
emailFields = []  # List to store multiple email fields
emailIndexes = []  # List to store indexes of email fields
vehicleField = None
vehicleIndex = None
registrationField = None
registrationIndex = None
damageField = None
damageIndex = None
weatherField = None
weatherIndex = None
dateFields = []
dateIndexes = []
placeField = None
placeIndex = None
timeField = None
timeIndex = None
homeField = None
homeIndex = None
workField = None
workIndex = None
videoField = None
videoIndex = None

for index, field in enumerate(form_fields):
    if 'Name  Surname' in field:
        nameField = field
        nameIndex = index
        print(f"Found name field: {nameField}")

    if 'Home Address' in field:
        homeField = field
        homeIndex = index
        print(f"Found name field: {homeField}")

    if 'Cell Number' in field:
        cellFields.append(field)
        cellIndexes.append(index)
        print(f"Found number field: {cellFields}")

    if 'Email' in field:
        emailFields.append(field)  # Store the field name
        emailIndexes.append(index)  # Store the index
        print(f"Found email field: {field}")

    if 'Vehicle make and model' in field:
        vehicleField = field
        vehicleIndex = index
        print(f"Found name field: {vehicleField}")

    if field == 'Registration Number':
        registrationField = field
        registrationIndex = index
        print(f"Found name field: {registrationField}")

    if field == 'alcohol or drugs':
        damageField = field
        damageIndex = index
        print(f"Found name field: {damageField}")

    if field == 'Weather conditions at time of accident':
        weatherField = field
        weatherIndex = index
        print(f"Found name field: {weatherField}")

    if 'Date' in field:
        dateFields.append(field)  # Store the field name
        dateIndexes.append(index)  # Store the index
        print(f"Found date field: {field}")

    if field == 'Time of accident_2':
        placeField = field
        placeIndex = index
        print(f"Found name field: {placeField}")

    if field == 'Time of accident':
        timeField = field
        timeIndex = index
        print(f"Found name field: {timeField}")

    if 'Work Address' in field:
        workField = field
        workIndex = index
        print(f"Found name field: {workField}")

    if 'SKETCH OF ACCIDENT' in field:
        videoField = field
        videoIndex = index
        print(f"Found name field: {videoField}")


name = "JOE BLACK"
cell = "081 495 8552"
email = "cc.cohen.cc@gmail.com"
vehicle = "Mazda CX-3"
registration = "CA458609"
home = "20 Ascot Road Milnerton Cape Town"
damage = json_data["description"]["generated"]
weather = json_data["weather"]
date = json_data["accidentDate"]
place = json_data["streetname"]
time = json_data["time"]
work = "UCT campus hiddingh road"
videoUpload = "https://rr-traffic-video-stream.s3.us-east-1.amazonaws.com/2019/video-1567085908865.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2MJP5IYU7K4O4LPV%2F20250307%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250307T213130Z&X-Amz-Expires=600000&X-Amz-Signature=855efe65804bb9a6535911e892000877256a83cb416d7f459d2bc648829c2d30&X-Amz-SignedHeaders=host&response-content-type=video%2Fmp4&x-id=GetObject"

data_dict = {

    form_fields[nameIndex]:  name,
    form_fields[vehicleIndex]:  vehicle,
    form_fields[registrationIndex]:  registration,
    form_fields[damageIndex]:  damage,
    form_fields[weatherIndex]:  weather,
    form_fields[placeIndex]:  place,
    form_fields[timeIndex]:  time,
    form_fields[homeIndex]:  home,
    form_fields[videoIndex]: f"<a href='{videoUpload}'>Click here</a>"

}

for i in range(len(emailFields)):
    data_dict[form_fields[emailIndexes[i]]] = email  # Fill each email field

for i in range(len(cellFields)):
    data_dict[form_fields[cellIndexes[i]]] = cell

for i in range(len(dateFields)):
    data_dict[form_fields[dateIndexes[i]]] = date

fillpdfs.write_fillable_pdf('template.pdf', 'filledIn.pdf', data_dict)
