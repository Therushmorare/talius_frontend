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
@app.route('/admin/login', methods=['GET'])
def login():
    return render_template('admin_login.html')

@app.route('/controller/login', methods=['GET'])
def controllerLogin():
    return render_template('asset_controller_login.html')

@app.route('/manager/login', methods=['GET'])
def managerLogin():
    return render_template('asset_manager_login.html')

@app.route('/custodian/login', methods=['GET'])
def custodianLogin():
    return render_template('custodian_login.html')

@app.route('/ForgotPassword', methods=['GET'])
def forgotPassword():
    return render_template('forgot.html')

@app.route('/verifyPage', methods=['GET'])
def verifyPage():
    return render_template('verify.html')

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

@app.route('/admin/asset/import', methods=['GET'])
def adminAssetImport():
    return render_template('/admin_dashboard/import_asset.html')

@app.route('/admin/asset/add', methods=['GET'])
def adminAssetAdd():
    return render_template('/admin_dashboard/asset_adder.html')

#asset controller pages
@app.route('/controller/scanner', methods=['GET'])
def assetScanner():
    return render_template('/asset_controller_dashboard/asset_scanner.html')

@app.route('/controller/assetVerification', methods=['GET'])
def assetVerification():
    return render_template('/asset_controller_dashboard/asset_verification.html')

@app.route('/controller/assets', methods=['GET'])
def controllerAssets():
    return render_template('/asset_controller_dashboard/assets.html')

@app.route('/controller/dashboard', methods=['GET'])
def controllerDashboard():
    return render_template('/asset_controller_dashboard/dashboard.html')

@app.route('/controller/exceptions', methods=['GET'])
def controllerException():
    return render_template('/asset_controller_dashboard/exceptions.html')

@app.route('/controller/settings', methods=['GET'])
def controllerSettings():
    return render_template('/asset_controller_dashboard/settings.html')

@app.route('/controller/verificationProcess', methods=['GET'])
def assetVerificationProcess():
    return render_template('/asset_controller_dashboard/verification.html')

#asset manager pages
@app.route('/manager/dashboard', methods=['GET'])
def managerDashboard():
    return render_template('/asset_manager_dashboard/dashboard.html')

@app.route('/manager/assets', methods=['GET'])
def managerAssets():
    return render_template('/asset_manager_dashboard/asset.html')

@app.route('/manager/assetDisposal', methods=['GET'])
def managerDisposal():
    return render_template('/asset_manager_dashboard/disposal.html')

@app.route('/manager/disposalRequest', methods=['GET'])
def disposalRequest():
    return render_template('/asset_manager_dashboard/disposal_request.html')

@app.route('/manager/exceptions', methods=['GET'])
def managerExceptions():
    return render_template('/asset_manager_dashboard/exceptions.html')

@app.route('/manager/reports', methods=['GET'])
def managerReports():
    return render_template('/asset_manager_dashboard/reports.html')

@app.route('/manager/settings', methods=['GET'])
def managerSettings():
    return render_template('/asset_manager_dashboard/settings.html')

@app.route('/manager/depreciationLedger', methods=['GET'])
def managerDepreciationLedger():
    return render_template('/asset_manager_dashboard/useful_life.html')

#custodian pages
@app.route('/custodian/dashboard', methods=['GET'])
def custodianDashboard():
    return render_template('/custodian_dashboard/asset.html')

@app.route('/custodian/assets', methods=['GET'])
def custodianAssets():
    return render_template('/custodian/asset.html')

@app.route('/custodian/reports', methods=['GET'])
def custodianReports():
    return render_template('/custodian_dashboard/reports.html')

@app.route('/custodian/settings', methods=['GET'])
def custodianSettings():
    return render_template('/custodian_dashboard/settings.html')

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
