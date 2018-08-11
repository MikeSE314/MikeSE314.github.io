from sys import argv
from random import randint

def select_random_from(filename):
    with open(filename) as fn:
        for i, line in enumerate(fn):
            pass
        fn.seek(0)
        j_ = randint(0, i)
        for j, line in enumerate(fn):
            if j == j_:
                return line[:-1]

def first_name_boy():
    return select_random_from("res/boy_first.txt")

def first_name_girl():
    return select_random_from("res/girl_first.txt")

def last_name():
    return select_random_from("res/last.txt")

def boy_full():
    return first_name_boy() + " " + last_name()

def girl_full():
    return first_name_girl() + " " + last_name()

def main(arg):
    if arg == "boy":
        print(first_name_boy())
    elif arg == "girl":
        print(first_name_girl())
    elif arg == "last":
        print(last_name())
    elif arg == "boy_full":
        print(boy_full())
    elif arg == "girl_full":
        print(girl_full())
    else:
        print("usage:\n"
                "\tpython name.py [arg]\n"
                "\targ can be:\n"
                "\t\tboy - for a boy's first name\n"
                "\t\tgirl - for a girl's first name\n"
                "\t\tlast - for a surname\n"
                "\t\tboy_full - for a boy's first name and a surname\n"
                "\t\tgirl_full - for a girl's first name and a surname\n")

if __name__ == "__main__":
    if len(argv) > 1:
        main(argv[1])
    else:
        print("usage:\n"
                "\tpython name.py [arg]\n"
                "\targ can be:\n"
                "\t\tboy - for a boy's first name\n"
                "\t\tgirl - for a girl's first name\n"
                "\t\tlast - for a surname\n"
                "\t\tboy_full - for a boy's first name and a surname\n"
                "\t\tgirl_full - for a girl's first name and a surname\n")
