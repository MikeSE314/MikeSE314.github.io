from sys import argv
from random import randint

def roll(n, d, a):
    total = 0
    for i in range(n):
        total += randint(1, d)
    total += a
    return total

def main(arg):
    if arg.find("d") == -1:
        print("usage: python dice.py <m>d<n>[+<k>]\n"
                "\twhere <m> is how many dice\n"
                "\tand <n> is how many sides on those dice\n"
                "\tand <k> is an optional addition to the roll\n")
        return
    m = 0
    n = 0
    k = 0

    if arg.find("d") == 0:
        m = 1
    else:
        m = int(arg[0:arg.index("d")])
    if arg.find("+") == -1:
        n = int(arg[arg.index("d")+1 :])
    else:
        n = int(arg[arg.index("d")+1 : arg.index("+")])
        k = int(arg[arg.index("+")+1 :])

    return roll(m, n, k)

if __name__ == "__main__":
    if len(argv) < 2:
        print("usage: python dice.py <m>d<n>[+<k>]\n"
                "\twhere <m> is how many dice\n"
                "\tand <n> is how many sides on those dice\n"
                "\tand <k> is an optional addition to the roll\n")
    else:
        print(main(argv[1]))

