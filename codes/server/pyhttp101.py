from http.server import BaseHTTPRequestHandler, HTTPServer
from socket import socket


class MyRequestHandler(BaseHTTPRequestHandler):
    def handle(self) -> None:
        print("Request method:", self.request)
        print("Headers:",self.command)
        return super().handle()



def run(server_class = HTTPServer, handler_class = MyRequestHandler):
    server_address = ('',8000) # host and port
    httpd: HTTPServer = server_class(server_address, handler_class)
    httpd.serve_forever()

run()


