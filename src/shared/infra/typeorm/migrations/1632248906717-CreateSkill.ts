import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSkill1632248906717 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'skills',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'specialization_id',
						type: 'int',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'freelancer_id',
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
				],

				foreignKeys: [
					{
						name: 'specializationToSkill',
						referencedTableName: 'specializations',
						referencedColumnNames: ['id'],
						columnNames: ['specialization_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
					{
						name: 'freelancerToSkill',
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
		await queryRunner.dropForeignKey('skills', 'specializationToSkill');
		await queryRunner.dropForeignKey('skills', 'freelancerToSkill');
		await queryRunner.dropTable('skills');
	}
}
