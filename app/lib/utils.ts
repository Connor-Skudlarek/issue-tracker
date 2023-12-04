import { myData } from "./definitions";

export function getFakeData(): myData[] {
  const data = (() => {
    const fakeData = [];

    for (let i = 0; i < 20; i++) {
      const fakeObj = {
        ticketID: Math.floor(Math.random() * 1000000),
        priority: Math.floor(Math.random() * 10 + 1),
        description: "Some description",
        assigned: "To someone",
        status: "Unknown",
        comments: ["A comment", "another comment", "one more comment", "123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789Hello"],
        dateCreated: new Date().toLocaleString(),
        completeDate: "In the future",
      };
      fakeData.push(fakeObj);
    }
    return fakeData;
  })();

  return data;
}
