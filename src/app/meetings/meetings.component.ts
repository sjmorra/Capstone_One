import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meetings } from '../meetings';
import { MeetingsService } from '../meetings.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meetings',
  imports: [CommonModule, FormsModule],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})
export class MeetingsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);

  meeting: Meetings = {
    clientName: 'Enter Client Name',
    meetingNumber: 0,
    meetingTopic: 'Enter Meeting Topic',
    numberOfPeople: 'Enter Number of People',
    startTime: new Date()
  }

  meetingsService = inject(MeetingsService);
  meetingsList: Meetings[] = this.meetingsService.meetingsList
  filteredMeetingsList: Meetings[] = []

  addMeeting(meeting: Meetings) {
    const newMeeting: Meetings = {
      clientName: meeting.clientName,
      meetingNumber: this.filteredMeetingsList.length + 1,
      meetingTopic: meeting.meetingTopic,
      numberOfPeople: meeting.numberOfPeople,
      startTime: meeting.startTime}

      this.filteredMeetingsList.push(newMeeting);
      console.log(this.filteredMeetingsList);
  }

  ngOnInit(): void {
    this.meeting.clientName = this.route.snapshot.params['clientName'];
    this.filteredMeetingsList = this.meetingsList.filter(m => m.clientName === this.meeting.clientName);
  }
}