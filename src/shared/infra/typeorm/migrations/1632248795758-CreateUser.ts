import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1632248795758 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'person_id',
						type: 'varchar',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'username',
						type: 'varchar',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'password',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'description',
						type: 'varchar',
						isNullable: true,
						isUnique: false,
					},
					{
						name: 'follower_count',
						type: 'int',
						isNullable: false,
						isUnique: false,
						default: 0,
					},
					{
						name: 'following_count',
						type: 'int',
						isNullable: false,
						isUnique: false,
						default: 0,
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
						name: 'person_to_user',
						referencedTableName: 'persons',
						referencedColumnNames: ['id'],
						columnNames: ['person_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('users', 'person_to_user');
		await queryRunner.dropTable('persons');
	}
}
