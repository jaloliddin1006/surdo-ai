# your_app/consumers.py
import json
from channels.generic.websocket import WebsocketConsumer

class YourConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.send(text_data=json.dumps({
            'type':'connection_established',
            'message':'Connected',
        }))

    # async def disconnect(self, close_code):
    #     pass

    # async def receive(self, text_data):
    #     text_data_json = json.loads(text_data)
    #     message = text_data_json["message"]

    #     # Front-endga yangi xabar o'tkazish
    #     print(json.dumps({"message": message}))
    #     await self.send(text_data=json.dumps({"message": message}))

