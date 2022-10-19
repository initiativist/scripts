import random

x = list(range(10000, 100000))
random.shuffle(x)

for x in x:
    print(x)