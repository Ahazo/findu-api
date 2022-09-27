import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRecommendation1664236436946 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'recommendations',
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
						isUnique: false,
					},
					{
						name: 'recommended_freelancer_id',
						type: 'int',
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
						name: 'user_to_recommendation',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['user_id'],
						onDelete: 'SET NULL',
					},
					{
						name: 'recommended_freelancer',
						referencedTableName: 'freelancers',
						referencedColumnNames: ['id'],
						columnNames: ['recommended_freelancer_id'],
						onDelete: 'SET NULL',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'recommendations',
			'user_to_recommendation'
		);
		await queryRunner.dropForeignKey(
			'recommendations',
			'recommended_freelancer'
		);
		await queryRunner.dropTable('recommendations');
	}
}
