async function watchTutorialCallback(callback, errorCallback) {
    let userLeft = Math.round(Math.random());
  
    if (userLeft) {
      throw "User left.";
    } else {
      return "Thumbs up and Subscribe!";
    }
  }
  
  async function giveStatusMessage() {
    try {
      let message = await watchTutorialCallback();
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  }
  
  giveStatusMessage();