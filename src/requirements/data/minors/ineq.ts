import { CollegeOrMajorRequirement } from '../../types';
import { includesWithSingleRequirement } from '../checkers-common';

const ineqMinorRequirements: readonly CollegeOrMajorRequirement[] = [
  {
    name: 'Core Course',
    description: 'This course introduces students to contemporary debates and controversies about inequality. Learn how and why inequality varies across time and space, and learn to identify how inequality is generated and maintained. Offered every fall semester.',
    source: 'https://inequality.cornell.edu/minor-details#health-equity-track',
    checker: includesWithSingleRequirement(
      'SOC 2220', 
      'DSOC 2220', 
      'PAM 2220', 
      'ILROB 2220', 
      'PHIL 1950', 
      'AMST 2225', 
      'GOVT 2225'
      ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  }, 
  {
    name: 'Overview courses',
    description: 'Overview of the minor',
    source: 'https://inequality.cornell.edu/minor-details#health-equity-track',
    checker: includesWithSingleRequirement(
      'PAM 2208', 'SOC 2208', 'DSOC 2090', 
      'DSOC 3700', 'SOC3710',
      'PAM 3370', 'SOC 3370', 
      'PAM 2250', 'SOC 2070',
      'ILROB 6260'
      ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  }, 
  {
    name: 'General Minor Electives',
    description: 'Students enrolled in the general Minor in Inequality Studies choose all four electives from the full list of elective courses, with choices available across over thirty academic departments.',
    source: 'https://inequality.cornell.edu/fall-2020-minor-course-list',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  }, 
  {
    name: 'Health Equity Track Electives',
    description: 'Those students who opt to enroll in the Minor’s Health Equity Track must complete TWO of their FOUR electives from the selection of electives with indicated health-equity focus.',
    source: 'https://inequality.cornell.edu/fall-2020-minor-course-list',
    checker: includesWithSingleRequirement(
        'ECON 6410',
        'LSP 2200',
        'STS 2051',
        'STS 3111', 
        'STS 3231',
        'SOC 3430', 
        'AEM 1600',
        'DSOC 3400', 
        'DSOC 4230', 
        'DSOC 4400', 
        'DEA 2700', 
        'NS 1150', 
        'NS 2450', 
        'NS 4570', 
        'NS 4600', 
        'PAM 2350', 
        'PAM 3280', 
        'PAM 4280'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 0
  }
];

export default ineqMinorRequirements;
