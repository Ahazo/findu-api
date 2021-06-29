import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePerson1619454362655 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'persons',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              generationStrategy: 'increment',
              isGenerated: true,
            },
            {
              name: 'cpf',
              type: 'varchar(14)',
              isUnique: true,
              isNullable: false,
            },
            {
              name: 'email',
              type: 'varchar(100)',
              isUnique: true,
              isNullable: false,
            },
            {
              name: 'cellphone',
              type: 'varchar(17)',
              isUnique: true,
              isNullable: false,
            },
            {
              name: 'first_name',
              type: 'varchar(30)',
              isUnique: false,
              isNullable: false,
            },
            {
              name: 'last_name',
              type: 'varchar(100)',
              isUnique: false,
              isNullable: false
            },
            {
              name: 'birth_date',
              type: 'date',
              isNullable: false,
              isUnique: false,
            },
            {
              name: 'address_id',
              type: 'int',
              isNullable: true,
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
            }
          ],
          foreignKeys: [
            {
              name: 'userAddressId',
              referencedTableName: 'user_addresses',
              referencedColumnNames: ['id'],
              columnNames: ['address_id'],
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('persons', 'userAddressId');
      await queryRunner.dropTable('persons');
    }

}
