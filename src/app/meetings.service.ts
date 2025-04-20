import { Injectable } from '@angular/core';
import { Meetings } from './meetings';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  meetingsList: Meetings[] = [
    {
      clientName: 'John Doe',
      meetingNumber: 1,
      meetingTopic: 'Project Kickoff',
      numberOfPeople: 5,
      startTime: new Date('2023-10-01T10:00:00')
    },
    {
      clientName: 'Jane Smith',
      meetingNumber: 2,
      meetingTopic: 'Weekly Sync',
      numberOfPeople: 3,
      startTime: new Date('2023-10-02T14:00:00')
    },
    {
      clientName: 'Alice Johnson',
      meetingNumber: 3,
      meetingTopic: 'Budget Review',
      numberOfPeople: 4,
      startTime: new Date('2023-10-03T09:00:00')
    }
  ]


  constructor() { }
}
