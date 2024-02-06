class Concept {
  id: string | number;
  subject: string;
  subjectCode: number;
  subjectColor: string;
  subSubject: string;
  subSubjectCode: number;
  topic: {
    name: string;
    id: number;
  };
  subtopic: {
    name: string;
    id: number;
  }[];
  title: string;
  description: string;
  oneLinerSummaryOfDescription: string;
  tags: string;
  cover: string;
  age: {
    min: number;
    max: number;
  };
  createdOn: string;
  edition: {
    editionNumber: number;
    updatedOn: string;
  };
  contents: {
    type: string;
    description: string;
  }[];
  feedback: {
    aggregateRating: number;
    rating: {
      [key: number]: number;
    };
    reviews: {
      name: string;
      rating: number;
      review: string;
    }[];
  };

  constructor({
    id,
    subject,
    subjectCode,
    subjectColor,
    subSubject,
    subSubjectCode,
    topic,
    subtopic,
    title,
    description,
    oneLinerSummaryOfDescription,
    tags,
    cover,
    age,
    createdOn,
    edition,
    contents,
    feedback
  }
  ) {
    this.id = id;
    this.subject = subject;
    this.subjectCode = subjectCode;
    this.subjectColor = subjectColor;
    this.subSubject = subSubject;
    this.subSubjectCode = subSubjectCode;
    this.topic = topic;
    this.subtopic = subtopic;
    this.title = title;
    this.description = description;
    this.oneLinerSummaryOfDescription = oneLinerSummaryOfDescription;
    this.tags = tags;
    this.cover = cover;
    this.age = age;
    this.createdOn = createdOn;
    this.edition = edition;
    this.contents = contents;
    this.feedback = feedback;
  }
}

export default Concept;