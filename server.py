import socket
import threading
import sys
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(("0.0.0.0", 8001))
s.listen(2)
conn, addr = s.accept()
print("connected from ", addr)
true = True


def rec(sock):
    global true
    while true:
        t = sock.recv(1024).decode("utf8")
        if t == "exit":
            true = False
        print(t)


try:
    trd = threading.Thread(target=rec, args=(conn,))
    trd.start()

    while true:
        t = input()
        if t == "exit":
            true = False
        conn.send(t.encode("utf8"))
except KeyboardInterrupt:
    s.close()
    print(">>>quit")
    sys.exit(0)
