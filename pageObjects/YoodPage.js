module.exports = {
url: "https://alpha.yoodlize.com/",
elements: {
SearchField: 'input[placeholder="Search for an item"]',
Menu:'#basic-nav-dropdown > div > img',
Profile: {selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU fXlLvD"])[3]', locateStrategy: 'xpath'},
List: {selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU fXlLvD"])[2]', locateStrategy: 'xpath'},
Login: {selector: '(//div[@class="sc-jqCOkK hXaYBt sc-gqjmRU fptSCa"])[3]', locateStrategy: 'xpath'},
User: 'input[name="email"]',
Pass: 'input[name="password"]',
Submit: 'button[type="submit"]',
SearchLink: {selector:'(//div[@class="sc-jqCOkK hXaYBt sc-gqjmRU fptSCa"])[1]', locateStrategy: 'xpath'},
Advanced: 'div[class="sc-jqCOkK NqsLm sc-gqjmRU SUbM"]',
Clothing: {selector: '(//ins[@class="iCheck-helper"])[1]', locateStrategy: 'xpath'},
Tag:'div[class="sc-kaNhvL kwEqLx"]',
Home: {selector: '(//ins[@class="iCheck-helper"])[3]', locateStrategy: 'xpath'},
Electronics: {selector: '(//ins[@class="iCheck-helper"])[5]', locateStrategy: 'xpath'},
Toys: {selector: '(//ins[@class="iCheck-helper"])[7]', locateStrategy: 'xpath'},
Business: {selector: '(//ins[@class="iCheck-helper"])[9]', locateStrategy: 'xpath'},
Recreations: {selector: '(//ins[@class="iCheck-helper"])[11]', locateStrategy: 'xpath'},
Lawn: {selector: '(//ins[@class="iCheck-helper"])[13]', locateStrategy: 'xpath'},
Misc: {selector: '(//ins[@class="iCheck-helper"])[15]', locateStrategy: 'xpath'},
Sporting: {selector: '(//ins[@class="iCheck-helper"])[2]', locateStrategy: 'xpath'},
Outdoor: {selector: '(//ins[@class="iCheck-helper"])[4]', locateStrategy: 'xpath'},
Tools: {selector: '(//ins[@class="iCheck-helper"])[6]', locateStrategy: 'xpath'},
Party: {selector: '(//ins[@class="iCheck-helper"])[8]', locateStrategy: 'xpath'},
Local: {selector: '(//ins[@class="iCheck-helper"])[10]', locateStrategy: 'xpath'},
Venues: {selector: '(//ins[@class="iCheck-helper"])[12]', locateStrategy: 'xpath'},
Experiences: {selector: '(//ins[@class="iCheck-helper"])[14]', locateStrategy: 'xpath'},
Pickup: 'input[name="startDate"]',
Dropoff: 'input[name="endDate"]',
Rating: 'div[class="sc-ebFjAB gAgqrj sc-bwzfXH hKiLMS sc-bdVaJa iHZvIS"]',
MinPrice: 'input[name="priceMin"]',
MaxPrice: 'input[name="priceMax"]',
SearchBtn: {selector: '(//button[@class="sc-esjQYD bonOTJ sc-ifAKCX kvYMhQ"])', locateStrategy: 'xpath'},
ClearBtn: {selector: '(//button[@class="sc-esjQYD hqodhR sc-ifAKCX opXhf"])', locateStrategy: 'xpath'},
Results: 'li[class="rc-pagination-total-text"]',
}
}