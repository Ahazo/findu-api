import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEstablishments1623900705468 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'establishments',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          generationStrategy: 'increment',
          isGenerated: true,
        },
        {
          name: 'establishment_name',
          type: 'varchar',
          isUnique: true,
          isNullable: false
        },
        {
          name: 'establishment_cnpj',
          type: 'varchar(14)',
          isNullable: true,
          isUnique: false,
        },
        {
          name: 'address_id',
          type: 'int',
          isUnique: true,
          isNullable: true,
        },
        {
          name: 'followers_count',
          type: 'int',
          default: 0,
          isNullable: false,
        },
        {
          name: 'experience',
          type: 'int',
          default: 0,
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
          name: 'addressId',
          referencedTableName: 'establishment_addresses',
          referencedColumnNames: ['id'],
          columnNames: ['address_id'],
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('departments', 'addressId');

    await queryRunner.dropTable('establishments');
  }

}
