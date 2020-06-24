import { getRepository } from 'typeorm';
import { User } from './entity/User';
import { Tweet } from './entity/Tweet';

export const Bootstrap = async () => {
  const userRepo = getRepository(User);
  const user = userRepo.create({
    firstName: 'Mahendra',
    lastName: 'AR',
    age: 26,
  });
  await userRepo.save(user).catch((err) => console.error('Error: ', err));
  console.log('New User saved', user);

  const tweetRepo = getRepository(Tweet);
  const tweet = new Tweet();
  tweet.title = 'I finally got a new job!';
  tweet.content = 'Well after a long time I landed on my dream job on Netflix';
  tweet.user = Promise.resolve(user);

  await tweetRepo.save(tweet).catch((err) => console.error('Error: ', err));
};

export const find = async () => {
  const userRepo = getRepository(User);
  const user = await userRepo
    .findOne({ where: { firstName: 'Mahendra' } })
    .catch((err) => console.error(console.error('Error: ', err)));
  if (user) {
    console.log('User', user);
    console.log('Tweets', await user.tweets);
  }
};
