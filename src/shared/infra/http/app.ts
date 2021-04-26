import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { getRepository, getManager } from 'typeorm';

import User from '../../../modules/user/infra/typeorm/entities/User';
import UserAddress from '../../../modules/user/infra/typeorm/entities/UserAddress';
import Person from '../../../modules/user/infra/typeorm/entities/Person';


const app = express();

createConnection()
  .then((async (connection) => {

    const userRepository = getRepository(User);
    const userAddressRepository = getRepository(UserAddress);
    const personRepository = getRepository(Person);


    // const userAddress = userAddressRepository.create({
    //   postal_code:'12390-362',
    //   street:"Rua Marques do Pombal",
    //   house_number:100,
    //   state:'RJ',
    //   city:'Rio de Janeiro',
    // });

    // await userAddressRepository.save(userAddress);

    // console.log('Saved user address')
      
    const person = personRepository.create({
      cpf: '493.726.168-18',
      email: 'scarano.dev@gmail.com',
      cellphone: '+55 11 97801-3866',
      birth_date: new Date(),
      first_name: 'Lucca',
      last_name: 'Scarano',
      address_id: 1,
    });

    await personRepository.save(person);
}))

app.use(cors());

export default app;