import { CollegeOrMajorRequirement } from '../../types';
import { includesWithSubRequirements, includesWithSingleRequirement } from '../checkers-common';

const bioSocietyRequirements: readonly CollegeOrMajorRequirement[] = [
  {
    name: 'Basic Courses - Biological Sciences',
    description: 'Introductory biology (or two of the following: BioEE 1610 or BioSM 1610, BioEE 1780 '
    + 'or BioSM 1780, BioG 1440 or BioG 1445, or BioMG 1350.  Students are not required to take BioG 1500, '
    + 'but may wish to for a lab experience. A minimum average grade of C is required for the two '
    + 'Introductory Biology courses. Each course must be passed with a grade of at least C-.',
    source: 'https://sts.cornell.edu/bio-society#requirements',
    checker: includesWithSingleRequirement(
        'BIOEE 1610', 
        'BIOSM 1610', 
        'BIOEE 1780', 
        'BIOSM 1780', 
        'BIOG 1440', 
        'BIOG 1445', 
        'BIOMG 1350'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 2
  }, 
  {
    name: 'Basic Courses - College Calculus',
    description: 'One course - Math 1106, 1110, 1120 or any higher level calculus. Students may petition '
    + 'to take a second statistics course (an advanced course in sequence with the statistics course taken '
    + 'in the foundation) in place of calculus.',
    source: 'https://sts.cornell.edu/bio-society#requirements',
    checker: includesWithSingleRequirement(
        'MATH 1106', 
        'MATH 1110', 
        'MATH 1120'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  }, 
  {
    name: 'Basic Courses - General Chemistry',
    description: '(prerequisite to biochemistry and other chemistry courses): Chemistry 1560, 2070-2080, or 2150-2160 RECOMMENDED BUT NOT REQUIRED.',
    source: 'https://sts.cornell.edu/bio-society#requirements',
    checker: includesWithSingleRequirement(
        'CHEM 1560', 
        'CHEM 2070', 
        'CHEM 2080', 
        'CHEM 2150', 
        'CHEM 2160'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 0
  }, 
  {
    name: 'Foundation Courses - Ethics',
    description: 'One course. Either BSOC/S&TS 2051 or BSOC/S&TS 2061 (to be completed by end of junior year)',
    source: 'https://sts.cornell.edu/bio-society#requirements',
    checker: includesWithSingleRequirement(
        'BSOC 2051', 
        'STS 2051', 
        'BSOC 2061', 
        'STS 2061'
    ),
    operator: 'or',
    fulfilledBy: 'courses',
    minCount: 1
  }, 
  {
    name: 'Foundation Courses - Social Sciences/Humanities Foundation',
    description: 'Two courses. One from each of two of the following subject areas: History of Science; '
    + 'Philosophy of Science; Sociology of Science; Politics of Science; Science Communication; Literature and Science; '
    + 'Anthropology of Science, Medicine and Environment',
    source: 'https://sts.cornell.edu/bio-society#requirements',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  }, 
  {
    name: 'Foundation Courses - Biology Foundation (BREADTH)',
    description: 'Three courses. One from each of three of the following subject areas: Ecology (BioEE 2650); '
    + 'Biochemistry, Molecular and Cell Biology (BioMG 3300 or 3310 or 3330 or 3350 or NS 3200); Genetics & Development '
    + '(BIOMG 2800 or PLBRB 2250, or NTRES 2830); Neurobiology (BioNB 2220); Animal Behavior (BioNB 2210, BioNB 2213 or BioSM 3290); '
    + 'Anatomy & Physiology (NS 3410 or BioAP 3110 or DEA 4520 formerly 3520); Biological Diversity (BioMI 2900 or PLBIO 2410 or PLBIO 2480 or '
    + 'BioEE 2740 or BioEE 4500 or BioEE 4750 or BioEE 4760 or BioEE 4700 AND 4701 or ENTOM 2120 or PLPPM 3010 or PLPPM 3090 or BioSM 3740 or BioSM 3210); Nutrition (NS 1150 or NS 1220)',
    source: 'https://sts.cornell.edu/bio-society#requirements',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  }, 
  {
    name: 'Foundation Courses - Biology Foundation (DEPTH)',
    description: 'One course for which one of the biology BREADTH courses (in 2.C) is a prerequisite.',
    source: 'https://sts.cornell.edu/bio-society#requirements',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  }, 
  {
    name: 'Foundation Courses - Statistics',
    description: 'Statistics course',
    source: 'https://sts.cornell.edu/bio-society#requirements',
    checker: includesWithSingleRequirement(
        'BTRY 3010', 
        'AEM 2100', 
        'ILRST 2100', 
        'STSCI 2150', 
        'SOC 3010', 
        'MATH 1710', 
        'PAM 2100', 
        'ECON 3130', 
        'PSYCH 3500'
    ),
    operator: 'or',
    fulfilledBy: 'self-check', 
    minCount: 1
  }, 
  {
    name: 'Core Course',
    description: 'Core course',
    source: 'https://sts.cornell.edu/bio-society#requirements',
    checker: includesWithSingleRequirement(
        'BSOC 3011', 
        'BSOC 2821', 
        'BSOC 2468', 
        'BSOC 1942', 
        'NTRES 2320'
    ),
    operator: 'or',
    fulfilledBy: 'self-check', 
    minCount: 1
  }, 
  {
    name: 'Theme',
    description: 'Five theme courses (a coherent group of five courses relevant to the student’s special interest in Biology and Society, '
    + 'including a senior seminar that serves as a capstone course for the major).',
    source: 'https://sts.cornell.edu/bio-society#requirements',
    checker: null,
    operator: null,
    fulfilledBy: 'self-check'
  }
];

export default bioSocietyRequirements;
