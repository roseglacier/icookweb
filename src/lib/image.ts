// import selenium
// from selenium import webdriver
// import re
// browser = webdriver.Chrome()
// #avid拼接url
// AVID="AV90756001"
// url="https://search.bilibili.com/all?keyword="+AVID+"&from_source=nav_search_new"
// #得到网站源码
// browser.get(url)
// html=browser.page_source
// #寻找imgurl
// ulvideo=re.findall(r'<ul type="video" class="video-list clearfix">(.*?)</ul>',html,re.S)[0]
// divimg=re.findall(r'<div class="img"><div class="lazy-img">(.*?)</div>',ulvideo)[0]
// imgurl=re.findall(r'src="(.*?)" />',divimg)[0]
// print(imgurl)
// #拼接imgurl
// imgurl="http:"+imgurl
// #打开imgurl
// browser.get(imgurl)