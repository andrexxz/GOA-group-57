const checkNamePromise = new Promise((resolve, reject) => {
  const name = 'gela';
  if (name === 'a' || name === 'g') {
    resolve(name);
  } else {
    reject('Name must start with "a" or "g"');
  }
});

checkNamePromise
  .then((data) => {
    console.log('Resolved with:', data);
  })
  .catch((err) => {
    console.log('Rejected with:', err.message);
  });
