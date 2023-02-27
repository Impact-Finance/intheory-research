import { Project } from '@/content/DUMMY_PROJECTS';

const searchFilter = (el: Project, queryTerms: string[]) => {
  const nameArray = el.name.toLowerCase().split(' ');
  const descriptionArray = el.shortDescription.toLowerCase().split(' ');
  const validateArray = nameArray.concat(descriptionArray);
  return queryTerms.some(word => {
    if (word.length > 2) {
      return validateArray.includes(word.toLowerCase());
    } else {
      return false;
    }
  });
};

export default searchFilter;
