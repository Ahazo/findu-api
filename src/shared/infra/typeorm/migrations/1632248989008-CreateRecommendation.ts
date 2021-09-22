import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRecommendation1632248989008 implements MigrationInterface {
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
						name: 'post_id',
						type: 'int',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'user_id',
						type: 'int',
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
						name: 'userToRecommendation',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['user_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
					{
						name: 'postToRecommendation',
						referencedTableName: 'post_recomendations',
						referencedColumnNames: ['id'],
						columnNames: ['post_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('recommendations', 'userToReccomendation');
		await queryRunner.dropForeignKey('recommendations', 'postToReccomendation');
		await queryRunner.dropTable('recommendations');
	}
}
