import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCorporation1623895929276 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'corporations',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'company_name',
            type: 'varchar',
            isUnique: true,
            isNullable: false
          },
          {
            name: 'cnpj',
            type: 'varchar(14)',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'username',
            type: 'varchar(30)',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar(120)',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
            isNullable: true
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['active', 'inactive', 'deleted'],
            enumName: 'statusEnum',
            default: `'active'`,
            isNullable: false,
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
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('corporations');
    }

}
