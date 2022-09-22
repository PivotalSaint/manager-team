// create the about section
const generateAbout = aboutText => {
    if (!aboutText) {
      return '';
    }
  
    return `
      <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Your Information</h2>
        <p>${aboutText}</p>
      </section>
    `;
  };
  
  // create the projects section
  const generateProjects = projectsArr => {
    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Team Member</h2>
        <div class="flex-row justify-space-between">
        ${projectsArr
          .filter(({ feature }) => feature)
          //desc = id  || lang = intern/eng || position = || link =email || officeNum = phone //
          .map(({ name, id, languages, school, link, github, officeNum}) => {
            return `
            <div class="col-12 mb-2 bg-dark text-dark p-3">
              <h3 class="portfolio-item-title ml-2 my-1 px-2 py-1 bg-secondary text-dark">${name}</h3>
              <h5 class="portfolio-languages">
                Position:
                ${languages.map(languages => languages).join(',')}
              </h5>
              <p class="bg-secondary text-dark">Employee ID:${id}</p>
              <p class="bg-secondary text-dark">School: ${school}</p>
              <a class="btn is-responsive mt-auto ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${github}">Engineer's GitHub</a>
              <a href="mailto:${link}" class="btn is-responsive mt-auto ml-2 my-1 px-2 py-1 bg-secondary text-dark">Email this Team Member</a>
            </div>
          `;
          })
          .join('')}
        </div>
      </section>
    `;
  };
  
  // export function to generate entire page
  module.exports = templateData => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>TeamBuilding</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">Manager's Name:${header.name}</h1>
          <nav class="flex-row">
          <a href="mailto:${header.link}" class="btn is-responsive mt-auto">Email this Team Manager</a>
            <p class="ml-2 my-1 px-2 py-1 bg-secondary text-dark">Get in Touch:${header.officeNum}</p>
            <p class="ml-2 my-1 px-2 py-1 bg-secondary text-dark">Employee ID:${header.id}</p>
          </nav>
        </div>
      </header>
      <main class="container my-5">
        ${generateAbout(about)}
        ${generateProjects(projects)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Pivotal Saint</h3>
      </footer>
    </body>
    </html>
    `;
  };
  