import { mysqlTable, int, varchar, text, decimal, timestamp, json, mysqlEnum } from 'drizzle-orm/mysql-core';

/**
 * TRANSPARENCY & ACCOUNTABILITY DATABASE SCHEMA
 * 
 * This schema implements the revolutionary transparency framework:
 * 1. Source Confidence Scoring
 * 2. Bias Profiles
 * 3. Data Conflict Detection
 * 4. Revision Logs
 * 5. Actor Impact Ledger
 */

// ============================================================================
// SOURCE CONFIDENCE SCORING
// ============================================================================

/**
 * Source Confidence Scores
 * 
 * Tracks confidence level for every data source across 5 dimensions:
 * - Timeliness: How current is the data?
 * - Transparency: Are methods publicly documented?
 * - Methodology: Is the approach rigorous?
 * - Independence: Free from political/financial conflicts?
 * - Consistency: Aligns with other credible sources?
 */
export const sourceConfidenceScores = mysqlTable('source_confidence_scores', {
  id: int('id').primaryKey().autoincrement(),
  sourceId: varchar('source_id', { length: 100 }).notNull(), // e.g., "world_bank", "imf", "cby_aden"
  sourceName: varchar('source_name', { length: 255 }).notNull(),
  sourceType: mysqlEnum('source_type', [
    'multilateral',
    'government',
    'de_facto_authority',
    'think_tank',
    'ngo',
    'media',
    'academic',
    'commercial',
  ]).notNull(),
  
  // Confidence dimensions (0-100 scale)
  timelinessScore: int('timeliness_score').notNull(), // How recent/current
  transparencyScore: int('transparency_score').notNull(), // Methods documented
  methodologyScore: int('methodology_score').notNull(), // Rigor of approach
  independenceScore: int('independence_score').notNull(), // Free from bias
  consistencyScore: int('consistency_score').notNull(), // Aligns with others
  
  // Overall confidence (average of dimensions)
  overallConfidence: decimal('overall_confidence', { precision: 5, scale: 2 }).notNull(),
  confidenceLevel: mysqlEnum('confidence_level', ['low', 'medium', 'high', 'very_high']).notNull(),
  
  // Metadata
  lastReviewed: timestamp('last_reviewed').notNull().defaultNow(),
  reviewedBy: varchar('reviewed_by', { length: 255 }), // Analyst name
  notes: text('notes'), // Explanation of scores
  
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
});

export type SourceConfidenceScore = typeof sourceConfidenceScores.$inferSelect;
export type InsertSourceConfidenceScore = typeof sourceConfidenceScores.$inferInsert;

// ============================================================================
// BIAS PROFILES
// ============================================================================

/**
 * Source Bias Profiles
 * 
 * Documents structural biases and incentives for each source.
 * Never dismisses a source, but contextualizes their perspective.
 */
export const sourceBiasProfiles = mysqlTable('source_bias_profiles', {
  id: int('id').primaryKey().autoincrement(),
  sourceId: varchar('source_id', { length: 100 }).notNull(),
  sourceName: varchar('source_name', { length: 255 }).notNull(),
  
  // Bias classification
  primaryBias: varchar('primary_bias', { length: 100 }).notNull(), // e.g., "multilateral lender", "advocacy think tank"
  biasDescription: text('bias_description').notNull(), // Detailed explanation
  
  // Structural incentives
  fundingSource: text('funding_source'), // Who funds this source?
  politicalAffiliation: varchar('political_affiliation', { length: 255 }), // Any political ties?
  economicInterests: text('economic_interests'), // Financial stakes?
  
  // Narrative tendencies
  narrativeTendency: text('narrative_tendency').notNull(), // How does bias shape narrative?
  typicalFraming: text('typical_framing'), // Common framing patterns
  blindSpots: text('blind_spots'), // What do they typically miss?
  
  // Strengths despite bias
  strengths: text('strengths').notNull(), // What they're good at despite bias
  bestUsedFor: text('best_used_for'), // When to trust this source
  
  // Examples
  exampleBias: json('example_bias'), // Array of specific examples
  
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
});

export type SourceBiasProfile = typeof sourceBiasProfiles.$inferSelect;
export type InsertSourceBiasProfile = typeof sourceBiasProfiles.$inferInsert;

