import { CollegeOrMajorRequirement } from '../../types';
import { includesWithSingleRequirement, includesWithSubRequirements } from '../checkers-common';

const commRequirements: readonly CollegeOrMajorRequirement[] = [
  {
    name: 'COMM Core Courses',
    description: 'Core Communications courses',
    source: 'https://communication.cals.cornell.edu/undergraduate-program/major-requirements/',
    checker: includesWithSubRequirements(
      ['COMM 1101'],
      ['COMM 1300'],
      ['COMM 2010'],
      ['COMM 2310'],
      ['COMM 2820']
    ),
    operator: 'and',
    fulfilledBy: 'courses',
    minCount: 5
  },
  {
    name: 'Focus Area',
    description: 'Complete 2 focus area classes',
    source: 'https://communication.cals.cornell.edu/undergraduate-program/major-requirements/',
    checker: includesWithSingleRequirement(
      'COMM 2200',
      'COMM 2450',
      'COMM 2760',
      'COMM 2850'
    ),
    operator: 'or',
    fulfilledBy: 'credits',
    minCount: 6
  },
  {
    name: 'Focus Area Upper Level',
    description: 'Students must take six credits (two courses) of coursework within their declared Focus Area at the 3100+ level.',
    source: 'https://communication.cals.cornell.edu/undergraduate-program/major-requirements/',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  },
  {
    name: 'Upper-Level COMM',
    description: 'Students must complete 9 additional credit hours at the 3100+ level.* Electives can come from any of the focus'
      + ' area lists. A student may elect to fulfill 3 of these credit hours by taking a third focus area introductory course.  A'
      + 'maximum of 3 credits in either 4970 or 4990 (combined) can be counted toward the upper level major'
      + 'requirements. Refer to the Course and Time Roster for the most up-to-date offerings. ',
    source: 'https://communication.cals.cornell.edu/undergraduate-program/major-requirements/',
    checker: includesWithSingleRequirement(
        'ANTHR 4330', 
        'COGST 4330', 
        'STS 4330', 
        'COML 2703', 
        'ENG 2703',
        'MUSIC 2703', 
        'PMA 2703', 
        'COMM 2179', 
        'COMM 3100', 
        'COMM 3110', 
        'COMM 3150', 
        'COMM 3189', 
        'COMM 3200', 
        'COMM 3210', 
        'COMM 3300', 
        'COMM 3350', 
        'COMM 3400', 
        'COMM 3450', 
        'COMM 3460', 
        'COMM 3560', 
        'COMM 3710', 
        'COMM 3720', 
        'COMM 3760', 
        'COMM 3800', 
        'COMM 4200', 
        'COMM 4201', 
        'COMM 4220', 
        'COMM 4250', 
        'COMM 4260',
        'COMM 4280', 
        'COMM 4292', 
        'COMM 4300', 
        'COMM 4350', 
        'COMM 4360', 
        'COMM 4380', 
        'COMM 4400', 
        'COMM 4410', 
        'COMM 4450', 
        'COMM 4560', 
        'COMM 4650', 
        'COMM 4660', 
        'COMM 4760', 
        'COMM 4800', 
        'COMM 4860', 
        'COMM 4940',
        'COMM 4970', 
        'COMM 4990'
    ),
    operator: 'or',
    fulfilledBy: 'credits',
    minCount: 9
  },
  {
    name: 'Communication Practica',
    description: 'This will not count as a COMM upper level course',
    source: 'https://communication.cals.cornell.edu/undergraduate-program/major-requirements/',
    checker: includesWithSingleRequirement(
        'COMM 3010', 
        'COMM 3020', 
        'COMM 3030', 
        'COMM 3040', 
        'COMM 3060', 
        'COMM 3070', 
        'COMM 3080', 
        'COMM 3090'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 3
  }
];

export default aemRequirements;
