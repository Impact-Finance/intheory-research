import { Artwork } from '@/content/DUMMY_ARTWORK';
import { Project } from '@/content/DUMMY_PROJECTS';

export default function randomSubArray(
  arr: Artwork[] | Project[],
  size: number
) {
  var shuffled = arr.slice(0),
    i = arr.length,
    temp,
    index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.splice(0, size);
}
