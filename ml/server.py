from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    teamA = data.get('teamA')
    teamB = data.get('teamB')
    if not teamA or not teamB:
        return jsonify({'error': 'Teams required'}), 400
    pred = 'Draw' if teamA == teamB else f"{teamA} wins"
    return jsonify({'prediction': pred})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6000)
