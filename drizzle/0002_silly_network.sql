CREATE TABLE `actors` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nameEn` varchar(255) NOT NULL,
	`nameAr` varchar(255) NOT NULL,
	`type` enum('government','organization','bank','armed_group','donor','international') NOT NULL,
	`category` varchar(100) NOT NULL,
	`status` enum('active','inactive','dissolved') NOT NULL DEFAULT 'active',
	`descriptionEn` text,
	`descriptionAr` text,
	`foundedDate` varchar(10),
	`keyFigures` text,
	`interests` text,
	`capabilities` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `actors_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `banks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nameEn` varchar(255) NOT NULL,
	`nameAr` varchar(255) NOT NULL,
	`type` enum('commercial','islamic','microfinance','specialized') NOT NULL,
	`status` enum('stable','struggling','critical','inactive') NOT NULL,
	`assets` int,
	`deposits` int,
	`branches` int,
	`establishedDate` varchar(10),
	`challenges` text,
	`metrics` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `banks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `causations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`causeEventId` int NOT NULL,
	`effectEventId` int NOT NULL,
	`strength` int NOT NULL,
	`confidence` int NOT NULL,
	`mechanismEn` text NOT NULL,
	`mechanismAr` text NOT NULL,
	`evidence` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `causations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `events` (
	`id` int AUTO_INCREMENT NOT NULL,
	`date` varchar(10) NOT NULL,
	`titleEn` varchar(500) NOT NULL,
	`titleAr` varchar(500) NOT NULL,
	`descriptionEn` text NOT NULL,
	`descriptionAr` text NOT NULL,
	`category` enum('war','policy','humanitarian','economic','international') NOT NULL,
	`severity` enum('low','medium','high','critical') NOT NULL,
	`actors` text,
	`impacts` text,
	`sources` text,
	`photoUrl` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `events_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `indicators` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nameEn` varchar(255) NOT NULL,
	`nameAr` varchar(255) NOT NULL,
	`category` varchar(100) NOT NULL,
	`unit` varchar(50) NOT NULL,
	`value` varchar(100) NOT NULL,
	`date` varchar(10) NOT NULL,
	`source` varchar(255) NOT NULL,
	`methodology` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `indicators_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `recommendations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titleEn` varchar(500) NOT NULL,
	`titleAr` varchar(500) NOT NULL,
	`descriptionEn` text NOT NULL,
	`descriptionAr` text NOT NULL,
	`targetActorId` int NOT NULL,
	`priority` enum('low','medium','high','critical') NOT NULL,
	`status` enum('proposed','under_review','accepted','rejected','implemented') NOT NULL DEFAULT 'proposed',
	`evidence` text,
	`expectedImpact` text,
	`methodology` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `recommendations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `stakeholders` (
	`id` int AUTO_INCREMENT NOT NULL,
	`actorId` int NOT NULL,
	`nameEn` varchar(255) NOT NULL,
	`nameAr` varchar(255) NOT NULL,
	`category` varchar(100) NOT NULL,
	`role` text,
	`interests` text,
	`actions` text,
	`impacts` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `stakeholders_id` PRIMARY KEY(`id`)
);
