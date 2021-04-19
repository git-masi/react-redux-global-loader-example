function getLagInMS(maxSeconds = 0) {
  return Math.ceil(Math.random() * maxSeconds * 1000);
}

export function mockRequest(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, getLagInMS(3));
  });
}
