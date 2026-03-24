// src/data/experiences.js
import accel1 from "../assets/accel-1.png";
import accel2 from "../assets/accel-2.png";
import accel3 from "../assets/accel-3.png";
import meep1 from "../assets/meep-1.png";
import meep2 from "../assets/meep-2.png";
import meep3 from "../assets/meep-3.png";

export const projects = [
  {
    id: "proj-1",
    title: "Accel-O-Rot",
    subtitle: "IoT Automated Composting System",
    type: "Thesis Project",
    role: "Project Manager / QA Lead",
    description:
      "Accel-O-Rot combines rotary drum systems and IoT-enabled technologies into a single automated composting solution. It integrates sensor-based monitoring of environmental parameters with automated aeration and drum rotation, delivering AI-generated recommendations through a progressive web application.\n\nUsers can remotely monitor composting progress, receive real-time alerts, and access historical decomposition data for future research. As Project Manager, I led end-to-end project delivery, managing the team through Jira for sprint planning, milestone tracking, and task distribution. I also applied QA processes throughout the development cycle to validate sensor accuracy, automation logic, and overall system reliability.",
    tags: ["IoT", "PWA", "Jira", "QA", "AI Integration", "Flutter"],
    images: [accel1, accel2, accel3],
    link: null,
    repo: "https://github.com/Shinzho",
  },
  {
    id: "proj-2",
    title: "Meep Adventures",
    subtitle: "3D Educational Bullet Hell Game",
    type: "Game Dev Project",
    role: "Programmer / 3D Developer",
    description:
      "Meep Adventures is a 3D bullet hell-style educational game developed to help students understand fundamental digital logic concepts through interactive gameplay. It addresses the challenge of learning circuit design, which is often abstract and difficult to grasp through traditional exercises.\n\nThe gameplay represents different logic gate functions through bullet mechanics and enemy visual behaviors. Players interact with challenges that require applying knowledge of logic operations to complete rounds and defeat bosses. As programmer and 3D developer, I focused on building the game environment, lobby interface, UI enhancements, and 3D asset integration using block-style models and thematic background music.",
    tags: ["Godot Engine", "GDScript", "3D", "Game Dev", "UI Design", "Blender"],
    images: [meep1, meep2, meep3],
    link: null,
    repo: "https://github.com/Shinzho",
  },
];