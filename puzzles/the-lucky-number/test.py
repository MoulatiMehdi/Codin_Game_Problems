def C(n: int, k: int) -> int:
    if k == 0 or k == n:
        return 1
    if k == 1 or k == n - 1:
        return n

    return C(n - 1, k) + C(n - 1, k - 1)


def LN(n: int) -> int:
    res = 0
    for i in range(0, n):
        res += C(n, i + 1) * 8 ** (n - (i + 1))
    return res * 2


def calc(nbr:str) -> int:
    track = []
    n = len(nbr)
    counting = 0
    for i in range(0, n):
        v = int(nbr[i])
        if (track.count(8) > 0) and (track.count(6) >0):
            break
        if len(track) != 0:
            c = v - ((track[-1] == 6 and v == 9) or (track[-1] == 8 and v >= 7))
            counting += c * 9 ** (n - i - 1)
        elif v != 0:
            if v <= 5:
                a = v
            elif v <= 7:
                a = 6
            else:
                a = 7
            b = int(v == 9) + int(v >= 7)
            counting += a * LN(n - i - 1) + b * 9 ** (n - i - 1)
        if v == 6 or v == 8:
            track.append(v)

    return counting


def count(l: int, r: int) -> int:
	    return calc(r) - calc(l) + isLucky(r)

def isLucky(nbr):
	    return (str(nbr).count('6') >= 1) ^ (str(nbr).count('8') >= 1)

l,r = input().split(' ')

print(count(l,r))