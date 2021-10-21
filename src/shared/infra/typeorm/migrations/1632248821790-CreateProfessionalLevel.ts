import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProfessionalLevel1632248821790
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'professional_levels',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'level_number',
						type: 'int4',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'description',
						type: 'varchar',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'experience_needed',
						type: 'int',
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
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('professional_levels');
	}
}
