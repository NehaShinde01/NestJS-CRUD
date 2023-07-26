import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user';
import { InjectEntityManager } from '@nestjs/typeorm';
import { DeleteResult, EntityManager, InsertResult, Like, UpdateResult } from 'typeorm';

// const USERS: User[] = [
//   {
//     id: 1,
//     name: 'neha',
//     email: 'neha@gmail.com',
//     mobile: 2390798362
//   },
//   {
//     id: 2,
//     name: 'riya',
//     email: 'riya@gmail.com',
//     mobile: 2390798362
//   },
//   {
//     id: 3,
//     name: 'nima',
//     email: 'nima@gmail.com',
//     mobile: 2390798362
//   },
//   {
//     id: 4,
//     name: 'ravi',
//     email: 'ravi@gmail.com',
//     mobile: 2390798362
//   }
// ];

@Injectable()
export class UserService {

  constructor(
    @InjectEntityManager()
    private _entityManager: EntityManager,//entityManager is private thats why we declaire it as _<name>
  ) { }

  /**
   * 
   * @returns User Array
   */
  getUsers(): Promise<User[]> {
    return this._entityManager.find(User);
  }

  /**
   * 
   * @param userDetails Details about new User
   * @returns New user
   */
  createUser(userDetails: Partial<User>): Promise<InsertResult> {

    return this._entityManager.insert(User, userDetails);
  }

  /**
   * 
   * @param id user id
   * @returns user
   */
  getUser(id: number): Promise<User> {
    const user = this._entityManager.findOne(User, { where: { id } });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  /**
   * 
   * @param id user id
   * @param userDetails user changes
   * @returns updated user
   */
  updateUser(id: number, userDetails: Partial<User>): Promise<UpdateResult> {
    return this._entityManager.update(User, { id }, userDetails);
  }

  /**
   * 
   * @param id user id
   * @returns true or false
   */
  deleteUser(id: number): Promise<DeleteResult> {
    return this._entityManager.delete(User, id);
  }

  /**
   * 
   * @param query search query 
   * @returns search result
   */
  searchUser(query: string): Promise<User[]> {
    return this._entityManager.find(User, {
      where: [
        {
          name:Like(`%${query}%`)
        },
        {
          email:Like(`%${query}%`)
        }
      ]//[]square braces are used for OR condition and { } curly braces are used for AND conditions
    })
  }
}

