import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user';

const USERS: User[] = [
  {
    id: 1,
    name: 'neha',
    email: 'neha@gmail.com',
    mobile: 2390798362
  },
  {
    id: 2,
    name: 'riya',
    email: 'riya@gmail.com',
    mobile: 2390798362
  },
  {
    id: 3,
    name: 'nima',
    email: 'nima@gmail.com',
    mobile: 2390798362
  },
  {
    id: 4,
    name: 'ravi',
    email: 'ravi@gmail.com',
    mobile: 2390798362
  }
];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * 
   * @returns User Array
   */
  getUsers(): User[] {
    return USERS;
  }

  /**
   * 
   * @param userDetails Details about new User
   * @returns New user
   */
  createUser(userDetails: Partial<User>): User {
    const user = <User>{ 
      id: USERS[USERS.length - 1].id + 1,
      ...userDetails,
    };
    USERS.push(user);
  
    return user;
  }

  /**
   * 
   * @param id user id
   * @returns user
   */
  getUser(id: number): User {
    const user = USERS.find((user) => user.id == id);

    if(!user) {
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
  updateUser(id: number, userDetails: Partial<User>): User {
    const index = USERS.findIndex(user => user.id == id);
    USERS[index] = {
      ...USERS[index],
      ...userDetails
    }
    
    return USERS[index]; 
  }

  /**
   * 
   * @param id user id
   * @returns true or false
   */
  deleteUser(id: number): boolean {
    const index = USERS.findIndex(user => user.id == id);
    USERS.splice(index, 1);
    
    return true;
  }

  /**
   * 
   * @param query search query 
   * @returns search result
   */
  searchUser(query: string): User[] {
    return USERS.filter((user) =>
      user.name.includes(query)||
      user.email.includes(query)||
      user.mobile.toString().includes(query)
    );
  }
}

