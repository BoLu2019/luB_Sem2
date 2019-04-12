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
    list=[]
    x = 7
    for i in range(5):
        list.append(x+ i*10)
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



#def num3():
#    rng=9
#    for i in range(rng):
#        if(i/3 == 0)
#def num4():
def num7(matrix):
    r = len(matrix)
    c = len(matrix[0])
    temp = []
    
    for i in range(r):
        temp2=[]
        for j in range(c):
            temp2.append( matrix[j][i] )
            
        temp.append(temp2)
    print(temp)
    return temp

test = [ [0,1,2],
         [0,1,3],
         [5,1,2] ]
num7(test)
            
    
