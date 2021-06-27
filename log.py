from flask import Flask, request, abort, make_response
from datetime import datetime
import mysql.connector as mysql
import json
from flask_cors import CORS
import bcrypt
import uuid
from pass import password

db = mysql.connect(
	host="localhost",
	user="root",
	passwd= password ,
	database="log")


app = Flask(__name__)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/login', methods=['POST'])
def login():
	data = request.get_json()

	query = "select id, password from users where email = %s"
	values = ( data['email'], )
	cursor = db.cursor()
	cursor.execute(query, values)
	record = cursor.fetchone()
	db.commit()
	cursor.close()
	if not record:
		abort(401)
	user_id = record[0]
	hashed_pwd = record[2].encode('utf-8')
	if bcrypt.hashpw(data['pass'].encode('utf-8'), hashed_pwd) != hashed_pwd:
		abort(401)

	session_id = str(uuid.uuid4())
	query = "insert into sessions (user_id, session_id) values (%s, %s) on duplicate key update session_id=%s"
	values = (user_id, session_id, session_id)
	cursor.execute(query, values)
	db.commit()
	resp_data = {"first_name": first_name, "user_id": user_id}
	resp = make_response(res_data)
	resp.set_cookie("session_id", session_id)
	return resp

@app.route('/logout', methods=['POST'])
def logout():
	data = request.get_json()
	query = "delete from sessions where user_id=%s"
	value = (data['user_id'], )
	cursor = db.cursor()
	cursor.execute(query, value)
	db.commit()
	cursor.close()
	resp = make_response()
	resp.set_cookie("session_id", '', expires=0)
	return resp

@app.route('/Signup', methods=['POST'])
def Signup():
	data = request.get_json()
	hashed_pwd = bcrypt.hashpw(data['pass'].encode('utf-8'), bcrypt.gensalt())
	query = "insert into users (email, first_name, last_name, pass) values (%s, %s, %s, %s)"
	values = ( data['email'],data['first_name'], data['last_name'], hashed_pwd)
	cursor = db.cursor()
	cursor.execute(query, values)
	new_user_id = cursor.lastrowid
	db.commit()
	cursor.close()
	resp = make_response()
	resp.set_cookie("session_id", '', expires =0)
	return resp




if __name__ == "__main__":
	app.run()
