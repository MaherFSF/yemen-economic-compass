ALTER TABLE `banks` MODIFY COLUMN `type` enum('commercial','islamic','microfinance','specialized','exchange','development') NOT NULL;--> statement-breakpoint
ALTER TABLE `banks` ADD `foundingYear` varchar(4);--> statement-breakpoint
ALTER TABLE `banks` ADD `ownership` text;--> statement-breakpoint
ALTER TABLE `banks` ADD `sanctionsStatus` text;--> statement-breakpoint
ALTER TABLE `banks` ADD `operationalStatus2025` varchar(100);--> statement-breakpoint
ALTER TABLE `banks` ADD `branches2014` int;--> statement-breakpoint
ALTER TABLE `banks` ADD `branches2025` int;--> statement-breakpoint
ALTER TABLE `banks` ADD `assetsYear` varchar(4);--> statement-breakpoint
ALTER TABLE `banks` ADD `crisisImpact` text;--> statement-breakpoint
ALTER TABLE `banks` ADD `compellingNarrative` text;--> statement-breakpoint
ALTER TABLE `banks` ADD `topSources` text;--> statement-breakpoint
ALTER TABLE `banks` ADD `dataConfidence` text;