module.exports = {
   clickElement : asyncfunction(page, selector) {
      try {
        await page.waitForSelector(selector);  
        await page.click(selector);
      } catch (error)
      {`Selector is not clickable: ${selector}`}     
      };  
          
   getText : asyncfunction (page, selector) {
      try {
       await page.waitForSelector(selector);
       return await page.$eval(selector, (link) => link.textContent);    
      } catch (error) 
      {thrownewError(`Text is not available for selector:${selector}`)}
    };
}