// ============================================================================
// DATA CONFLICT DETECTION
// ============================================================================

/**
 * Data Conflicts
 * 
 * Tracks when two credible sources disagree on the same indicator.
 * Shows all values, explains differences, documents resolution.
 */
export const dataConflicts = mysqlTable('data_conflicts', {
  id: int('id').primaryKey().autoincrement(),
  indicatorId: varchar('indicator_id', { length: 100 }).notNull(), // e.g., "gdp_2017", "inflation_2019"
  indicatorName: varchar('indicator_name', { length: 255 }).notNull(),
  year: int('year').notNull(),
  
  // Conflicting values
  primaryValue: decimal('primary_value', { precision: 20, scale: 2 }).notNull(),
  primarySource: varchar('primary_source', { length: 255 }).notNull(),
  primarySourceId: varchar('primary_source_id', { length: 100 }).notNull(),
  
  alternativeValue: decimal('alternative_value', { precision: 20, scale: 2 }).notNull(),
  alternativeSource: varchar('alternative_source', { length: 255 }).notNull(),
  alternativeSourceId: varchar('alternative_source_id', { length: 100 }).notNull(),
  
  // Conflict analysis
  discrepancyPercent: decimal('discrepancy_percent', { precision: 10, scale: 2 }).notNull(),
  conflictSeverity: mysqlEnum('conflict_severity', ['minor', 'moderate', 'major', 'critical']).notNull(),
  
  // Explanation
  methodologicalDifference: text('methodological_difference'), // Why do they differ?
  coverageDifference: text('coverage_difference'), // Different scope?
  timingDifference: text('timing_difference'), // Different time periods?
  
  // Resolution
  resolutionMethod: text('resolution_method').notNull(), // How we resolve it
  primarySeriesRationale: text('primary_series_rationale').notNull(), // Why we chose primary
  alternativeSeriesAvailable: int('alternative_series_available').notNull().default(1), // Can users toggle?
  
  // Additional sources (if any)
  additionalSources: json('additional_sources'), // Array of other sources
  
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
});

export type DataConflict = typeof dataConflicts.$inferSelect;
export type InsertDataConflict = typeof dataConflicts.$inferInsert;

// ============================================================================
// REVISION LOGS
// ============================================================================

/**
 * Data Revision Log
 * 
 * Tracks every change to every indicator with full transparency.
 * Makes the platform feel like a living, self-documenting research project.
 */
