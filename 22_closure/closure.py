
# Bohui Lu
# SoftDev pd7
# K22 -- Closure
# 2019-05-01

def inc(x):
    return x + 1

f=inc

print(f(10))

def adder(a, b):
    return a + b

def caller(c):
    print(c(2,4))
    print(c(3,5))

caller(adder)


def outer(x):
    def contains(l):
        return x in l
    return contains

contains_15 = outer(15)

print(contains_15([1,2,3,4,5])) #predict false bc no 15

print(contains_15([13, 14, 15, 16, 17])) #predict true bc 15 is there

print(contains_15(range(1,20))) #also true bc 15 is there


del outer
#outer(42) -> error: name is undefined

print(contains_15(range(14,20))) #still works despite outer being deleted


def repeat(word):
    def times(num):
        print (word*num)
    return times

r1 = repeat('hello')
r2 = repeat('goodbye')
#wanted outputs
r1(2) # hellohello
r2(2) #goodbyegoodbye

repeat('cool')(3) #coolcoolcool

# def outer():
#     x = "foo"
#     def inner():
#         x = "bar"
#     inner()
#     return x
#
# print(outer()) #returns foo bc in the inner fxn, x does not occupy same namespace as x from outer fxn


def outer():
    x = "foo"
    def inner():
        nonlocal x #only works in python3
        x = "bar"
    inner()
    return x

print(outer()) #i think it'll print bar this time

print("\n----------------NEXT SECTION----------------\n")


#Task:define fxn make_counter() such that ...
def make_counter():
    x = 0
    def count():
        nonlocal x
        x+=1
        print(x)

    return count


ctrl = make_counter()
ctrl() #-->  1
ctrl() #--> 2

ctrl2 = make_counter()
ctrl2() #--> 1
ctrl() #-->3
ctrl2() #--> 2
