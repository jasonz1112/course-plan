import { CollegeOrMajorRequirement } from '../../types';
import { includesWithSubRequirements, includesWithSingleRequirement } from '../checkers-common';

const esRequirements: readonly CollegeOrMajorRequirement[] = [
  {
    name: 'Foundation Course',
    description: 'Choose one course',
    source: 'https://environment.cornell.edu/education/major-requirements/core-curriculum/',
    checker: includesWithSingleRequirement(
        'NTRES 1101', 
        'NTRES 1201'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  }, 
  {
    name: 'Social Sciences',
    description: 'Choose one course',
    source: 'https://environment.cornell.edu/education/major-requirements/core-curriculum/',
    checker: includesWithSingleRequirement('NTRES 2201'),
    operator: 'and',
    fulfilledBy: 'courses',
    minCount: 1
  }, 
  {
    name: 'Biology',
    description: 'Choose one course. AP Biology credits are accepted but do not exempt students from the above courses.',
    source: 'https://environment.cornell.edu/education/major-requirements/core-curriculum/',
    checker: includesWithSingleRequirement(
        'BIOEE 1610',
        'BIOSM 1610',
        'BIOEE 1780',
        'BIOSM 1780'
    ),
    operator: 'and',
    fulfilledBy: 'courses',
    minCount: 1
  }, 
  {
    name: 'Chemistry/Physics',
    description: 'Choose one course. AP credit accepted to fulfill requirement: AP Chemistry score of 5 AP Physics 1 or AP Physics 2 score of 5 AP Physics C: Mechanics score of 5 Health careers students should consult with their advisor about meeting this requirement.',
    source: 'https://environment.cornell.edu/education/major-requirements/core-curriculum/',
    checker: includesWithSingleRequirement(
        'CHEM 1560',
        'CHEM 2070',
        'EAS 1600'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  }, 
  {
    name: 'Statistics',
    description: 'Choose one course. AP Statistics credit accepted to fulfill requirement.',
    source: 'https://environment.cornell.edu/education/major-requirements/core-curriculum/',
    checker: includesWithSingleRequirement(
        'AEM 2100',
        'BTRY 3010',
        'STSCI 2200',
        'MATH 1710',
        'STSCI 2100',
        'ILRST 2100',
        'STSCI 2150'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  },
  {
    name: 'Humanities',
    description: 'Choose one course.',
    source: 'https://environment.cornell.edu/education/major-requirements/core-curriculum/',
    checker: includesWithSingleRequirement(
        'ANTHR 2420',
        'BSOC 2420',
        'BSOC 2061',
        'COML 2036',
        'HIST 2581',
        'NTRES 2320',
        'NTRES 3320', 
        'NTRES 3330'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  },
  {
    name: 'Economics',
    description: 'Choose one course.',
    source: 'https://environment.cornell.edu/education/major-requirements/core-curriculum/',
    checker: includesWithSingleRequirement(
        'AEM 1500',
        'AEM 2500',
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  },
  {
    name: 'Field/Engaged Experience',
    description: 'Choose one course.',
    source: 'https://environment.cornell.edu/education/major-requirements/core-curriculum/',
    checker: includesWithSingleRequirement(
        'BIOEE 3611',
        'ENTOM 2120',
        'NTRES 2100',
        'NTRES 2400',
        'NTRES 3260', 
        'NTRES 4560', 
        'BIOSM 2500'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  },
  {
    name: 'Sustainability Science Colloquium',
    description: 'Choose one course.',
    source: 'https://environment.cornell.edu/education/major-requirements/core-curriculum/',
    checker: includesWithSingleRequirement(
        'ESS 2000',
        'BEE 2000',
        'BEE 2010'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  },
  {
    name: 'Capstone Course',
    description: 'Choose one course.',
    source: 'https://environment.cornell.edu/education/major-requirements/core-curriculum/',
    checker: includesWithSingleRequirement(
        'EAS 4443',
        'ESS 4940',
        'NTRES 4600',
        'NTRES 4601',
        'BIOSM 3750'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  },
  {
    name: 'Concentration',
    description: 'All students must select one of six concentrations consisting of six to ten additional courses.',
    source: 'https://environment.cornell.edu/education/major-requirements/core-curriculum/',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  }
];

export default esRequirements;
