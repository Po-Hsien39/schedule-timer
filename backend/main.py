from flask import Flask, render_template
from flask_socketio import SocketIO, emit, join_room
import datetime
import uuid

app = Flask(__name__)
# app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")
session_state = {}
default_block = {
    "id": str(uuid.uuid4()),
    "title": "輸入事件內容",
    "time": 10,
    "unit": 'Min',
    "isActive": False,
    "startedAt": 0,
    "endedAt": 0
}
default_session = {
    "isActive": False,
    "timeStamp": [5, 10, 20, 30, 60],
    "startedAt": 0,
    "endedAt": 0,
    "blocks": [
        default_block.copy(),
    ]
}

@socketio.on('join-session')
def create_room(data):
    room_name = data.get('sessionName')
    join_room(room_name)
    print(session_state)
    if room_name not in session_state:
        session_state[room_name] = default_session.copy()
    print(session_state[room_name])
    emit('session-state', session_state[room_name])

@socketio.on('start-timer')
def start_timer(data):
    room, time = data.get('room'), data.get('time')
    session_state[room]['isActive'] = True
    session_state[room]['startedAt'] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    endTime = datetime.datetime.now() + datetime.timedelta(minutes=time)
    session_state[room]['endedAt'] = endTime.strftime("%Y-%m-%d %H:%M:%S")
    print(session_state[room])
    emit('session-state', session_state[room], room=room, broadcast=True)

@socketio.on('update-session')
def start_timer(data):
    room, id, time, unit, title = data.get('room'), data.get('id'), data.get('time'), data.get('unit'), data.get('title')
    for blocks in session_state[room]['blocks']:
        if blocks['id'] == id:
            blocks['time'] = time
            blocks['unit'] = unit
            blocks['title'] = title
    print(session_state[room])
    emit('session-state', session_state[room], room=room, broadcast=True)



if __name__ == '__main__':
    socketio.run(app)