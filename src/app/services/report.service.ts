import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Report } from 'src/app/models/Report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  report = this.socket.fromEvent<Report>('report');
  //reports = this.socket.fromEvent<string[]>('reports');

  constructor(private socket: Socket) { }

  //getDocument(id: string) {
  //  this.socket.emit('getDoc', id);
  //}

  //newDocument() {
  //  this.socket.emit('addDoc', { id: this.docId(), doc: '' });
  //}

  //editDocument(document: Report) {
  //  this.socket.emit('editDoc', document);
  //}

  //private docId() {
  //  let text = '';
  //  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //
  //  for (let i = 0; i < 5; i++) {
  //    text += possible.charAt(Math.floor(Math.random() * possible.length));
  //  }
  //
  //  return text;
  //}
}