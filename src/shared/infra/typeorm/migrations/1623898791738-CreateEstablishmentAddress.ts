import {MigrationInterface, QueryRunner, Table, TableUnique} from "typeorm";

export class CreateEstablishmentAddress1623898791738 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const establishment_adresses = new Table({
      name: 'establishment_addresses',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          generationStrategy: 'increment',
          isGenerated: true,
        },
        {
          name: 'street',
          type: 'int',
          isNullable: false
        },
        {
          name: 'number',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'city',
          type: 'varchar',
          isUnique: false,
          isNullable: false,
        },
        {
          name: 'state',
          type: 'varchar',
          isUnique: false,
          isNullable: false,
        },
        {
          name: 'postal_code',
          type: 'varchar',
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
      ]
    })

    await queryRunner.createTable(establishment_adresses),
    queryRunner.createUniqueConstraint(establishment_adresses, new TableUnique({
      name: 'streetnumber_composite',
      columnNames: [
        'street',
        'number',
        'city',
        'state',
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('establishment_landlines');
  }

}
