# Bohui Lu
# SoftDev pd7
# K #16: Do You Even List?
# 2019-04-12

# vars to compare password to later on
caps = "ABCDEFHIJKLMNOPQRSTUVWXYZ"
lower = "abcdefghijklmnopqrstuvwxyz"
chars = ".?!&#,;:-_*"
num = "1234567890"

# func to check if theres upper,lower, and nums in a password


def minThreshold(pswd):
    print("Password inputted: " + pswd)
    sum = [1 if x in caps else 2 if x in lower else 3 if x in num else 0 for x in pswd]

    print("Curr pswd: " + str(sum) + "\n")

    if 1 in sum and 2 in sum and 3 in sum:
        print("Nice password buddy"+"\n")
        return True

    print("Try harder. Use thy creativity for a better password"+"\n")
    return False


print("------------------TESTING MINTHRESHOLD------------------")

minThreshold("Pass1234")
minThreshold("123poopy")


# func to rate a password based on its complexity
def ranker(pswd):
    print("Password inputted: " + pswd)

    score = 0

    upper = sum([1 for x in pswd if x in caps])
    print("caps: " + str(upper))

    low = sum([1 for x in pswd if x in lower])
    print("lower: " + str(low))

    number = sum([1 for x in pswd if x in num])
    print("number: " + str(number))

    special = sum([1 for x in pswd if x in chars])
    print("non-alphanumerical: " + str(special))

    if upper > 2:
        score += 3

    elif upper == 1:
        score += 2

    if low > 5:
        score += 2

    elif low < 3:
        score += 1

    if number > 4:
        score += 2

    elif number < 2:
        score += 1

    if special >= 2:
        score += 3

    elif special == 1:
        score += 2

    print("password rating: " + str(score) + "\n" )
    return score


print("------------------TESTING RANKER------------------")
ranker("PPAPppapsike12345&")
ranker("PINapplepie12345&*")
ranker("thispasswordsucks123")
ranker("S!1GhTlYb3tt3r")
