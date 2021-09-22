<<<<<<< HEAD
<<<<<<< HEAD
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDeliveryAgreement1632249249224 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'delivery_agreements',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'order_id',
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
						name: 'userToDeliveryAgreement',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['user_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE'
					},
					{
						name: 'orderToDeliveryAgreement',
						referencedTableName: 'orders',
						referencedColumnNames: ['id'],
						columnNames: ['order_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE'
					}
				]
			}))
		}

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropForeignKey('delivery_agreements', 'userToDeliveryAgrement')
			await queryRunner.dropForeignKey('delivery_agreements', 'orderToDeliveryAgrement')
			await queryRunner.dropTable('delivery_agreements')
		}
=======
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDeliveryAgreement1632249249224 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
	}
>>>>>>> fa28d698cb35a63ca99ea9d4468fc2a7e564298f
=======
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDeliveryAgreement1632249249224 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
	}
>>>>>>> fa28d698cb35a63ca99ea9d4468fc2a7e564298f

}
