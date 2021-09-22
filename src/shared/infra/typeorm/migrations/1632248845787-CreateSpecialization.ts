import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSpecialization1632248845787 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'specializations',
			columns: [
				{
					name: 'id',
					type: 'int',
					isPrimary: true,
					generationStrategy: 'increment',
					isGenerated: true
				},
				{
					name: 'area_id',
					type: 'varchar',
					isNullable: false,
					isUnique: true
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
			],
			foreignKeys: [
				{
					name: 'areaToSpecialization',
					referencedTableName: 'areas',
					referencedColumnNames: ['id'],
					columnNames: ['area_id'],
					onDelete: 'SET NULL',
					onUpdate: 'CASCADE'
				}
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('areas', 'areaToSpecialization')
		await queryRunner.dropTable('areas')
	}
}
