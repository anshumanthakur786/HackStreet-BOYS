from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Home Page
@app.route('/')
def homepage():
    return render_template('homepage.html')

# Login Page
@app.route('/login')
def login():
    return render_template('login.html')

# Signup Page
@app.route('/signup')
def signup():
    return render_template('signup.html')

# Dashboard Page
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

# Budget Page
@app.route('/budget')
def budget():
    return render_template('budget.html')

# Chat Page
@app.route('/chat')
def chat():
    return render_template('chat.html')

if __name__ == '__main__':
    app.run(debug=True)
