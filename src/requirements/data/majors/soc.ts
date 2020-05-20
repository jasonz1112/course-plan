import { Course, CollegeOrMajorRequirement } from '../../types';
import { includesWithSubRequirements, includesWithSingleRequirement } from '../checkers-common';

const socRequirements: readonly CollegeOrMajorRequirement[] = [
  {
    name: 'Sociology Core Courses',
    description: 'The core courses provide an overview of sociological theories and methods that unite us as a discipline.',
    source: 'https://sociology.cornell.edu/major',
    checker: includesWithSubRequirements(
        ['SOC 1101'],
        ['SOC 3010'],
        ['SOC 3750']
    ),
    operator: 'and',
    fulfilledBy: 'courses',
    minCount: 3
  }, 
  {
    name: 'Electives 3000 or above',
    description: 'You can select your 7 elective courses from any 3- or 4-credit courses that have a SOC prefix. The only stipulation is that three of the electives should be at the 3000-level or higher.',
    source: 'https://sociology.cornell.edu/major',
    checker: includesWithSingleRequirement('SOC 3***'),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 3
  }, 
  {
    name: 'Sociology Electives',
    description: 'You can select your 7 elective courses from any 3- or 4-credit courses that have a SOC prefix. The only stipulation is that three of the electives should be at the 3000-level or higher.',
    source: 'https://sociology.cornell.edu/major',
    checker: (course: Course): boolean => [
        'SOC',
      ].includes(course.subject),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 4
  }
];

export default socRequirements;
