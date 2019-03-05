# Bo Lu
# SoftDev2 Pd7
# K06 - Yummy Mongo py
# 2019-03-03


import pymongo

SERVER_ADDR = "167.99.230.120"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

#finds all restaurants in borough
def rest_borough(borough):
    return collection.find({"borough": borough})

#finds all restaurants at zip
def rest_zipcode(zipcode):
    return collecion.find({"address.zipcode": zipcode})

#finds all restaurants at zip w/ grade
def rest_zipcode_grade(zipcode, grade):
    return collection.find({"address.zipcode": zipcode, "grades.grade": grade})

#finds all restaurants at zip w/ lower than certain score
def rest_zipcode_score(zipcode, score):
    return collection.find({"address.zipcode": zipcode, "grades.score": {"$lt": score}})


#method to help check if methods are right
def test(arg):
    for stuff in arg:
        print(stuff)

#testeriino pepperino
test(rest_borough("Brooklyn"))

test(rest_zipcode("10013")) #ayy thats my home

test(rest_zipcode_grade("10013", "A"))

test(rest_zipcode_score("10013", 2))
