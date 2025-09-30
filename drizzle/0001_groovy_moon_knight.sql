ALTER TABLE "watchlist" DROP CONSTRAINT "watchlist_pkey";--> statement-breakpoint
ALTER TABLE "watchlist" ADD COLUMN "media_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "watchlist" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "watchlist" ADD CONSTRAINT "watchlist_user_id_media_id_pk" PRIMARY KEY("user_id","media_id");--> statement-breakpoint
ALTER TABLE "watchlist" DROP COLUMN "id";