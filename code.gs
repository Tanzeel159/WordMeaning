function WORDMEANING(word) {
  
  word = encodeURI(word);
  var options = { muteHttpExceptions: true }
  
  try{
    const key = "XXX-XXXXXXXX-XXXXXX-XXXXX" //auth key obtained from sources like Merriam Webster
    const endpoint = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" //API end point URL
    
    const url = endpoint + word + "?key=" + key //create the actual url for the 3rd Party API endpoint
    
    const response = UrlFetchApp.fetch( url, options); //make request
    
    Logger.log(response); //log it just in case
    
    //parse the response and get the word meaning out from the response accordingly based on the 3rd party format
    // I am using Merriam Webster so, I have extracted the result accordingly
    
    const responseBody = JSON.parse(response.getContentText());
    Logger.log(responseBody);
    const {shortdef} = responseBody[0]
    const result = shortdef.map(def => `"${def}"\n` ).join(' ')
    Logger.log(result)
    
    //retrun the final result string
    return result
    
  }catch(err){
    // incase any exception occurs check the console
    Logger.log(err);
    return "Some Error Occurred. Check AppScript Executions"
  }
  
}