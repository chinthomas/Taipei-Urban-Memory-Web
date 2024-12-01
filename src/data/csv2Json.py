import csv
import json

def make_json(csvFilePath, jsonFilePath):
    
    # create a list of dictionary
    data = []
    
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        
        # Convert each row into a dictionary 
        # and add it to data
        id = 1
        for rows in csvReader:
            print(rows)
            # Assuming a column named 'No' to
            # be the primary key
            element = {}
            element["id"] = id
            element["year"] = rows["年代與日期"]
            element["members"] = rows["跟什麼有關"]
            element["description"] = rows["事件"]
            element["source"] = rows["資料來源（哪一段、哪一頁）"]
            id = id + 1
            data.append(element)
    # Open a json writer, and use the json.dumps() 
    # function to dump data
    with open(jsonFilePath, 'w', encoding='big5') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
        
# Driver Code
if __name__=="__main__":
  # Decide the two file paths according to your 
  # computer system
  csvFilePath = r'./journal-list.csv'
  jsonFilePath = r'./timelineElements.json'

  # Call the make_json function
  make_json(csvFilePath, jsonFilePath) 