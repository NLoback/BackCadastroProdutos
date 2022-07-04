import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductTable1656917561496 implements MigrationInterface {
    name = 'ProductTable1656917561496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "fabricacao" TIMESTAMP NOT NULL, "perecivel" boolean NOT NULL, "validade" TIMESTAMP, "preco" float NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
