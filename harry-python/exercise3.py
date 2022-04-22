Weight = int(input("Weight: "))
Unit = input("(K)g or (L)bs: ")
if Unit.upper() == "K":
    converted = Weight / 0.45
    print("Weight in Lbs: " + str(converted))
else:
    converted = Weight * 0.45
    print("Weight in Kgs: " + str(converted))





