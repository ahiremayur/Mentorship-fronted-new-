export class eventdata{
  events = [
    {
      id: 1111,
      img: 'jbkbkbkhbk',
      title: 'Kaladarshan',
      description: 'This is the description....',
      date: '2023-03-01',
      venue: 'New York',
      favoption: false
    },
    {
      id: 1112,
      img: 'jbkbkbkhbk',
      title: 'Kaladarshan',
      description: 'This is the description....',
      date: '2023-03-15',
      venue: 'Los Angeles',
      favoption: true
    },
    {
      id: 1113,
      img: 'jbkbkbkhbk',
      title: 'Kaladarshan',
      description: 'This is the description....',
      date: '2023-04-01',
      venue: 'Chicago',
      favoption: true
    }
  ];

  changefav(i: Number) {
    for (let object of this.events) {
      if (object.id === i) {
        object.favoption = !object.favoption;
      }
    }
  }
}