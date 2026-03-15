from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configurations (optional)
app.config['SECRET_KEY'] = 'Talius#Pl4tf0rm'
app.config['DEBUG'] = True  # Turn off in production

# Home route
@app.route('/')
def home():
    return render_template('index.html')  # Make sure you have templates/index.html

# Example API route
@app.route('/login', methods=['GET'])
def login():
    return render_template('login.html')

@app.route('/ForgotPassword', methods=['GET'])
def forgotPassword():
    return render_template('forgot.html')

@app.route('/mfa', methods=['GET'])
def mfaPage():
    return render_template('mfa.html')

#admin pages
@app.route('/admin/dashboard', methods=['GET'])
def adminDashboard():
    return render_template('/admin_dashboard/dashboard.html')

@app.route('/admin/assets', methods=['GET'])
def adminAssets():
    return render_template('/admin_dashboard/asset.html')

@app.route('/admin/assetDisposal', methods=['GET'])
def adminDisposal():
    return render_template('/admin_dashboard/disposal.html')

@app.route('/admin/exceptions', methods=['GET'])
def adminExceptions():
    return render_template('/admin_dashboard/exceptions.html')

@app.route('/admin/reports', methods=['GET'])
def adminReports():
    return render_template('/admin_dashboard/reports.html')

@app.route('/admin/settings', methods=['GET'])
def adminSettings():
    return render_template('/admin_dashboard/settings.html')

@app.route('/admin/usefulLife', methods=['GET'])
def adminUsefulLife():
    return render_template('/admin_dashboard/useful_life.html')

@app.route('/admin/users', methods=['GET'])
def adminUsers():
    return render_template('/admin_dashboard/users.html')


#asset controller pages


# Error handling example
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404

@app.errorhandler(500)
def server_error(error):
    return jsonify({"error": "Server error"}), 500

# Run the app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