export const dataRevisionLog = mysqlTable('data_revision_log', {
  id: int('id').primaryKey().autoincrement(),
  
  // What changed
  entityType: mysqlEnum('entity_type', ['indicator', 'event', 'actor', 'narrative', 'source']).notNull(),
  entityId: varchar('entity_id', { length: 100 }).notNull(),
  entityName: varchar('entity_name', { length: 255 }).notNull(),
  year: int('year'), // If applicable
  
  // Change details
  changeType: mysqlEnum('change_type', [
    'created',
    'updated_value',
    'updated_source',
    'updated_methodology',
    'updated_narrative',
    'corrected_error',
    'added_alternative_series',
    'deleted',
  ]).notNull(),
  
  // Before/After
  previousValue: text('previous_value'),
  newValue: text('new_value'),
  
  // Why changed
  changeReason: text('change_reason').notNull(),
  triggerEvent: varchar('trigger_event', { length: 255 }), // e.g., "new SDR usage report"
  sourceUpdate: varchar('source_update', { length: 255 }), // Which source updated
  
  // Who changed
  changedBy: varchar('changed_by', { length: 255 }).notNull(), // System or analyst
  reviewedBy: varchar('reviewed_by', { length: 255 }), // If reviewed
  
  // References
  supportingDocuments: json('supporting_documents'), // Array of document URLs
  relatedRevisions: json('related_revisions'), // Array of related revision IDs
  
  // Metadata
  changeTimestamp: timestamp('change_timestamp').notNull().defaultNow(),
  publiclyVisible: int('publicly_visible').notNull().default(1),
  
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type DataRevision = typeof dataRevisionLog.$inferSelect;
export type InsertDataRevision = typeof dataRevisionLog.$inferInsert;

// ============================================================================
// ACTOR IMPACT LEDGER
// ============================================================================

/**
 * Actor Actions
 * 
 * Timeline of every major action by key actors.
 * Links to events and indicators for accountability.
 */
export const actorActions = mysqlTable('actor_actions', {
  id: int('id').primaryKey().autoincrement(),
  
  // Actor info
  actorId: varchar('actor_id', { length: 100 }).notNull(),
  actorName: varchar('actor_name', { length: 255 }).notNull(),
  actorType: mysqlEnum('actor_type', [
    'central_bank',
    'government',
    'de_facto_authority',
    'armed_group',
    'foreign_government',
    'multilateral',
    'ngo',
    'bank',
    'mfi',
    'commercial',
  ]).notNull(),
  
  // Action details
  actionDate: timestamp('action_date').notNull(),
  actionType: varchar('action_type', { length: 100 }).notNull(), // e.g., "policy_decision", "sanction", "reform"
  actionTitle: varchar('action_title', { length: 255 }).notNull(),
  actionDescription: text('action_description').notNull(),
  
  // Impact classification
  impactDirection: mysqlEnum('impact_direction', [
    'stabilizing',
    'destabilizing',
    'redistributive',
    'extractive',
    'neutral',
    'mixed',
  ]).notNull(),
  
  timeHorizon: mysqlEnum('time_horizon', [
    'immediate', // < 1 month
    'short_term', // 1-6 months
    'medium_term', // 6-24 months
    'long_term', // 2+ years
    'structural', // Permanent change
  ]).notNull(),
  
  // Affected indicators
  affectedIndicators: json('affected_indicators').notNull(), // Array of indicator IDs
  
  // Linked events
  linkedEventIds: json('linked_event_ids'), // Array of event IDs
  
  // References
  sources: json('sources').notNull(), // Array of source documents
  
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
});

export type ActorAction = typeof actorActions.$inferSelect;
export type InsertActorAction = typeof actorActions.$inferInsert;

/**
 * Actor Impact Profiles
 * 
 * Net impact dashboard for each actor across multiple dimensions.
 * Always backed by data, never just a "score".
 */
export const actorImpactProfiles = mysqlTable('actor_impact_profiles', {
  id: int('id').primaryKey().autoincrement(),
  
  // Actor info
  actorId: varchar('actor_id', { length: 100 }).notNull().unique(),
  actorName: varchar('actor_name', { length: 255 }).notNull(),
  
  // Time period
  startYear: int('start_year').notNull(),
  endYear: int('end_year').notNull(),
  
  // Macro-stability impact
  macroStabilityScore: decimal('macro_stability_score', { precision: 5, scale: 2 }), // -100 to +100
  volatilityChange: decimal('volatility_change', { precision: 10, scale: 2 }), // % change in volatility
  macroStabilityEvidence: json('macro_stability_evidence').notNull(), // Array of indicators
  
  // Distributional impact
  distributionalScore: decimal('distributional_score', { precision: 5, scale: 2 }), // -100 to +100
  poorHouseholdsImpact: text('poor_households_impact'),
  richHouseholdsImpact: text('rich_households_impact'),
  distributionalEvidence: json('distributional_evidence').notNull(),
  
  // Institutional impact
  institutionalScore: decimal('institutional_score', { precision: 5, scale: 2 }), // -100 to +100
  institutionalStrengthening: text('institutional_strengthening'),
  institutionalWeakening: text('institutional_weakening'),
  institutionalEvidence: json('institutional_evidence').notNull(),
  
  // Overall assessment
  overallAssessment: text('overall_assessment').notNull(),
  keyFindings: json('key_findings').notNull(), // Array of key findings
  
  // Confidence
  assessmentConfidence: mysqlEnum('assessment_confidence', ['low', 'medium', 'high']).notNull(),
  
  // References
  dataSeriesUsed: json('data_series_used').notNull(), // Array of indicator IDs
  reportsUsed: json('reports_used').notNull(), // Array of report URLs
  
  // Metadata
  lastUpdated: timestamp('last_updated').notNull().defaultNow(),
  analystNotes: text('analyst_notes'),
  
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
});

export type ActorImpactProfile = typeof actorImpactProfiles.$inferSelect;
export type InsertActorImpactProfile = typeof actorImpactProfiles.$inferInsert;
