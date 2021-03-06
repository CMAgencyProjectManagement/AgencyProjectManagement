import {Team} from './team';

export interface User {
  id: number,
  name: string,
  phone: string,
  birthdate: string,
  email: string,
  username: string,
  password: string,
  avatar: string,
  isAdmin: boolean,
  isManager: boolean,
  isActive: boolean,
  teamId: number,
  team: Team,
  teamText: string
}
