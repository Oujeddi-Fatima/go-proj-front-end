export class SearchJobStructure {
  attributes: string[] = [
    "title",
    "level",
    "description",
    "requirement",
    "requiredQalification",
    "postDate",
    "closeDate",
    "estimatedSalary",
    "skill['skill']",
    "questions",
    "address['state']",
    "address['city']"
  ];
  titles: string[] = [
    "Title",
    "Level",
    "Description",
    "Requirement",
    "Required Qalification",
    "Post Date",
    "Close Date",
    "Estimated Salary",
    "skill",
    "Questions",
    "State",
    "city"
  ];
}
