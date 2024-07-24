export default function getResponseFromAPI() {
  const mypromise = new Promise((resolve, reject) => {
    resolve('Resolved');
  });
  return (mypromise);
}
