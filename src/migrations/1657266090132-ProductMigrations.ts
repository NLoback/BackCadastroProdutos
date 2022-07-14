import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductMigrations1657266090132 implements MigrationInterface {
    name = 'ProductMigrations1657266090132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "produto" character varying NOT NULL, "fabricacao" TIMESTAMP NOT NULL, "perecivel" boolean NOT NULL, "validade" TIMESTAMP, "preco" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
