const random_jokes = [
  {
    setup     : 'mock-What is the object oriented way to get wealthy ?',
    punchline : 'mock-Inheritance'
  },
  {
    setup     : 'mock-To understand what recursion is...',
    punchline : 'mock-You must first understand what recursion is'
  },
  {
    setup     : 'mock-What do you call a factory that sells passable products?',
    punchline : 'mock-A satisfactory'
  }
];
let random_joke_call_count = 0;
const mockMap = {
  'get /dev/random_joke': (req, res) => {
    const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
    random_joke_call_count += 1;
    setTimeout(() => {
      res.json(responseObj);
    }, 3000);
  }
};
export default mockMap;
