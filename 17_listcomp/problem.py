# Team Pizza - Bo Lu, Soojin Choi
# Softdev pd7
# k17 -- PPFTLCW
# 2019-04-15


def num1():
    list = []
    for i in range(5):
        x = str(i*22)
        list.append(x)
    print(list)
    return list


def num1_list():
    list = [str(x*22) for x in range(5)]
    print(list)
    return list


num1()
num1_list()


def num2():
    list = []
    x = 7
    for i in range(5):
        list.append(x + i*10)
    print(list)
    return list


def num2_list():
    rng = 5
    start = 7
    list = [(start+x*10) for x in range(rng)]
    print(list)
    return list


num2()
num2_list()


def num3(n):
    list = []
    for i in range(n):
        for j in range(3):
            list.append(i * j)
    print(list)
    return list


def num3_list(n):
    list = [i * j for i in range(n) for j in range(3)]
    print(list)
    return list


num3(3)
num3_list(3)

primes = [0,2,3,5,7] #kind of cheating a bit

def num4():
    list = []
    for x in range(101):
        if (x % 2 == 0 or x % 3 == 0 or x % 5 == 0 or x % 7 == 0) and x not in primes:
            list.append(x)
    print(list)
    return list
    
def num4_list():
    list = [x for x in range(101) if (x % 2 == 0 or x % 3 == 0 or x % 5 == 0 or x % 7 == 0) and x not in primes]
    print(list)
    return list

num4()
num4_list()

#num5 missing!!!
#unsure on how to do dis

def num6(num):
    list = []
    for x in range(1, num + 1):
        if num % x == 0:
            list.append(x)
    print(list)
    return list

def num6_list(num):
    list = [x for x in range(1, num + 1) if num % x == 0]
    print(list)
    return list

num6(80)
num6_list(80)
num6(40150)
num6_list(64108)


def num7(matrix):
    r = len(matrix)
    c = len(matrix[0])
    temp = []

    for i in range(r):
        temp2 = []
        for j in range(c):
            temp2.append(matrix[j][i])

        temp.append(temp2)
    print(temp)
    return temp


#not sure why this works, I just kept switching i and j around.
def num7_list(matrix):
    list = [matrix[i][j] for j in range(len(matrix))
            for i in range(len(matrix[0]))]
    print(list)
    return list

test= [[0, 1, 2],
        [0, 1, 3],
        [5, 1, 2]]
num7(test)
num7_list(test)
