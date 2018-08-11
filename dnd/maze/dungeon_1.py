# encoding=utf-8
from __future__ import print_function
from random import random, randint

def make_maze(width=40, height=40):
    maze = []
    for i in range(height):
        row = []
        for j in range(width):
            row.append(False)
        maze.append(row)
    # for i in range(len(maze)):
        # for j in range(len(maze[i])):
            # if random() < 0.5:
                # maze[i][j] = True
    print(maze)
    return maze

def create_rooms(maze, n=5):
    for x in range(n):
        corners = []
        corners.append(randint(0, len(maze)))
        corners.append(randint(corners[0], len(maze)))
        corners.append(randint(0, len(maze)))
        corners.append(randint(corners[2], len(maze)))
        for i in range(corners[1] - corners[0]):
            for j in range(corners[3] - corners[2]):
                maze[i + corners[0]][j + corners[2]] = True
    return maze


def print_maze(maze):
    for row in maze:
        for space in row:
            if space:
                print("██", end="")
            else:
                print("  ", end="")
        print("")

def main():
    print_maze(create_rooms(make_maze()))

if __name__ == "__main__":
    main()

