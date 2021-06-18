from flask import Flask
from datetime import datetime
import mysql.connector as mysql
import json
import bcrypt
import uuid

db = mysql.connect(
    host="localhost",
    user="root",
    passwd="yuliedri221293",
    database="blog")
print(db)

app = Flask(__name__)


@app.route('/post', methods=['GET', 'POST'])
def manage_posts():
    if request.method == 'GET':
        return get_all_posts()
    else:
        return add_post()


def add_post():
    data = request.get_json()
    print(data)
    query = "insert into post (id, author_name, title, publish_time) values (%s ,%s, %s, %s)"
    publish_time = datetime.now()
    author = "yuliedri@mail.com"
    post_title = "dog post"
    values = (data["id"], author, post_title, publish_time)
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    cursor.close()
    return "Post added"


def get_all_posts():
    query = "select id, author, title, publish_time from posts;"
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    cursor.close()
    print(records)
    header = ['id', 'author', 'title',  'publish_time']
    data = []

    for r in records:
        data.append(dict(zip(header, r)))

    return json.dumps(data, default=str)


if __name__ == "__main__":
    app.run()
