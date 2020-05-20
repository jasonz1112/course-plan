import { CollegeOrMajorRequirement } from '../../types';
import { includesWithSubRequirements } from '../checkers-common';

const psychRequirements: readonly CollegeOrMajorRequirement[] = [
  {
    name: 'Statistics Requirement',
    description: 'Proficiency in statistics can be demonstrated by passing a course or course sequence in statistics at some other college, university, or college-level summer school, or by passing an exemption examination. Contact Thomas Cleland for more information.',
    source: 'https://psychology.cornell.edu/major#general-requirements',
    checker: includesWithSubRequirements(
        ['PSYCH 2500', 'ILRST 2100', 'BTRY 2010', 'PAM 2100', 'ILRST 3110', 'ECON 3130', 'AEM 2100', 'STSCI 2150', 'SOC 3010']
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  },
  {
    name: 'Perception, cognition and development (PCD)',
    description: 'CD researchers in the graduate field of psychology at Cornell study human perception, language, and memory, as well as the development of various cognitive functions in infants.',
    source: 'https://psychology.cornell.edu/major#general-requirements',
    checker: includesWithSubRequirements(
        ['PSYCH 1102', 'PSYCH 2050', 'PSYCH 2090', 'PSYCH 2150', 'PSYCH 3140', 'PSYCH 3160', 'PSYCH 3350', 'PSYCH 3420', 'PSYCH 4120', 'PSYCH 4180', 'PSYCH 4270', 'PSYCH 4280', 'PSYCH 4320', 'PSYCH 4360', 'PSYCH 4370', 'PSYCH 4650', 'PSYCH 4770', 'PSYCH 4780']
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  },
  {
    name: 'Behavioral and evolutionary neuroscience (BEN)',
    description: 'Faculty in the BEN area seek to understand the brain mechanisms of behavior and cognition, including sensation and perception, communication, social behavior, and learning and memory.',
    source: 'https://psychology.cornell.edu/major#general-requirements',
    checker: includesWithSubRequirements(
        ['PSYCH 2230', 'PSYCH 3220', 'PSYCH 3240', 'PSYCH 3260', 'PSYCH 3320', 'PSYCH 4200', 'PSYCH 4230', 'PSYCH 4240', 'PSYCH 4250', 'PSYCH 4260', 'PSYCH 4350', 'PSYCH 4390', 'PSYCH 4400', 'PSYCH 4410']
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  }, 
  {
    name: 'Social and personality psychology (S&P)',
    description: 'Faculty members in the Social & Personality area are interested in understanding how people think, feel, and act in real-world social situations.',
    source: 'https://psychology.cornell.edu/major#general-requirements',
    checker: includesWithSubRequirements(
        ['PSYCH 1500', 'PSYCH 2650', 'PSYCH 2750', 'PSYCH 2800', 'PSYCH 2820', 'PSYCH 3250', 'PSYCH 3270', 'PSYCH 3280', 'PSYCH 3800', 'PSYCH 3850', 'PSYCH 4050', 'PSYCH 4300', 'PSYCH 4810', 'PSYCH 4820', 'PSYCH 4840', 'PSYCH 4850', 'PSYCH 4910']
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  }
];

export default psychRequirements;
