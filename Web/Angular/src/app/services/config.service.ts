import {Injectable} from '@angular/core';
import {serverPath} from '../_serverPath';
import {get, put, post} from 'superagent';
import {Cursor, StoreService} from './tree.service';
import * as request from 'superagent';
import * as moment from 'moment';
@Injectable()
export class ConfigService {
    private tokenCursor: Cursor;




    constructor(private treeService: StoreService) {
        this.tokenCursor = this.treeService.select(['token', 'access_token']);
        

      }
      public getConfig(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
          get(serverPath.config)
            .set('token', this.tokenCursor.get())
            .then(res => {
              const content = res.body;
              if (content.IsSuccess) {                
                resolve(content.Data);
              } else {
                reject(content.Message);
              }
            }).catch(reject)
        });
      }
    //   getPriorities(): Promise<any> {
    //     return new Promise<any>((resolve, reject) => {
    //       let priorities = this.configsCursor.get();
    //       if (priorities) {
    //         resolve(priorities);
    //       } else {
    //         request.get(serverPath.getConfig)
    //           .set('token', this.tokenCursor.get())
    //           .then(res => {
    //             const content = res.body;
    //             if (content.IsSuccess) {
    //               this.configsCursor.set(content.Data);
    //               resolve(content.Data);
    //             } else {
    //               reject(content.Message);
    //             }
    //           })
    //           .catch(reason => reject(reason.response.body));
    //       }
    //     });
    //   }

      public updateConfig(
        lowPriority: number,
        mediumPriority: number,
        hightPriority: number,
        taskMaxDuration: number,
        lateTaskPenalty: number,
        minimumWorkingAge: number,
      ): Promise<any> {
        const objData = {
          lowPoint: lowPriority,
          mediumPoint: mediumPriority,
          highPoint: hightPriority,
          maxDuration: taskMaxDuration,
          penatyPercent: lateTaskPenalty,
          minAge: minimumWorkingAge,
        };
        return new Promise<any>((resolve, reject) => {
          put(serverPath.updateConfig)
            .set('token', this.tokenCursor.get())
            .send(objData)
            .type('form')
            .then((res) => {
              const content = res.body;
              if (content.IsSuccess) {
                resolve(content.Data);
              } else {
                reject(content);
              }
            })
            .catch(reason => reject(reason.response.body));
        })
      }

     



}