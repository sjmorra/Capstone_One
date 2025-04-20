CREATE TABLE meetings (
    meetingNumber INTEGER PRIMARY KEY AUTOINCREMENT,
    clientName TEXT NOT NULL,
    meetingTopic TEXT NOT NULL,
    numberOfPeople INTEGER NOT NULL,
    startTime DATE NOT NULL,
    FOREIGN KEY (clientName) REFERENCES clients(name)
)