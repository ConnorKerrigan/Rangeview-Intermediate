import requests
from bs4 import BeautifulSoup
import os
import re

base=os.path.dirname(os.path.abspath(__file__))

to_replace = input("replace?: ")
new_text = input("with?: ")
h_or_b = None
while h_or_b is not ('h' or 'b'):
    h_or_b = input("head or body? h/b (default h): ") or "h"


for filename in os.listdir(base):
    f = os.path.join(base, filename)
    # check if file exists
    if os.path.isfile(f) and f.endswith('.html') and not f.endswith("Footer.html") and not f.endswith("LayoutTop.html"):
        print(f)

        html=open(f,encoding="utf8")
        soup=BeautifulSoup(html,'html.parser')
        target = None
        if h_or_b == "h":
            target = soup.head
        elif h_or_b == "b":
            target = soup.body
        if to_replace == "":
            #insert at end of target
            target.append(BeautifulSoup(new_text, 'html.parser'))
        elif target.find(text=re.compile(to_replace)):
            target.find(text=re.compile(to_replace)).replace_with(new_text)

        with open(f, "wb") as f_output:
            f_output.write(soup.prettify("utf-8"))


