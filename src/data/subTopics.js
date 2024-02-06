import Item from "./models";

const items = [
  {
    id: "electricity-mystery",
    subject: "science",
    subjectCode: 0,
    subSubject: "physics",
    subSubjectCode: 2,
    topic: {
      name: "electricity",
      id: 0,
    },
    subtopic: [
      {
        name: "electricity",
        id: 10,
      },
    ],
    title: "The Electrifying Mystery of the Mangoes",
    description:
      "This is a description of the video. Lorem ipsum dolor amet sit amesteur.",
    oneLinerSummaryOfDescription: "This is a description of the video",
    tags: "mitochondria, cell, powerhouse, science, biology, atp, energy",
    cover: "/image/subtopics/electricity.png",
    age: {
      min: 6,
      max: 12,
    },
    createdOn: "2023-12-28 10:49:00 PM",
    edition: {
      editionNumber: 1,
      updatedOn: "2023-12-28 10:52:05 PM",
    },
    contents: [
      {
        type: "comic",
        description: "This is a description of the video",
      },
      {
        type: "activity",
        description: "This is a description of the video",
      },
      {
        type: "mixed-reality",
        description: "This is a description of the video",
      },
      {
        type: "video",
        description: "This is a description of the video",
      },
    ],
    feedback: {
      aggregateRating: 5,
      rating: {
        5: 10,
        4: 5,
        3: 2,
        2: 1,
        1: 0,
      },
      reviews: [
        {
          name: "Sidharth Philkhana",
          rating: 5,
          review:
            "STEMQuest's Into the Mitochondria is a game-changer for learning science. As a student, I never thought I'd find mitochondria so interesting! The comic-style learning, hands-on activities, and VR experiences made complex topics feel like an adventure. STEMQuest is revolutionizing the way we learn, making it exciting and unforgettable!",
        },
        {
          name: "Lochan Mathukumilli",
          rating: 5,
          review:
            "Into the Mitochondria has been an amazing addition to STEMQuest's collection. Witnessing children delve into the intricacies of cell biology with excitement is incredibly rewarding. The comic's blend of education and entertainment is a testament to our commitment to making STEM accessible and enjoyable. Looking forward to more discoveries with STEMQuest! Kudos to the STEMQuest team for making STEM education so engaging!",
        },
      ],
    },
  },
  {
    id: "into-mitochondria",
    subject: "science",
    subjectCode: 0,
    subSubject: "biology",
    subSubjectCode: 0,
    topic: {
      name: "cell",
      id: 0,
    },
    subtopic: [
      {
        name: "mitochondria",
        id: 11,
      },
    ],
    title: "Into the Mitochondria",
    description:
      "This is a description of the video. Lorem ipsum dolor amet sit amesteur.",
    oneLinerSummaryOfDescription: "This is a description of the video",
    tags: "mitochondria, cell, powerhouse, science, biology, atp, energy",
    cover: "/image/subtopics/electricity.png",
    age: {
      min: 6,
      max: 12,
    },
    createdOn: "2023-12-28 10:49:00 PM",
    edition: {
      editionNumber: 1,
      updatedOn: "2023-12-28 10:52:05 PM",
    },
    contents: [
      {
        type: "comic",
        description: "This is a description of the video",
      },
      {
        type: "activity",
        description: "This is a description of the video",
      },
      {
        type: "mixed-reality",
        description: "This is a description of the video",
      },
      {
        type: "video",
        description: "This is a description of the video",
      },
    ],
    feedback: {
      aggregateRating: 4,
      rating: {
        5: 10,
        4: 5,
        3: 2,
        2: 1,
        1: 0,
      },
      reviews: [
        {
          name: "Sidharth Philkhana",
          rating: 5,
          review:
            "STEMQuest's Into the Mitochondria is a game-changer for learning science. As a student, I never thought I'd find mitochondria so interesting! The comic-style learning, hands-on activities, and VR experiences made complex topics feel like an adventure. STEMQuest is revolutionizing the way we learn, making it exciting and unforgettable!",
        },
        {
          name: "Lochan Mathukumilli",
          rating: 5,
          review:
            "Into the Mitochondria has been an amazing addition to STEMQuest's collection. Witnessing children delve into the intricacies of cell biology with excitement is incredibly rewarding. The comic's blend of education and entertainment is a testament to our commitment to making STEM accessible and enjoyable. Looking forward to more discoveries with STEMQuest! Kudos to the STEMQuest team for making STEM education so engaging!",
        },
      ],
    },
  },
  {
    id: "evolution",
    subject: "science",
    subjectCode: 0,
    subSubject: "biology",
    subSubjectCode: 0,
    topic: {
      name: "evolution",
      id: 3,
    },
    subtopic: [
      {
        name: "electricity",
        id: 10,
      },
    ],
    title: "The Evolution",
    description:
      "This is a description of the video. Lorem ipsum dolor amet sit amesteur.",
    oneLinerSummaryOfDescription: "This is a description of the video",
    tags: "mitochondria, cell, powerhouse, science, biology, atp, energy",
    cover: "/image/subtopics/electricity.png",
    age: {
      min: 6,
      max: 12,
    },
    createdOn: "2023-12-28 10:49:00 PM",
    edition: {
      editionNumber: 1,
      updatedOn: "2023-12-28 10:52:05 PM",
    },
    contents: [
      {
        type: "comic",
        description: "This is a description of the video",
      },
      {
        type: "activity",
        description: "This is a description of the video",
      },
      {
        type: "mixed-reality",
        description: "This is a description of the video",
      },
      {
        type: "video",
        description: "This is a description of the video",
      },
    ],
    feedback: {
      aggregateRating: 4.5,
      rating: {
        5: 10,
        4: 5,
        3: 2,
        2: 1,
        1: 0,
      },
      reviews: [
        {
          name: "Sidharth Philkhana",
          rating: 5,
          review:
            "STEMQuest's Into the Mitochondria is a game-changer for learning science. As a student, I never thought I'd find mitochondria so interesting! The comic-style learning, hands-on activities, and VR experiences made complex topics feel like an adventure. STEMQuest is revolutionizing the way we learn, making it exciting and unforgettable!",
        },
        {
          name: "Lochan Mathukumilli",
          rating: 5,
          review:
            "Into the Mitochondria has been an amazing addition to STEMQuest's collection. Witnessing children delve into the intricacies of cell biology with excitement is incredibly rewarding. The comic's blend of education and entertainment is a testament to our commitment to making STEM accessible and enjoyable. Looking forward to more discoveries with STEMQuest! Kudos to the STEMQuest team for making STEM education so engaging!",
        },
      ],
    },
  },
  {
    id: "sensors-demystified",
    subject: "engineering",
    subjectCode: 2,
    subSubject: "sensors-sensing-capabiltites",
    subSubjectCode: 0,
    topic: {
      name: "sensors",
      id: 3,
    },
    subtopic: [
      {
        name: "sensors",
        id: 10,
      },
    ],
    title: "Sensors Demystified",
    description:
      "This is a description of the video. Lorem ipsum dolor amet sit amesteur.",
    oneLinerSummaryOfDescription: "This is a description of the video",
    tags: "mitochondria, cell, powerhouse, science, biology, atp, energy",
    cover: "/image/subtopics/electricity.png",
    age: {
      min: 6,
      max: 12,
    },
    createdOn: "2023-12-28 10:49:00 PM",
    edition: {
      editionNumber: 1,
      updatedOn: "2023-12-28 10:52:05 PM",
    },
    contents: [
      {
        type: "comic",
        description: "This is a description of the video",
      },
      {
        type: "activity",
        description: "This is a description of the video",
      },
      {
        type: "mixed-reality",
        description: "This is a description of the video",
      },
      {
        type: "video",
        description: "This is a description of the video",
      },
    ],
    feedback: {
      aggregateRating: 4.5,
      rating: {
        5: 10,
        4: 5,
        3: 2,
        2: 1,
        1: 0,
      },
      reviews: [
        {
          name: "Sidharth Philkhana",
          rating: 5,
          review:
            "STEMQuest's Into the Mitochondria is a game-changer for learning science. As a student, I never thought I'd find mitochondria so interesting! The comic-style learning, hands-on activities, and VR experiences made complex topics feel like an adventure. STEMQuest is revolutionizing the way we learn, making it exciting and unforgettable!",
        },
        {
          name: "Lochan Mathukumilli",
          rating: 5,
          review:
            "Into the Mitochondria has been an amazing addition to STEMQuest's collection. Witnessing children delve into the intricacies of cell biology with excitement is incredibly rewarding. The comic's blend of education and entertainment is a testament to our commitment to making STEM accessible and enjoyable. Looking forward to more discoveries with STEMQuest! Kudos to the STEMQuest team for making STEM education so engaging!",
        },
      ],
    },
  },
  {
    id: 3,
    subject: "engineering",
    subjectCode: 2,
    subSubject: "sensors-sensing-capabiltites",
    subSubjectCode: 0,
    topic: {
      name: "sensors",
      id: 3,
    },
    subtopic: [
      {
        name: "sensors",
        id: 10,
      },
    ],
    title: "Sensors Demystified",
    description:
      "This is a description of the video. Lorem ipsum dolor amet sit amesteur.",
    oneLinerSummaryOfDescription: "This is a description of the video",
    tags: "mitochondria, cell, powerhouse, science, biology, atp, energy",
    cover: "/image/subtopics/electricity.png",
    age: {
      min: 6,
      max: 12,
    },
    createdOn: "2023-12-28 10:49:00 PM",
    edition: {
      editionNumber: 1,
      updatedOn: "2023-12-28 10:52:05 PM",
    },
    contents: [
      {
        type: "comic",
        description: "This is a description of the video",
      },
      {
        type: "activity",
        description: "This is a description of the video",
      },
      {
        type: "mixed-reality",
        description: "This is a description of the video",
      },
      {
        type: "video",
        description: "This is a description of the video",
      },
    ],
    feedback: {
      aggregateRating: 4.5,
      rating: {
        5: 10,
        4: 5,
        3: 2,
        2: 1,
        1: 0,
      },
      reviews: [
        {
          name: "Sidharth Philkhana",
          rating: 5,
          review:
            "STEMQuest's Into the Mitochondria is a game-changer for learning science. As a student, I never thought I'd find mitochondria so interesting! The comic-style learning, hands-on activities, and VR experiences made complex topics feel like an adventure. STEMQuest is revolutionizing the way we learn, making it exciting and unforgettable!",
        },
        {
          name: "Lochan Mathukumilli",
          rating: 5,
          review:
            "Into the Mitochondria has been an amazing addition to STEMQuest's collection. Witnessing children delve into the intricacies of cell biology with excitement is incredibly rewarding. The comic's blend of education and entertainment is a testament to our commitment to making STEM accessible and enjoyable. Looking forward to more discoveries with STEMQuest! Kudos to the STEMQuest team for making STEM education so engaging!",
        },
      ],
    },
  },
  {
    id: 3,
    subject: "engineering",
    subjectCode: 2,
    subSubject: "sensors-sensing-capabiltites",
    subSubjectCode: 0,
    topic: {
      name: "sensors",
      id: 3,
    },
    subtopic: [
      {
        name: "sensors",
        id: 10,
      },
    ],
    title: "Sensors Demystified",
    description:
      "This is a description of the video. Lorem ipsum dolor amet sit amesteur.",
    oneLinerSummaryOfDescription: "This is a description of the video",
    tags: "mitochondria, cell, powerhouse, science, biology, atp, energy",
    cover: "/image/subtopics/electricity.png",
    age: {
      min: 6,
      max: 12,
    },
    createdOn: "2023-12-28 10:49:00 PM",
    edition: {
      editionNumber: 1,
      updatedOn: "2023-12-28 10:52:05 PM",
    },
    contents: [
      {
        type: "comic",
        description: "This is a description of the video",
      },
      {
        type: "activity",
        description: "This is a description of the video",
      },
      {
        type: "mixed-reality",
        description: "This is a description of the video",
      },
      {
        type: "video",
        description: "This is a description of the video",
      },
    ],
    feedback: {
      aggregateRating: 4.5,
      rating: {
        5: 10,
        4: 5,
        3: 2,
        2: 1,
        1: 0,
      },
      reviews: [
        {
          name: "Sidharth Philkhana",
          rating: 5,
          review:
            "STEMQuest's Into the Mitochondria is a game-changer for learning science. As a student, I never thought I'd find mitochondria so interesting! The comic-style learning, hands-on activities, and VR experiences made complex topics feel like an adventure. STEMQuest is revolutionizing the way we learn, making it exciting and unforgettable!",
        },
        {
          name: "Lochan Mathukumilli",
          rating: 5,
          review:
            "Into the Mitochondria has been an amazing addition to STEMQuest's collection. Witnessing children delve into the intricacies of cell biology with excitement is incredibly rewarding. The comic's blend of education and entertainment is a testament to our commitment to making STEM accessible and enjoyable. Looking forward to more discoveries with STEMQuest! Kudos to the STEMQuest team for making STEM education so engaging!",
        },
      ],
    },
  },
].map((item) => Item(item));

export default items;
