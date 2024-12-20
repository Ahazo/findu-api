import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePost1632249061149 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'posts',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'freelancer_id',
						type: 'int',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'content',
						type: 'int',
						isNullable: false,
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
				foreignKeys: [
					{
						name: 'freelancerToPost',
						referencedTableName: 'freelancers',
						referencedColumnNames: ['id'],
						columnNames: ['freelancer_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('posts', 'freelancerToPost');
		await queryRunner.dropTable('posts');
	}
}
