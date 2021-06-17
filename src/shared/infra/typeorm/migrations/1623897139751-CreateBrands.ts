import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBrands1623897139751 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'brands',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          generationStrategy: 'increment',
          isGenerated: true,
        },
        {
          name: 'brand_name',
          type: 'varchar',
          isUnique: true,
          isNullable: false
        },
        {
          name: 'corporation_id',
          type: 'int',
          isNullable: true,
          isUnique: false,
        },
        {
          name: 'department_id',
          type: 'int',
          isUnique: false,
          isNullable: false,
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
      ],
      foreignKeys: [
        {
          name: 'departmentId',
          referencedTableName: 'departments',
          referencedColumnNames: ['id'],
          columnNames: ['department_id'],
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        },
        {
          name: 'corporationId',
          referencedTableName: 'corporations',
          referencedColumnNames: ['id'],
          columnNames: ['corporation_id'],
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('departments');
  }

}
