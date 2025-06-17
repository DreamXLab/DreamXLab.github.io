// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-dreamx-lab",
          title: "DreamX Lab",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-opportunity",
          title: "Opportunity",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/opportunity/";
          },
        },{id: "nav-people",
          title: "People",
          description: "members of the DreamXLab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "awards-awards-and-honors",
          title: 'Awards and Honors',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards/award/";
            },},{id: "fundings-funded-projects",
          title: 'Funded Projects',
          description: "",
          section: "Fundings",handler: () => {
              window.location.href = "/fundings/funding";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-ai-powered-construction-jobsite",
          title: 'AI‑Powered Construction Jobsite',
          description: "Integrating LLM‑guided robotic assembly with non‑intrusive audio emotion monitoring into a holistic digital‑twin jobsite pipeline.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Manufacturing/";
            },},{id: "projects-mixed-traffic",
          title: 'Mixed Traffic',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Mixed%20Traffic/";
            },},{id: "projects-urban-subsurface-mapping",
          title: 'Urban Subsurface Mapping',
          description: "Preventing utility strikes through next‑gen subsurface digital twins",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Subsurface%20Mapping/";
            },},{id: "projects-urban-air-mobility",
          title: 'Urban air mobility',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Urban%20Air%20Mobility/";
            },},{id: "projects-ai-copilot-in-surgery",
          title: 'AI copilot in Surgery',
          description: "Redefine Surgery Intelligence",
          section: "Projects",handler: () => {
              window.location.href = "/projects/surgical_robot_system/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%75%61%69.%6C%69@%65%73%73%69%65.%75%66%6C.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shuai-li-02359762", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xeoJ8Y8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
