import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDepartments1623896972372 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'departments',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          generationStrategy: 'increment',
          isGenerated: true,
        },
        {
          name: 'department_name',
          type: 'varchar',
          isUnique: true,
          isNullable: false
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
    await queryRunner.dropTable('departments');
  }

}
