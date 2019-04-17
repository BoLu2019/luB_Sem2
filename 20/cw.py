#team Reduction Eruption - Bo Lu, Soojin Choi

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
    print [freq(x) for x in wordList ]

freq_Group(["I", "the"])
