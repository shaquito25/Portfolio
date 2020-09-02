const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public")); /*Si no lo utilizamos no se pondran los estilos e imagenes */


app.get("/", function (req, res) {   /*Ubicacion de nuestro codigo HTML*/

    res.sendFile(__dirname + "/index.html");

})

app.post("/", function (req, res) {

            const name = req.body.name;
            const lastName = req.body.last;
            const mail = req.body.mail;

            const data = {  /*objeto creado desde la documentacion de mailchimp*/

                members: [{

                    email_address: mail,
                    status: "subscribed",
                    merge_fields: {

                        FNAME: name,
                        LNAME: lastName

                    }


                }]

            }

            const jsondata = JSON.stringify(data) 

            const url = "https://us17.api.mailchimp.com/3.0/lists/0f8734edef" /* ruta de nuestro correo*/

            const options = {  

                method: "POST",
                auth: "arturo1:31db5c85d143fbd15c12f5bf89e2b8f5-us17"

            }

            const request = https.request(url, options, function (response) { /*llamado a un request*/

                        if (response.statusCode === 200) {

                            console.log("OK!!")

                        } else {

                            console.log("NOT OK!")
                        }

                        response.on("data", function (data) {

                            console.log(JSON.parse(data));

                        })
                    
                    })
               
                    request.write(jsondata)
                    request.end()
                    console.log(name, lastName, mail);

                })

                        app.listen(3000, function () {

                            console.log("Server is running on port 3000")
                        })