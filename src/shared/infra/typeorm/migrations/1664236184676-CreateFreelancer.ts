import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFreelancer1664236184676 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'freelancers',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'user_id',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'title',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'open_to_work',
						type: 'boolean',
						isNullable: false,
						isUnique: false,
						default: true,
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
						name: 'user_to_freelancer',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['user_id'],
						onDelete: 'SET NULL',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('freelancers', 'freelancer_to_user');
		await queryRunner.dropTable('freelancers');
	}
}
