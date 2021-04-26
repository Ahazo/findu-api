import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1619459661784 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              generationStrategy: 'increment',
              isGenerated: true,
            },
            {
              name: 'person_id',
              type: 'int',
              isUnique: true,
              isNullable: false,
            },
            {
              name: 'password',
              type: 'varchar(50)',
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
              name: 'followers_count',
              type: 'int',
              isNullable: false,
              isUnique: false,
              default: 0,
            },
            {
              name: 'campaigns_count',
              type: 'int',
              isNullable: false,
              isUnique: false,
              default: 0,
            },
            {
              name: 'recommendations_count',
              type: 'int',
              isNullable: false,
              isUnique: false,
              default: 0,
            },
            {
              name: 'experience',
              type: 'int',
              isNullable: false,
              default: 0,
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
              name: 'personIdtoUser',
              referencedTableName: 'persons',
              referencedColumnNames: ['id'],
              columnNames: ['person_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('users', 'personIdtoUser');
      await queryRunner.dropTable('users');
    }

}
