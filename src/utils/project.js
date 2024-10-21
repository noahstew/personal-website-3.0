function Project(title, tech, description, type, link, imgSrc, imgAlt) {
    this.title = title;
    this.tech = tech;
    this.description = description;
    this.type = type;
    this.link = link;
    this.img = {
        src: imgSrc,
        alt: imgAlt,
    };
}

const projects = [
    new Project(
        "Project 1",
        ["React", "Node.js"],
        "Project 1 Description",
        "Web",
        "https://noahstewdev.vercel.app",
        "https://via.placeholder.com/150", 
        "Project 1 Thumbnail" 
    ),
    new Project(
        "Project 2",
        ["React", "Node.js"],
        "Project 1 Description",
        "Web",
        "https://noahstewdev.vercel.app",
        "https://via.placeholder.com/150", 
        "Project 1 Thumbnail" 
    ),
    new Project(
        "Project 1",
        ["Dart", "Flutter"],
        "Project 1 Description",
        "Mobile",
        "https://noahstewdev.vercel.app",
        "https://via.placeholder.com/150",
        "Project 1 Thumbnail" 
    ),
    new Project(
        "Project 2",
        ["Dart", "Flutter"],
        "Project 2 Description",
        "Mobile",
        "https://noahstewdev.vercel.app",
        "https://via.placeholder.com/150",
        "Project 2 Thumbnail" 
    ),
    new Project(
        "Project 1",
        ["WebGL", "JavaScript"],
        "Project 1 Description",
        "WebGL",
        "https://noahstewdev.vercel.app",
        "https://via.placeholder.com/150", 
        "Project 1 Thumbnail" 
    ),
    new Project(
        "Project 2",
        ["WebGL", "JavaScript"],
        "Project 2 Description",
        "WebGL",
        "https://noahstewdev.vercel.app",
        "https://via.placeholder.com/150", 
        "Project 2 Thumbnail" 
    ),
];


export default projects;

