import { CollegeOrMajorRequirement } from '../../types';
import { includesWithSubRequirements, includesWithSingleRequirement } from '../checkers-common';

const envEngineeringRequirements: readonly CollegeOrMajorRequirement[] = [
  {
    name: 'Environmental Engineering Core Courses',
    description: 'Core classes for the major',
    source: 'https://www.cee.cornell.edu/cee/programs/environmental-engineering-major/handbook',
    checker: includesWithSubRequirements(
        ['ENGRI 1***'],
        ['ENGRD 2020'],
        ['BEE 2220', 'ENGRD 2210', 'ENGRD 3200', 'CEE 3200'],
        ['CEE 3040'],
        ['BEE 4890', 'CEE 3230'],
        ['CEE 3310'],
        ['CEE 3510'],
        ['CEE 4510'],
        ['BEE 4750'],
    ),
    operator: 'and',
    fulfilledBy: 'courses',
    minCount: 9
  },
  {
    name: 'Earth Science Core Course',
    description: 'Approved Earth Science Courses',
    source: 'https://www.cee.cornell.edu/cee/programs/environmental-engineering-major/handbook',
    checker: includesWithSingleRequirement('BEE 4800', 'EAS 4800', 'EAS 2250', 'EAS 2680', 'EAS 3010', 'EAS 3030', 'EAS 3050', 'EAS 5051', 'EAS 4830', 'PLSCS 2600', 'PLSCS 3650', 'NTRES 3240'),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  },
  {
    name: 'Engineering Laboratory',
    description: 'Approved Engineering Laboratory Courses',
    source: 'https://www.cee.cornell.edu/cee/programs/environmental-engineering-major/handbook',
    checker: includesWithSingleRequirement('BEE 4270', 'CEE 4370', 'CEE 6370', 'CEE 4530'),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  },
  {
    name: 'Environmental Engineering Design Capstone Elective',
    description: 'At least one of the three design electives must be a capstone design elective.',
    source: 'https://www.cee.cornell.edu/cee/programs/environmental-engineering-major/handbook',
    checker: includesWithSingleRequirement('BEE 4350', 'BEE 4730','BEE 4870','CEE 4520', 'CEE 4590'),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  }, 
  {
    name: 'Environmental Engineering Design Electives 1 & 2',
    description: 'A total of 5 Capstone Design, Design and Major-Approved Electives must be selected from among the courses in the list below. At least three of these five courses must be Capstone Design or Design Electives. At least one of the three design electives must be a capstone design elective.',
    source: 'https://www.cee.cornell.edu/cee/programs/environmental-engineering-major/handbook',
    checker: includesWithSingleRequirement('BEE 4350', 'BEE 4730', 'BEE 4760', 'BEE 4870', 'CEE 4350', 'CEE 4520', 'CEE 4590', 'CEE 4650', 'CEE 6370', 'MAE 4021', 'MAE 4121'),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 2
  },
  {
    name: 'Environmental Engineering Major Approved Electives',
    description: 'Environmental Engineering 2019-2020 Major-Approved Electives',
    source: 'https://www.cee.cornell.edu/cee/programs/environmental-engineering-major/handbook',
    checker: includesWithSingleRequirement(
        'BEE 3299', 
        'BEE 3710',
        'BEE 4110', 
        'BEE 4310', 
        'BEE 4710',  
        'BEE 4800', 
        'BEE 4880', 
        'CEE 3410', 
        'CEE 4110', 
        'CEE 4320', 
        'CEE 4370', 
        'CEE 4565', 
        'CEE 5970', 
        'CEE 6000', 
        'CEE 6100', 
        'CEE 6200', 
        'CEE 6300', 
        'CEE 6530', 
        'CEE 6550', 
        'CEE 6560',
        'CEE 6570', 
        'CHEME 6610', 
        'CHEME 6660', 
        'EAS 4570', 
        'EAS 6480', 
        'MAE 4020', 
        'MAE 4120', 
        'PLSCS 4200'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 2
  }, 
  {
    name: 'Other Environmental Engineering Electives',
    description: 'Other Environmental Engineering Electives to bring total category to 57 credits. These will generally consist of technical engineering courses at 2000 level or above from BEE, CEE or the College of Engineering. A maximum of 4 credits of BEE 4970-4990 or CEE 3090, 4010 (teaching, research, and individual projects) may be used in this category, without a petition.',
    source: 'https://www.cee.cornell.edu/cee/programs/environmental-engineering-major/handbook',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  }
];

export default envEngineeringRequirements;
