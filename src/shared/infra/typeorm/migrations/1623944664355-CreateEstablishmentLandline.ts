import {MigrationInterface, QueryRunner, Table, TableUnique} from "typeorm";

export class CreateEstablishmentLandline1623944664355 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      const establishment_landline = new Table({
        name: 'establishment_landlines',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'establishment_id',
            type: 'int',
            isNullable: false,
            isUnique: false,
          },
          {
            name: 'landline',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
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
            name: 'establishmentId',
            referencedTableName: 'establishments',
            referencedColumnNames: ['id'],
            columnNames: ['establishment_id'],
            onDelete: 'CASCADE',
          }
        ]
      })
      queryRunner.createTable(establishment_landline);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropForeignKey('establishment_landlines', 'establishmentId')

      queryRunner.dropTable('establishment_landlines');
    }

}
