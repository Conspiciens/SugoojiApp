import requests
from bs4 import BeautifulSoup
import json

source = requests.get("https://www.brainyquote.com/topics/motivational-quotes")
src = source.content
soup = BeautifulSoup(src, 'lxml')

quotes = []
authors = []
picture_links = []

def get_quotes(): 
    source = requests.get("https://www.brainyquote.com/topics/motivational-quotes")
    src = source.content
    soup = BeautifulSoup(src, 'lxml')


    for quote in soup.find_all('a',attrs={'class': 'b-qt'}):
        quotes.append(quote.text)
        # print(quote.text)

    for author in soup.find_all('a',attrs={'class': 'bq-aut'}):
        authors.append(author.text)

def get_pictures(): 
    for author in authors: 
        r = requests.get("https://www.google.com/search?q=" + str(author) + "&safe=strict&rlz=1C1CHBF_enUS925US925&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjSgNaHzszvAhUHKK0KHTltDj8Q_AUoAnoECAEQBA&biw=1268&bih=589")
        soup = BeautifulSoup(r.content, features="lxml")
        for link in soup.select("img[src^=http]"):
            if "http" in link.get('src'):
                picture_links.append(link.get('src'))
                break

def open_json(count):
    with open("quotes.json") as grade: 
        gr = json.load(grade)

        for i in range(count):
            gr["Quotes"].append({
                "Quote" : str(quotes[i]),
                "Author" : str(authors[i]),
                "Picture": str(picture_links[i]),
            })
                
            write_file(gr)


def write_file(gr):
    with open('quotes.json', 'w') as outfile:
        json.dump(gr, outfile, indent=4)


if __name__ == '__main__':
    get_quotes()
    get_pictures()
    count = len(quotes)
    open_json(count)
