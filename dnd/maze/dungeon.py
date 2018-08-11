
class Dungeon():
    """A dungeon"""

    def __init__(self, width=40, height=40):
        self.width = 40
        self.height = 40
        self.data = []
        for i in range(height):
            row = []
            for j in range(width):
                row.append(False)
            self.data.append(row)

    def print_maze(self, print_walk="#", print_wall=""):
        for row in self.data:
            for space in row:
                print(print_walk if space else print_wall, end="")
            print("", end="")

    def make_rooms(self, n=5):
        pass

    def cave(self, n=5):
        pass

