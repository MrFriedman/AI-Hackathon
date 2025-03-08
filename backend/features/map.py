from flask import Flask, request, jsonify, render_template

import json

with open('data.json', 'r') as json_file:
    json_data = json.load(json_file)

app = Flask(__name__)

# Temporary storage for accidents (Replace this with a database later)
accidents = []


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/log-accident', methods=['POST'])
def log_accident():
    data = request.json
    accidents.append(data)
    return jsonify({"message": "Accident logged", "data": data}),


@app.route('/api/get-accidents', methods=['GET'])
def get_accidents():
    accidents = []
    accident = json_data["location"]["geometry"]["coordinates"]
    lng = accident[0]  # Longitude
    lat = accident[1]  # Latitude

    accidents.append({
        "lat": lat,
        "lng": lng
    })

    return jsonify(accidents)


if __name__ == '__main__':
    app.run(debug=True)

# http://127.0.0.1:5000/
