module.exports = clickEverything = (placeholder, thingsToClick) => {
    thingsToClick.forEach(thingToClick => {
        placeholder
            .waitForElementVisible('@Advanced')
            .click('@Advanced')
            .waitForElementPresent(thingToClick)
            .click(thingToClick)
            .click('@SearchBtn')
            .waitForElementVisible('@Tag')
            .expect.element('@Tag').text.to.contain('category').before(5000)
        placeholder
            .click('@Advanced')
            .click('@ClearBtn')
          
    })
}