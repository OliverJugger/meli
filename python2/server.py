#!/usr/bin/python
 
from http.server import HTTPServer
from http.server import CGIHTTPRequestHandler
 
PORT = 8888

if __name__ == '__main__':
    try:
        server = HTTPServer
        handler = CGIHTTPRequestHandler
        handler.cgi_directories = ['/cgi-bin']
        print("Serveur actif sur le port :", PORT)

        server_address = ("", PORT)
        httpd = server(server_address, handler)
        httpd.serve_forever()

    except KeyboardInterrupt:
        print("\nReceived keyboard interrupt. Shutting down server.")
        httpd.socket.close()