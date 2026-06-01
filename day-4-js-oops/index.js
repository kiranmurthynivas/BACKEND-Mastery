const express = require("express");

const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

function createDeveloper(name, role, skills) {
    return {
        name : name,
        role : role,
        skills : skills,
        introduce: function () {
            console.log(`Hi this ${this.name} , ${this.role}`)
        },
        showSkills: function() {
            for ( let skill of this.skills) {
                console.log(`${skill}`);
            }
        }
    }      
}

const dev1 = createDeveloper("Kiran", "Backend Learner", ["Node.js", "Express.js"]);

app.get("/about", (req, res) => {
    res.render("about", {
        dev1,
    })
})

app.listen(PORT , ()=> {
    console.log(`Server listening on PORT ${PORT}`);
});