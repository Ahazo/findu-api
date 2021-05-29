import { hash, compare } from 'bcrypt';
import IHashProvider from '../models/IHashProvider';

class BcryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public async compareHash(
    payload: string,
    hashedPassword: string
  ): Promise<boolean> {
    return compare(payload, hashedPassword);
  }
}

export default BcryptHashProvider;