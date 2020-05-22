import { CollegeOrMajorRequirement } from '../../types';
import { includesWithSingleRequirement } from '../checkers-common';

const publicPolicyMinorRequirements: readonly CollegeOrMajorRequirement[] = [
  {
    name: 'Gateway Course',
    description: 'Will be offered at least twice in every three years',
    source: 'https://government.cornell.edu/public-policy-minor',
    checker: includesWithSingleRequirement('GOVT 3032'),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  },
  {
    name: 'Methods Course',
    description: 'Students must also take one methods course. The following courses fulfill this requirement.',
    source: 'https://government.cornell.edu/public-policy-minor',
    checker: includesWithSingleRequirement('GOVT 3990', 'GOVT 3999'),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  },
  {
    name: 'Additional 3 Electives',
    description: 'An additional three electives, from a list of eligible courses.',
    source: 'https://government.cornell.edu/public-policy-minor',
    checker: includesWithSingleRequirement(
        'GOVT 1817', 
        'GOVT 2152',
        'GOVT 2225',
        'GOVT 2283', 
        'GOVT 2817', 
        'GOVT 3032', 
        'GOVT 3071', 
        'GOVT 3353', 
        'GOVT 3494', 
        'GOVT 3683', 
        'GOVT 3687', 
        'GOVT 3805', 
        'GOVT 3967', 
        'GOVT 4012', 
        'GOVT 4827', 
        'DSOC 3040', 
        'DSOC 4443', 
        'ILRIC 4360', 
        'NS 4998', 
        'NS 4998', 
        'PAM 2101', 
        'PAM 2300', 
        'PAM 3130', 
        'PAM 3190', 
        'PAM 3250', 
        'PAM 4640'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 3
  }
];

export default publicPolicyMinorRequirements;
