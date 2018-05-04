import {Task} from './task';


export interface Config {
    lowPriorityPoint: number;
    mediumPriorityPoint: number;
    highPriorityPoint: number;
    maxDuration: number;
    penatyPercent: number;
    minAge: number;
  allowAdminInTeam: boolean;
}
