const initState = {
  projects: [
    {id: '1', title: 'Please help, tripping on Mario Mushrooms', content: 'I took a red and white mushroom and now I\'m 10 feet tall, so I keep tripping on everything!'},
    {id: '2', title: 'End Bowser once and for all', content: 'Shh.. Meet by the bridge..'},
    {id: '3', title: 'Find out who Luigi\'s brother is', content: 'I have my suspicions...'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
  }
  return state;
};

export default projectReducer;