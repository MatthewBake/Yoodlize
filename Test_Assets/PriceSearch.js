module.exports = PriceSearch = (Website, PriceInfo) => {
    PriceInfo.forEach(Price => {
        Website
        .waitForElementVisible('@Advanced')
        .click('@Advanced')
        .setValue('@MinPrice', Price.Min)
        .setValue('@MaxPrice', Price.Max)
        .click("@SearchBtn")
        .waitForElementVisible('@Tag')
        .expect.element('@Tag').text.to.contain('price').before(5000)
        Website.click('@Advanced')
        .click('@ClearBtn')
    })
    }