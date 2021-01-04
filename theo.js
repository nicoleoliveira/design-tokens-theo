const theo = require("theo");
 
theo
  .convert({
    transform: {
      type: "web",
      file: "./src/buttons.yml"
    },
    format: {
      type: "custom-properties.css"
    }
  })
  .then(scss => {
      console.log('completou: ', scss)
    // $button-background: rgb(0, 112, 210);
  })
  .catch(error => console.log(`Something went wrong: ${error}`));