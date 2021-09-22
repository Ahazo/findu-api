import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePostComment1632249076540 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'post_comments',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true
					},
					{
						name: 'post_id',
						type: 'int',
						isNullable: false,
						isUnique: true
					},
					{
						name: 'user_id',
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
						name: 'status',
						type: 'enum',
						enum: ['active', 'inactive', 'deleted'],
						enumName: 'statusEnum',
						default: 'active',
						isNullable: false
					}
				],
				foreignKeys: [
					{
						name: 'postToPostComment',
						referencedTableName: 'posts',
						referencedColumnNames: ['id'],
						columnNames: ['post_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE'
					},
					{
						name: 'userToPostComment',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['user_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE'
					}
				]
			}))
		}

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropForeignKey('post_comments', 'postToPostComment')
			await queryRunner.dropForeignKey('post_comments', 'userToPostComment')
			await queryRunner.dropTable('post_comments')
		}

}
