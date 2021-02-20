
if __name__ == '__main__':
    cadena = input()
    if len(cadena) > 5 and len(cadena) < 9 :
        cadena = cadena.lower()
        cadena = cadena.replace('<>', 'o')
        cadena = cadena.replace('()', 'o')
        cadena = cadena.replace('[]', 'o')
        cadena = cadena.replace('0', 'o')
        cadena = cadena.replace('i', 'l')
        cadena = cadena.replace('3', 'e')
        if cadena == 'google':
            print(True)
        else:
            print(False)
    else:
        print(False)