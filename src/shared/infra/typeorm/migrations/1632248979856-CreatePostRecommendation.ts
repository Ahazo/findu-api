import {MigrationInterface, QueryRunner, Table, TreeLevelColumn} from "typeorm";

export class CreatePostRecommendation1632248979856 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'post_recomendations',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true
					},
					{
						name: 'user_id',
						type: 'int',
						isNullable: false,
						isUnique: true
					},
					{
						name: 'freelancer_id',
						type: 'int',
						isNullable: false,
						isUnique: true
					},
					{
						name: 'content',
						type: 'varchar',
						isNullable: false,
						isUnique: true
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
				},
				{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()'
				},
				{
						name: 'status',
						type: 'enum',
						enum: ['active', 'inactive', 'deleted'],
						enumName: 'statusEnum',
						default: 'active',
						isNullable: false,
				}
				],
				foreignKeys: [
					{
						name: 'userToPostRecommendation',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['user_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE'
					},
					{
						name: 'freelancerToPostRecommendation',
						referencedTableName: 'freelancers',
						referencedColumnNames: ['id'],
						columnNames: ['freelancer_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE'
					}
				]
			}))
		}

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropForeignKey('post_recommendations', 'userToPostRecommendations')
			await queryRunner.dropForeignKey('post_recommendations', 'freelancerToPostRecommendation')
			await queryRunner.dropTable('post_recommendations')
		}

}
