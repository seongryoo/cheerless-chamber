import { Injectable } from '@angular/core';

interface CallbackData {
  listenerId: string;
  callback: Function;
}

export interface EventsStore {
  [eventId: string]: CallbackData[];
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  events: EventsStore = {};
  constructor() {}
  subscribe(eventId: string, listenerId: string, callback: Function) {
    if (!this.events[eventId]) {
      this.events[eventId] = [];
    }
    const callbackData: CallbackData = {
      listenerId,
      callback,
    };
    this.events[eventId].push(callbackData);
  }
  trigger(eventId: string) {
    if (this.events[eventId]) {
      for (const callbackData of this.events[eventId]) {
        callbackData.callback();
      }
    }
  }
  unsubscribe(eventId: string, listenerId: string) {
    if (this.events[eventId]) {
      const filteredCallbacks = this.events[eventId].filter(
        (data: CallbackData) => data.listenerId === listenerId
      );
      this.events[eventId] = [...filteredCallbacks];
    }
  }
}
