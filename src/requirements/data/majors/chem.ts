import { CollegeOrMajorRequirement } from '../../types';
import { includesWithSubRequirements, includesWithSingleRequirement } from '../checkers-common';

const chemRequirements: readonly CollegeOrMajorRequirement[] = [
  {
    name: 'Introductory Chemistry',
    description: 'CHEM 2070 + CHEM 2080 (Fall & Spring, lecture plus laboratory, 4 credits each) or '
    + 'CHEM 2150 (Fall, lecture plus laboratory, 4 credits) Admission to CHEM 2150 requires a 5 on the '
    + 'Chemistry Advanced Placement Exam, a 6 or 7 on the International Baccalaureate Chemistry Exam, '
    + 'or the permission of the course’s instructor.',
    source: 'https://chemistry.cornell.edu/core-courses',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  },
  {
    name: 'Organic Chemistry',
    description: 'CHEM 3570 + CHEM 3580 (Fall and Spring, lecture, 3 credits each) or CHEM 3590 + '
    + 'CHEM 3600 (Spring and Fall, lecture, 4 credits each) or CHEM 3530 (Fall, lecture, 3 credits). '
    + 'Students who are planning for graduate study in Chemistry or a career as a chemist or healthcare '
    + 'professional are strongly advised to take one of the two-semester sequences.  CHEM 3570 + 3580 '
    + 'or CHEM 3590 + 3600 is required for the Honors Curriculum.',
    source: 'https://chemistry.cornell.edu/core-courses',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  },
  {
    name: 'Core Organic Chemistry laboratory',
    description: 'Core Organic Chemistry laboratory',
    source: 'https://chemistry.cornell.edu/core-courses',
    checker: includesWithSingleRequirement('CHEM 2510'),
    operator: 'or',
    fulfilledBy: 'courses'
  }, 
  {
    name: 'Inorganic Chemistry',
    description: 'Inorganic Chemistry',
    source: 'https://chemistry.cornell.edu/core-courses',
    checker: includesWithSingleRequirement('CHEM 4100'),
    operator: 'or',
    fulfilledBy: 'courses'
  }, 
  {
    name: 'Mathematics',
    description: 'MATH 1110 + MATH 1120 (each offered Fall and Spring, 4 credits each) or'
    + '4 AP credits + MATH 1910 (Fall and Spring, 4 credits)'
    + 'AP credit may be substituted for MATH 1110, MATH 1120, or both MATH 1110 + 1120.',
    source: 'https://chemistry.cornell.edu/core-courses',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  },
  {
    name: 'Physics',
    description: 'PHYS 2207 + PHYS 2208 (Fall and Spring, lecture plus lab, 4 credits each) or '
    + 'PHYS 1112 + PHYS 2213 (each offered Fall and Spring, lecture plus lab, 4 credits each) or '
    + 'PHYS 1116 + PHYS 2217 (each offered Fall and Spring, lecture plus lab, 4 credits each) '
    + 'AP credit may be substituted for one or both of the courses in these sequences.  The PHYS 1101 – 1102 sequence is NOT acceptable.',
    source: 'https://chemistry.cornell.edu/core-courses',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  },
  {
    name: 'Physical Chemistry',
    description: 'CHEM 3890 + CHEM 3900 (Fall and Spring, lecture, 4 credits each) or '
    + 'CHEM 2870 (Fall, lecture, 3 credits)',
    source: 'https://chemistry.cornell.edu/core-courses',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  },
  {
    name: 'Upper-level laboratory courses',
    description: 'A total of 8 credits of laboratory coursework, including core Organic '
    + 'and Physical/Analytical laboratory courses, is required.',
    source: 'https://chemistry.cornell.edu/core-courses',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  }, 
  {
    name: 'Upper-level electives',
    description: 'Please review the approved upper-level electives. Courses that can '
    + 'count toward the upper-level laboratory-course requirement are noted in bold. '
    + 'Some courses may not be offered every year.  Some courses may have additional '
    + 'prerequisites that do not count toward chemistry-elective credits.',
    source: 'https://chemistry.cornell.edu/elective-list-chemistry-major',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  }
];

export default chemRequirements;
