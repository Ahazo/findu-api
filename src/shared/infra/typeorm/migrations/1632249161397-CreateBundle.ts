import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBundle1632249161397 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'bundles',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'title',
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
						name: 'value',
						type: 'decimal',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'deadline',
						type: 'int',
						isNullable: true,
						isUnique: false,
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
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('bundles');
	}
}
