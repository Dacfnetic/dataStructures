# Error Handeling

while True:
    try:
        age = int(input('what\'s your age: '))
        10/age
        print(age)
    except ValueError:
        print('please enter a number')
    except ZeroDivisionError:
        print('please don\'t enter a zero')
    else:
        print('thank you!')
        break


