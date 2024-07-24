import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const upload = uploadPhoto(fileName);
  const sign = signUpUser(firstName, lastName);
  const mypro = Promise.allSettled([upload, sign]);
  return mypro.then((result) => {
    const final = [];
    for (const val of result) {
      const obj = {};
      obj.status = val.status;
      if (val.status === 'rejected') {
        obj.value = val.reason;
      } else {
        obj.value = val.value;
      }
      final.push(obj);
    }
    return (final);
  });
}
