import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFreelancer1632248904509 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'freelancers',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'user_id',
						type: 'int',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'level_id',
						type: 'int',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'projects_count',
						type: 'int',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'experience',
						type: 'int',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'open_to_work',
						type: 'boolean',
						isNullable: false,
						isUnique: true,
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
					{
						name: 'status',
						type: 'enum',
						enum: ['active', 'inactive', 'deleted'],
						enumName: 'statusEnum',
						default: `'active'`,
						isNullable: false,
					},
				],
				foreignKeys: [
					{
						name: 'userToFreelancer',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['user_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
					{
						name: 'levelToFreelancer',
						referencedTableName: 'professional_levels',
						referencedColumnNames: ['id'],
						columnNames: ['level_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('freelancers', 'userToFreelancer');
		await queryRunner.dropForeignKey('freelancers', 'levelToFreelancer');
		await queryRunner.dropTable('freelancers');
	}
}
