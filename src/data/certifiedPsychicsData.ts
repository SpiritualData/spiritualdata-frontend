/**
 * Psychic Ability Certification: the public assessment record.
 *
 * The unit of this record is an ASSESSMENT, not a person. A session that
 * demonstrates nothing is a record here in exactly the same way a certified
 * session is, because a program that publishes only its successes is not
 * evidence of anything (Ethics and Protocol, section 5).
 *
 * Nothing is published without the participant's consent, and identification
 * is a separate consent from publication. That is enforced structurally by
 * `participant.identified`: when it is false, the UI has no name to render.
 */

export type AssessmentOutcome = "certified" | "not-demonstrated" | "inconclusive";

export type CertificationLevel =
  | "Demonstrably Psychic"
  | "Certified Psychic"
  | "Reliably Psychic"
  | "Super Psychic";

/** Ordered weakest to strongest, as published in section 4 of the protocol. */
export const certificationLevels: CertificationLevel[] = [
  "Demonstrably Psychic",
  "Certified Psychic",
  "Reliably Psychic",
  "Super Psychic",
];

export const outcomeLabels: Record<AssessmentOutcome, string> = {
  certified: "Certified",
  "not-demonstrated": "Not demonstrated",
  inconclusive: "Inconclusive",
};

export interface AssessmentParticipant {
  /**
   * Whether the participant has separately consented to being publicly
   * identified. When false, name and location must not be rendered.
   */
  identified: boolean;
  name?: string;
  location?: string;
  publicProfileUrl?: string;
}

export interface AssessmentProtocol {
  summary: string;
  preRegistrationUrl?: string;
  controlDescription: string;
  witnessCount: number;
  researcherWitness: boolean;
  independentWitness: boolean;
  videoUrl?: string;
}

export interface AssessmentResults {
  description: string;
  trials?: number;
  hits?: number;
  /** Probability of the result arising by chance, e.g. 1e-16. */
  chanceProbability?: number;
  /** Whether the published threshold (better than one in one quadrillion) was met. */
  meetsThreshold?: boolean;
}

export interface AssessmentReviewer {
  name: string;
  credential: string;
}

export interface AssessmentReview {
  reviewers: AssessmentReviewer[];
  verdict: string;
  reportUrl?: string;
}

export interface Assessment {
  /** Stable slug used in the URL: /initiatives/psychic-ability-certification/certified/:id */
  id: string;
  /** ISO date of the testing session. */
  sessionDate: string;
  /** ISO date this record was published. */
  publishedDate: string;
  ability: string;
  abilityDetail: string;
  outcome: AssessmentOutcome;
  /** Only meaningful when outcome === "certified". */
  level?: CertificationLevel;
  participant: AssessmentParticipant;
  protocol: AssessmentProtocol;
  results: AssessmentResults;
  review: AssessmentReview;
  witnessStatementsUrl?: string;
}

/**
 * The live public record.
 *
 * Empty by design: no testing session has been published. Every completed
 * assessment is added here, whatever it showed.
 */
export const assessments: Assessment[] = [];

/**
 * EXAMPLE ONLY. NOT A REAL ASSESSMENT AND NOT PART OF THE PUBLISHED RECORD.
 *
 * Kept as a shape reference for whoever adds the first real record. It is
 * deliberately not included in `assessments` and must never be rendered on a
 * public page.
 */
export const exampleAssessment: Assessment = {
  id: "example-not-a-real-assessment",
  sessionDate: "2026-01-01",
  publishedDate: "2026-01-01",
  ability: "ESP",
  abilityDetail: "Example entry showing the shape of a published record.",
  outcome: "not-demonstrated",
  participant: {
    identified: false,
  },
  protocol: {
    summary: "Example protocol summary.",
    controlDescription: "Example control description.",
    witnessCount: 3,
    researcherWitness: true,
    independentWitness: true,
  },
  results: {
    description: "Example result description.",
    trials: 100,
    hits: 26,
    chanceProbability: 0.42,
    meetsThreshold: false,
  },
  review: {
    reviewers: [{ name: "Example Reviewer", credential: "PhD" }],
    verdict: "Example verdict.",
  },
};

export interface CertificationStats {
  totalAssessments: number;
  certifiedCount: number;
  nullResultCount: number;
  inconclusiveCount: number;
  byLevel: Record<CertificationLevel, number>;
  abilities: string[];
  abilitiesTested: number;
  years: number[];
}

const assessmentYear = (assessment: Assessment): number =>
  new Date(assessment.sessionDate).getFullYear();

/** Everything shown in the stats band is derived from the records, never stated. */
export const getCertificationStats = (
  records: Assessment[] = assessments
): CertificationStats => {
  const byLevel = certificationLevels.reduce((acc, level) => {
    acc[level] = records.filter(
      (record) => record.outcome === "certified" && record.level === level
    ).length;
    return acc;
  }, {} as Record<CertificationLevel, number>);

  const abilities = Array.from(
    new Set(records.map((record) => record.ability))
  ).sort((a, b) => a.localeCompare(b));

  const years = Array.from(
    new Set(
      records
        .map(assessmentYear)
        .filter((year) => !Number.isNaN(year))
    )
  ).sort((a, b) => b - a);

  return {
    totalAssessments: records.length,
    certifiedCount: records.filter((record) => record.outcome === "certified")
      .length,
    nullResultCount: records.filter(
      (record) => record.outcome === "not-demonstrated"
    ).length,
    inconclusiveCount: records.filter(
      (record) => record.outcome === "inconclusive"
    ).length,
    byLevel,
    abilities,
    abilitiesTested: abilities.length,
    years,
  };
};

export const getAssessmentById = (
  id: string | undefined,
  records: Assessment[] = assessments
): Assessment | undefined =>
  id ? records.find((record) => record.id === id) : undefined;

/**
 * The only place a participant's name is turned into display text. If the
 * participant has not consented to identification there is nothing to show,
 * so the record renders anonymously by construction.
 */
export const participantLabel = (assessment: Assessment): string =>
  assessment.participant.identified && assessment.participant.name
    ? assessment.participant.name
    : "Participant not publicly identified";

export const getAssessmentYear = assessmentYear;

export const formatAssessmentDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/** Renders 1e-16 as "1 in 10,000,000,000,000,000" style text without losing precision. */
export const formatChanceProbability = (probability: number): string => {
  if (!Number.isFinite(probability) || probability <= 0) return "n/a";
  const oneIn = Math.round(1 / probability);
  if (oneIn < 1_000_000) return `1 in ${oneIn.toLocaleString("en-US")}`;
  return `${probability.toExponential(2)} (about 1 in ${oneIn.toExponential(2)})`;
};
