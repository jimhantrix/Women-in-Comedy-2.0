class EventsController < ApplicationController
  layout "hello_world"

  def index
    @event_page_props = {
      currentUser: {
        name: 'Mary Swanson',
        photo: 'default-bio',
        about: 'Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
                nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea
                commodo consequat. Duis...'

      },
      myEvents: [
        { name: "A great Event", date: 'May 27', time: '8:00PM'},
        { name: "A fantastic Event", date: 'May 28', time: '8:00PM'},
        { name: "A superb Event", date: 'May 29', time: '8:00PM'},
        { name: "An amazing Event", date: 'May 30', time: '8:00PM'},
      ],
      upcomingEvents: [
        { name: "Someone else", date: 'May 27', time: '6:00PM'},
        { name: "Do a great job", date: 'May 28', time: '8:00PM'},
        { name: "Its okay!", date: 'May 29', time: '9:00PM'},
        { name: "Last Event", date: 'May 30', time: '10:00PM'},
      ]
       }
  end
end
