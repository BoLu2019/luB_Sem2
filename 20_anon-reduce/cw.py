#team Reduce & Never Reuse - Bo Lu, Soojin Choi

from functools import reduce

def reader(filename):
    file = open(filename, "r")
    l = file.read().split("\n")
    list = []
    for each in l:
        list+=each.split(" ")


    print(list)
    return list



book = reader('excerpt.txt')
def freq(word):
    print("Frequency of: " + word + "-> " + str( len([x for x in book if x == word]) ) )

freq("the")
freq("I")


def freq_Group(wordList):
    list = wordList.split(" ")
    idk = []

    idk.append(reduce(lambda a,b :  a if a in list and b in list else b,book))
    print idk

freq_Group("we are wasting")
