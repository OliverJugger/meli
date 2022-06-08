import xlrd
import random
import json


def read_excel():
    path = 'C:\\Users\\omignot\\Desktop\\names.xls'
    sheet = 'f1'
    try:
        wb1 = xlrd.open_workbook(path)
        wb1_sheet1 = wb1.sheet_by_name(sheet)

        pickup1 = random.randint(5, 62)
        pickup2 = random.randint(5, 62)
        pickup3 = random.randint(5, 62)

        while wb1_sheet1.cell_value(pickup2, 5) == wb1_sheet1.cell_value(pickup1, 5):
            pickup2 = random.randint(5, 62)
        while wb1_sheet1.cell_value(pickup3, 5) == wb1_sheet1.cell_value(pickup1, 5) or wb1_sheet1.cell_value(pickup3, 5) == wb1_sheet1.cell_value(pickup2, 5):
            pickup3 = random.randint(5, 62)
        """
        for j in range(1, 6):
            print(wb1_sheet1.cell_value(pickup1, j))
        for j in range(1, 6):
            print(wb1_sheet1.cell_value(pickup2, j))
        for j in range(1, 6):
            print(wb1_sheet1.cell_value(pickup3, j))
        """
        expert1_nom = wb1_sheet1.cell_value(pickup1, 1)
        expert1_prenom = wb1_sheet1.cell_value(pickup1, 2)
        expert1_num = wb1_sheet1.cell_value(pickup1, 3)
        expert1_expertise = wb1_sheet1.cell_value(pickup1, 5)

        expert2_nom = wb1_sheet1.cell_value(pickup2, 1)
        expert2_prenom = wb1_sheet1.cell_value(pickup2, 2)
        expert2_num = wb1_sheet1.cell_value(pickup2, 3)
        expert2_expertise = wb1_sheet1.cell_value(pickup2, 5)

        expert3_nom = wb1_sheet1.cell_value(pickup3, 1)
        expert3_prenom = wb1_sheet1.cell_value(pickup3, 2)
        expert3_num = wb1_sheet1.cell_value(pickup3, 3)
        expert3_expertise = wb1_sheet1.cell_value(pickup3, 5)
        
        experts= "{"
        experts+= "\"nom\" :\"" + expert1_nom + "\","
        experts+= "\"prenom\" :\"" + expert1_prenom + "\","
        experts+= "\"tel1\" :\"" + expert1_num + "\","
        experts+= "\"type\" :\"" + expert1_expertise + "\","
        experts+= "\"nom2\" :\"" + expert2_nom + "\","
        experts+= "\"prenom2\" :\"" + expert2_prenom + "\","
        experts+= "\"tel12\" :\"" + expert2_num + "\","
        experts+= "\"type2\" :\"" + expert2_expertise + "\","
        experts+= "\"nom3\" :\"" + expert3_nom + "\","
        experts+= "\"prenom3\" :\"" + expert3_prenom + "\","
        experts+= "\"tel13\" :\"" + expert3_num + "\","
        experts+= "\"type3\" :\"" + expert3_expertise + "\"}"       

        print ('Content-Type: application/json')
        print ('')
        print(experts)
    except xlrd.biffh.XLRDError:
         print("Le fichier d'entrée : \"" + path + "\" est vide")

read_excel()