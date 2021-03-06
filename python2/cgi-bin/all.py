import xlrd
import random
import json


def read_excel():
    path = 'C:\\Users\\omignot\\Desktop\\names.xls'
    sheet = 'f1'
    try:
        wb1 = xlrd.open_workbook(path, encoding_override="gb2312")
        wb1_sheet1 = wb1.sheet_by_name(sheet)
        
        
        experts="""["""
        
        
        for j in range(5, 62):   
        
            expert1_nom = wb1_sheet1.cell_value(j, 1)
            expert1_prenom = wb1_sheet1.cell_value(j, 2)
            expert1_num = wb1_sheet1.cell_value(j, 3)
            expert1_lieu = wb1_sheet1.cell_value(j, 4)
            expert1_expertise = wb1_sheet1.cell_value(j, 5)
            
            field1 = "nom"
            field2 = "prenom"
            field3 = "tel1"
            field4 = "type"
            
            if j != 61:
                experts+= "{"
                experts+= "\"nom\":\""+expert1_nom+"\","
                experts+= "\"prenom\":\""+expert1_prenom+"\","
                experts+= "\"tel1\":\""+expert1_num+"\","
                experts+= "\"lieu\":\""+expert1_lieu+"\","
                experts+= "\"type\":\""+expert1_expertise+"\"}"
                experts+=","
            else:
                experts+= "{"
                experts+= "\"nom\":\""+expert1_nom +"\","
                experts+= "\"prenom\":\""+expert1_prenom +"\","
                experts+= "\"tel1\":\""+expert1_num+"\","
                experts+= "\"lieu\":\""+expert1_lieu+"\","
                experts+= "\"type\":\""+expert1_expertise+"\"}"
    
        experts+= """]"""
       
        print('Content-Type: application/json')
        print('')
        print(experts)
    except xlrd.biffh.XLRDError:
         print("Le fichier d'entrée : \"" + path + "\" est vide")

read_excel()