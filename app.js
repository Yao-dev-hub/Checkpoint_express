const express = require("express")
const app = express()
app.listen(5000,console.log("Serveur demarré avce succès 5000"))

app.set("view engine","ejs")
app.set("views","pages")

app.use(express.static("public"))

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/about", (req,res)=>{
    res.render("about")
})

app.get("/hopital", (req,res)=>{
    res.render("hopital")
})

app.get("/services", (req,res)=>{
    res.render("services")
})

app.get("/inscription", (req,res)=>{
    res.render("signInUp")
})

app.get("/connexion", (req,res)=>{
    res.render("login")
})

app.get("/contacts", (req,res)=>{
    res.render("contact")
})