module.exports = DateSearch = (Website, dateInfo) => {
dateInfo.forEach(date => {
    Website
    .waitForElementVisible('@Advanced')
    .click('@Advanced')
    .setValue('@Pickup', date.PU)
    .setValue('@Dropoff', date.DO)
    .click("@SearchBtn")
    .waitForElementVisible('@Tag')
    .expect.element('@Tag').text.to.contain('availability').before(5000)
    Website.click('@Advanced')
    .click('@ClearBtn')
})
}