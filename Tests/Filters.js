var YoodPage = {}
let clicks = require("../Test_Assets/Clicks.js")
let clickEverything = require("../Test_Assets/ClickEverything.js")
let Date = require("../Test_Assets/Date.js")
let DateSearch = require("../Test_Assets/DateSearch.js")
let PriceSearch = require("../Test_Assets/PriceSearch.js")
let Price = require("../Test_Assets/Price.js")

module.exports = { 
    beforeEach: browser =>{
    YoodPage = browser.page.YoodPage()
    YoodPage.navigate()
        .waitForElementPresent('img[src="/images/logo/blueRaw.png"]')
    },
    after: browser => {
        browser.end()
    },

    'QO2MB-103 Search Filters': browser => {
        // User clicks on the Search link
        // User clicks on the Advanced Search Link
        // User checks one of the filter options.
        // User clicks on search
        // User confirms that search has filtered the results.
        YoodPage.waitForElementVisible('@SearchLink')
        .click('@SearchLink')
        clickEverything(YoodPage, clicks)
        PriceSearch(YoodPage, Price)
        YoodPage.waitForElementVisible('@Advanced')
        .click('@Advanced')
        .waitForElementPresent("@Rating")
        .click('@Rating')
        .click('@SearchBtn')
        .waitForElementVisible('@Tag')
        .expect.element('@Tag').text.to.contain('rating').before(5000)
        DateSearch(YoodPage, Date)

    }
}