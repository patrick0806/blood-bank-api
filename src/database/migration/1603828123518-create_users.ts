import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1603828123518 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "users",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isGenerated: true,
                  generationStrategy: "increment",
                  isPrimary: true,
                },
                {
                  name: "email",
                  type: "varchar",
                  isUnique: true,
                  isNullable: true,
                },
                {
                  name: "password",
                  type: "varchar",
                  isNullable:true,
                },
                {
                    name:'created_at',
                    type:'timestamp',
                    default:'now()'
                },
                {
                  name:'updated_at',
                  type:'timestamp',
                  default:'now()'
              },          
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
