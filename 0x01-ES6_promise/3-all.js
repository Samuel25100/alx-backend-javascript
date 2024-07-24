import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const upload = uploadPhoto();
  const create = createUser();
  const mypromise = Promise.all([upload, create]);
  mypromise
    .then((resolve) => {
      const [uploadv, createv] = resolve;
      console.log(`${uploadv.body} ${createv.firstName} ${createv.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
