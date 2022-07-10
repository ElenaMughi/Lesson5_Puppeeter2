module.exports = {
   clickElement:asyncfunction(page, selector){
      try {
        await page.waitForSelector(selector);  
        await page.click(selector);
      } catch (error)
      (`Selector is not clickable: ${selector}`)     
         
    }      
}
