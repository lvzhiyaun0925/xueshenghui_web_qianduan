import os

from flask import *


app = Flask(__name__)


@app.errorhandler(404)
def page_not_found(error):
    return str(error)


@app.route('/', methods=["GET", "POST"])
def home():
    return redirect("https://www.lvzhiyuan0925.cn/")


@app.route('/api/login', methods=["GET"])
def login():
    passworld = request.args.get('passworld')  # 获取用户输入的密钥
    if passworld == 'XUEshenghui123':
        data = {'tf': True}
        return jsonify(data)
    else:
        data = {'tf': False}
        return jsonify(data)


@app.route('/api/listdir', methods=["GET"])
def listdir():
    dir_path = request.args.get('path') if request.args.get('path') != None else "."
    data = {'listdir': os.listdir(dir_path.replace('.', '/'))}
    return jsonify(data)
