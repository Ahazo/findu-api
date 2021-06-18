import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserAdress1619452953599 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'user_addresses',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              generationStrategy: 'increment',
              isGenerated: true,
            },
            {
              name: 'postal_code',
              type: 'varchar(9)',
              isNullable: false,
              isUnique: false,
            },
            {
              name: 'street',
              type: 'varchar(100)',
              isNullable: false,
              isUnique: false,
            },
            {
              name: 'house_number',
              type: 'int',
              isNullable: false,
              isUnique: false,
            },
            {
              name: 'city',
              type: 'varchar(100)',
              isNullable: false,
              isUnique: false,
            },
            {
              name: 'state',
              type: 'varchar(2)',
              isNullable: false,
              isUnique: false,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('user_addresses');
    }

}
