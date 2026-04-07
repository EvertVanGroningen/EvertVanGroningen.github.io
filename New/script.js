let currentProject = 0;

function scrollProjects(direction) {
    const projectBoxes = document.querySelectorAll('.project-box');
    const totalProjects = projectBoxes.length;
    
    // Remove active class from current project
    projectBoxes[currentProject].classList.remove('active');
    
    // Update current project index
    currentProject = (currentProject + direction + totalProjects) % totalProjects;
    
    // Add active class to new project
    projectBoxes[currentProject].classList.add('active');
}
