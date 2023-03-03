import { ResearchProject } from '@/app';

const searchFilter = (el: ResearchProject, queryTerms: string[]) => {
  const nameArray = el.projectName.toLowerCase().split(' ');
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
