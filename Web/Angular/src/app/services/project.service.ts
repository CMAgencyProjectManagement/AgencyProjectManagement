import {Injectable} from '@angular/core';
import {Cursor, StoreService} from './tree.service';
import {get, put, post} from 'superagent';
import {serverPath} from '../_serverPath';

@Injectable()
export class ProjectService {
  private tokenCursor;
  private projectsCursor: Cursor;

  constructor(private store: StoreService) {
    this.tokenCursor = this.store.select(['token', 'access_token']);
    this.projectsCursor = this.store.select(['projects'])
  }

  public getListOfProject(projectId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getProjectList(projectId))
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
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
        .catch(reason => reject(reason.response.body));
    });
  }

  public getAllProjects(force: boolean = false): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let projects = this.projectsCursor.get();
      if (projects && !force) {
        resolve(projects);
      } else {
        get(serverPath.allProject)
          .set('token', this.tokenCursor.get())
          .then(res => {
            const content = res.body;
            if (content.IsSuccess) {
              this.projectsCursor.set(content.Data);
              resolve(content.Data);
            } else {
              reject(content.Message);
            }
          })
          .catch(reason => reject(reason.response.body));
      }

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
      post(serverPath.createProject)
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
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    })
  }

  public getProject(projectId: number): Promise<any> {
    const objData = {
      id: projectId
    };
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getProject(projectId))
        .set('token', this.tokenCursor.get())
        .send(objData)
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public closeProject(
    projectId: number
  ): Promise<any> {
    const objData = {
      id: projectId
    };
    return new Promise<any>((resolve, reject) => {
      put(serverPath.closeProject)
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
