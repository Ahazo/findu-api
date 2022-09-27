import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateActivities1664239793032 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'activities',
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
						name: 'target_user_id',
						type: 'int',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'specialization_id',
						type: 'int',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'value',
						type: 'real',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'status',
						type: 'enum',
						enum: ['contract', 'cancel', 'recommendation'],
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

				// TODO
				foreignKeys: [
					{
						name: 'activity_user',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['user_id'],
						onDelete: 'SET NULL',
					},
					{
						name: 'target_activity_user',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['target_user_id'],
						onDelete: 'SET NULL',
					},
					{
						name: 'activity_specialization',
						referencedTableName: 'specializations',
						referencedColumnNames: ['id'],
						columnNames: ['specialization_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('activities', 'activity_user');
		await queryRunner.dropForeignKey('activities', 'target_activity_user');
		await queryRunner.dropForeignKey('activities', 'activity_specialization');
		await queryRunner.dropTable('activities');
	}
}
