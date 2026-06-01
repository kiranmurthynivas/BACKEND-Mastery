class Developer {
    constructor(name , role , skills , experience) {
        this.name = name;
        this.role = role;
        this.skills = skills;
        this.experience = experience;
    };

    introduce() {
        console.log(`This is ${this.name}  Role : ${this.role}  Exp : ${this.experience}`);
        for( let skill of this.skills) {
            console.log(skill);
        }
    };

    addSkill( skill) {
        this.skills.push(skill);
    }

    showSkills() {
        for( let skill of this.skills) {
            console.log(skill);
        }
    }
}

const dev = new Developer("Kiran", "Backend Developer", ["Node.js"], 0);

dev.introduce();
dev.addSkill("Express.js");
dev.showSkills();