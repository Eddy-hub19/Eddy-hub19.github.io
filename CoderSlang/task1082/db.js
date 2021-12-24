const db = {
  users: [
    {
      id: 1,
      name: 'Jack',
      friends: [ 23, 125 ],
    }, {
      id: 23,
      name: 'Jane',
      friends: [ 125 ],
    }, {
      id: 125,
      name: 'Jill',
      friends: [ 1 ],
    }
  ]
}

export const getUserCount = () => new Promise((resolve, reject) => {
  const isError = Math.random() > 0.5;
  if (isError) {
    reject(new Error('An unknown error occurred!'));
  }
  setTimeout(() => resolve(db.users.length), 200);
});