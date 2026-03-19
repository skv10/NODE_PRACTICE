function HomeResponse (req, res) {
    // send keyword behnid the scenes write the response and end the reponse
    // send is only with express and NOT NODEJS
    // by default for successful response please send 200 status code
    // send is mostly used for string things / html
    // send set header to text/plain
    res.status(200).send("Hello Welcome XYZ \n This is a website in EXPRESS get")
}


function AboutResponse  (req, res) {
    res.status(200).send("this website is created in express")
}

function ContactResponse (req, res)  {
    res.status(200).send("Email: skdfslkds;nkgn@fljfjc@gmailcom EXPRESS !!!!!!!!!")
}

module.exports = {HomeResponse, AboutResponse, ContactResponse}