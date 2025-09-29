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
        },{id: "nav-team",
          title: "Team",
          description: "members of the DreamXLab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-opportunity",
          title: "Opportunity",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/opportunity/";
          },
        },{id: "nav-facility",
          title: "Facility",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/facility/";
          },
        },{id: "nav-engagement",
          title: "Engagement",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/engagement/";
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
            },},{id: "projects-aftermath-atlas",
          title: 'Aftermath Atlas',
          description: "Aerial Robotic AI Agents Provide Real-Time Post-Disaster Intelligence",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Aftermath/";
            },},{id: "projects-flying-dna",
          title: 'Flying DNA',
          description: "Digital Twin + Networked System + AI (DNA) Reshape Future Air Mobility.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Flying_DNA/";
            },},{id: "projects-building-immunology",
          title: 'Building Immunology',
          description: "AI-based Immune Systems Protect You and Your Loved Ones in Buildings.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Immunology/";
            },},{id: "projects-infrasono",
          title: 'InfraSono',
          description: "Robots Perform AI Sonography on Infrastructure Systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Infrasono/";
            },},{id: "projects-see-through-robots",
          title: 'See-Through Robots',
          description: "Endowing Robots with AI-Based See-Through Capabilities To Save Lives and Sense Hidden Hazards.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Seethrough_Robots/";
            },},{id: "projects-ai-copilot-in-surgery",
          title: 'AI Copilot in Surgery',
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
      },];
