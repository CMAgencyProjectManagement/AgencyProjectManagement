import {Injectable} from '@angular/core';
import {StoreService} from './tree.service';
import {get, put, post} from 'superagent';
import {serverPath} from '../_serverPath';

@Injectable()
export class ProjectService {
  private tokenCursor;

  constructor(private store: StoreService) {
    this.tokenCursor = this.store.select(['token', 'access_token'])
  }

  public getMyProjects(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.myProject)
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
    });
  }

  public getAllProjects(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.allProject)
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
    });
  }

  public createProject( 
    name: string,
    description: string,
    startdate: string,
    deadline: string
  ): Promise<any> {
    const objData = {
      name: name,
      description: description,
      deadline: deadline,
      startdate: startdate
    };
    return new Promise<any>((resolve, reject) => {
      post(serverPath.updateProject)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.data);
          } else {
            reject(content);
          }
        })
        .catch(reject);
    })
  }

  public updateProject(
    projectId: number,
    name: string,
    description: string,
    startdate: string,
    deadline: string
  ): Promise<any> {
    const objData = {
      id: projectId,
      name: name,
      description: description,
      startdate: startdate,
      deadline: deadline
    };
    return new Promise<any>((resolve, reject) => {
      put(serverPath.updateProject)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.data);
          } else {
            reject(content);
          }
        })
        .catch(reject);
    })
  }

  public closeProject(
    projectId: number
  ): Promise<any> {
    const objData = {
      id: projectId
    };
    return new Promise<any>((resolve, reject) => {
      put(serverPath.updateProject)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.data);
          } else {
            reject(content);
          }
        })
        .catch(reject);
    })
  }
}
