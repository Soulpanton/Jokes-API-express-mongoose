const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Found the data were here"))
    .catch((err) => console.log("ERROR ERROR , but heres the error", err));
