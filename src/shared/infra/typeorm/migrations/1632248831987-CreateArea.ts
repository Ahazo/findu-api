import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateArea1632248831987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'areas',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'status',
                    type: 'enum',
                    enum: ['active', 'inactive', 'deleted'],
                    enumName: 'statusEnum',
                    default: 'active',
                    isNullable: false,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('areas')
    }
}
