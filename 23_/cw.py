import random

# def make_HTML_heading(f):
#     txt = f()
#     def inner():
#         print(txt)
#         return '<h1>' + txt + '</h1>'
#     return inner

def make_HTML_heading(f):
    def inner():
        return '<h1>' + f() + '</h1>'
    return inner

#greet = make_HTML_heading(greet) the @make_HTML_heading does the same as previous
@make_HTML_heading #is called a decorator
def greet():
    greetings = [ 'Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word up']
    return random.choice(greetings)


print( greet() )


#task: create fib using memoization
#template below

def memoize(f):
    memo = {}
    def helper(x):
        memo.append(f(x))
        return f(x)
    return helper

def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

fib = memoize(fib)
print(fib(5))
