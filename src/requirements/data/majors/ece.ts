import { CollegeOrMajorRequirement } from '../../types';
import { includesWithSubRequirements } from '../checkers-common';

const isstRequirements: readonly CollegeOrMajorRequirement[] = [
  {
    name: 'ECE Core/Foundation',
    description: 'Required Major Courses',
    source: 'https://www.ece.cornell.edu/forms-undergraduate-programs',
    checker: includesWithSubRequirements(
        ["ECE 2100"],
        ["ECE 2200"], 
        ["ECE 3400"],
        ["ECE 3100", "ECE 3250"],
        ["ECE 3030", "ECE 3150"],
        ["ECE 3140", "ECE 3030", "ECE 3150", "ECE 3100", "ECE 3250"]
    ),
    operator: 'and',
    fulfilledBy: 'courses',
    minCount: 6
  },
  {
    name: 'ECE CDE Course',
    description: 'Culminating Design Experience (CDE): Consult the ECE Undergraduate Office for current CDE course offerings.',
    source: 'https://www.ece.cornell.edu/forms-undergraduate-programs',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  },
  {
    name: 'ECE Elective',
    description: 'At least four ECE Electives (in addition to the CDE course) at the 3000-level or above, at least two of which must be at the 4000-level or above, totaling up to at least 14 credits (not including the credits of the CDE course)',
    source: 'https://www.ece.cornell.edu/forms-undergraduate-programs',
    checker: includesWithSubRequirements(
        ['ECE 3***'],
        ['ECE 4***'],
    ),
    operator: 'or',
    fulfilledBy: 'credits',
    minCount: 14
  },
  {
    name: 'Outside-ECE Technical Elective',
    description: 'The Major program includes nine (9) credits of courses outside the Major. These are satisfied by the Outside-ECE Technical Electives.',
    source: 'https://www.ece.cornell.edu/forms-undergraduate-programs',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  }
];

export default eceRequirements;
