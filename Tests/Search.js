var YoodPage = {}

module.exports = { 
    beforeEach: browser =>{
    YoodPage = browser.page.YoodPage()
    YoodPage.navigate()
        .waitForElementPresent('img[src="/images/logo/blueRaw.png"]')
    },
    after: browser => {
        browser.end()
    },
'QO2MB-110 Search from Anywhere': browser => {
    
    // The user click on another page, by click the link.
    // The user verifies that the search option is still visible
    // The user repeats steps 1-2 a few more times.
    
YoodPage.pause(1000)
YoodPage.waitForElementPresent('@SearchField')
YoodPage.click('@Login')
.setValue('@User', "fake@fake.com")
.setValue('@Pass', "fakefake")
.click('@Submit')
YoodPage.pause(3000)
YoodPage.click('@Profile')
YoodPage.waitForElementPresent('@SearchField')
YoodPage.click('@List')
YoodPage.waitForElementPresent('@SearchField')

}
}