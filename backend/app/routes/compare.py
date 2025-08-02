from flask import Blueprint

bp = Blueprint('compare', __name__)

@bp.route('/compare')
def compare():
    return "Compare page"