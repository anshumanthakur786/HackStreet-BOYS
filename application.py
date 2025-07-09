from flask import Flask, render_template, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # To allow connection from React frontend

@app.route('/')
def home():
    return render_template("index.html")  # Loads UI page from templates folder

if __name__ == '__main__':
    app.run(debug=True)

