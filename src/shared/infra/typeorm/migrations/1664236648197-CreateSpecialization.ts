import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSpecialization1664236648197 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'specializations',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'area_id',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'description',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
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
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
				foreignKeys: [
					{
						name: 'area_to_specialization',
						referencedTableName: 'areas',
						referencedColumnNames: ['id'],
						columnNames: ['area_id'],
						onDelete: 'SET NULL',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'specializations',
			'area_to_specialization'
		);
		await queryRunner.dropTable('specializations');
	}
}
