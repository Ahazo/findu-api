import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSkill1664236744749 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'skills',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'specialization_id',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'freelancer_id',
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
						name: 'specialization_to_skill',
						referencedTableName: 'specializations',
						referencedColumnNames: ['id'],
						columnNames: ['specialization_id'],
						onDelete: 'SET NULL',
					},
					{
						name: 'freelancer_to_skill',
						referencedTableName: 'freelancers',
						referencedColumnNames: ['id'],
						columnNames: ['freelancer_id'],
						onDelete: 'SET NULL',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('skills', 'specialization_to_skill');
		await queryRunner.dropForeignKey('skills', 'freelancer_to_skill');
		await queryRunner.dropTable('skills');
	}
}
