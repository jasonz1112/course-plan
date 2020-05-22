import { CollegeOrMajorRequirement } from '../../types';
import { includesWithSubRequirements, includesWithSingleRequirement } from '../checkers-common';

const lingRequirements: readonly CollegeOrMajorRequirement[] = [
  {
    name: 'Foundation Courses',
    description: 'Majors must complete all of the following courses.',
    source: 'https://linguistics.cornell.edu/undergraduate/',
    checker: includesWithSubRequirements(
        ['LING 1101'], 
        ['LING 3302'],
        ['LING 3303'], 
        ['LING 3314']
    ),
    operator: 'and',
    fulfilledBy: 'courses',
    minCount: 4
  }, 
  {
    name: '3000+ Electives',
    description: 'Majors must complete 6 additional Linguistics courses (of 3 credits or more) selected in consultation with their advisor '
    + 'with the following conditions: at least 2 of these must be at the 3000 level or above',
    source: 'https://linguistics.cornell.edu/undergraduate/',
    checker: includesWithSingleRequirement('LING 3***'),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 2
  },
  {
    name: 'Additional Electives',
    description: 'Majors must complete 6 additional Linguistics courses (of 3 credits or more) selected in consultation with their advisor '
    + 'with the following conditions: no more than 1 of these may be at the 1000 level, no more than 1 of these may be satisfied by four '
    + 'credits of coursework with a CU-UGR designation',
    source: 'https://linguistics.cornell.edu/undergraduate/',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  },
  {
    name: 'Ancillary Skills Courses',
    description: 'In addition, majors must complete two courses (3 credits or more) in one or more of the following areas, selected in '
    + 'consultation with their advisor. This requirement is intended to equip them with practical skills relevant to their particular '
    + 'interests in linguistics.',
    source: 'https://linguistics.cornell.edu/undergraduate/',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  }
];

export default lingRequirements;
