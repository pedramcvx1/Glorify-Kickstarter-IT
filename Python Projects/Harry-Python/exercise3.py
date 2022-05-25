Weight = int(input("Weight: "))
Unit = input("(K)g or (L)bs: ")
if Unit.upper() == "K":
    converted = Weight / 0.45
    print("Weight in Lbs: " + str(converted))
elif Unit.upper() == "L":
    converted = Weight * 0.45
    print("Weight in Kgs: " + str(converted))
else:print("Please enter a valid unit")





