<<<<<<< HEAD
<<<<<<< HEAD
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePostLike1632249071828 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'post_likes',
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
						name: 'postToPostLike',
						referencedTableName: 'posts',
						referencedColumnNames: ['id'],
						columnNames: ['post_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE'
					},
					{
						name: 'userToPostLike',
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
			await queryRunner.dropForeignKey('post_likes', 'postToPostLike')
			await queryRunner.dropForeignKey('post_likes', 'userToPostLike')
			await queryRunner.dropTable('post_likes')

		}
=======
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePostLike1632249071828 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
	}
>>>>>>> fa28d698cb35a63ca99ea9d4468fc2a7e564298f
=======
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePostLike1632249071828 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
	}
>>>>>>> fa28d698cb35a63ca99ea9d4468fc2a7e564298f

}
