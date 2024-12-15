function Skill(name, imgSrc, categories) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.categories = categories;
}

export const skills = [
    new Skill("HTML", "/icons/html.png", ["Web", "Frontend", "Language"]),
    new Skill("CSS", "/icons/css.png", ["Web", "Frontend", "Language"]),
    new Skill("JavaScript", "/icons/javascript.png", ["Web", "Frontend", "Language"]),
    new Skill("Java", "/icons/java.png", ["Language"]),
    new Skill("Python", "/icons/python.png", ["Language", "Data Science"]),
    new Skill("SQL", "/icons/sql.png", ["Data Science", "Language", "Database"]),
    new Skill("R", "/icons/r.png", ["Data Science", "Language"]),
    new Skill("Dart", "/icons/dart.png", ["Mobile", "Language"]),
    new Skill("Bootstrap", "/icons/bootstrap.png", ["Web", "Frontend", "Framework"]),
    new Skill("Tailwind", "/icons/tailwind.png", ["Web", "Frontend", "Framework"]),
    new Skill("JQuery", "/icons/jquery.png", ["Web", "Frontend", "Framework"]),
    new Skill("React", "/icons/react.png", ["Web", "Frontend", "Framework"]),
    new Skill("Flutter", "/icons/flutter.png", ["Mobile", "Framework", "Frontend"]),
    new Skill("Node.js", "/icons/nodejs.png", ["Web", "Backend", "Framework"]),
    new Skill("Express", "/icons/expressjs.png", ["Web", "Backend", "Framework"]),
    new Skill("MySQL", "/icons/mysql.png", ["Database"]),
    new Skill("PostgreSQL", "/icons/postgressql.png", ["Database"]),
    new Skill("Firebase", "/icons/firebase.png", ["Database"]),
    new Skill("Git", "/icons/git.png", ["Tool"]),
    new Skill("GitHub", "/icons/github.png", ["Tool"]),
    new Skill("JUnit", "/icons/junit5.png", ["Tool"]),
    new Skill("Excel", "/icons/excel.png", ["Data Science"]),
    new Skill("Tableau", "/icons/tableau.png", ["Data Science"]),
];
