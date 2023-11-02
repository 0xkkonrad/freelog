# freelog

Freelog lets you set questions with a lot of freedom. You can set a question expressed as a string, and set the schema for answers. For instance, you can set the question ```What time did you get up and what have you had for breakfast?``` and have the reponse schema ```I woke up at {time} and had {[breakfast-db]-tileview} for breakfast```. ```breakfast-db``` is also defined when setting the questions and creates a dropdown or tile view for the possible choices. This kind of data validation then makes it as easy as possible to log that data point.

- define data schema, e.g.
  - boolean
  - date
  - time
  - location data
  - string
  - number + unit
  - voice recordings
  - take picture
  - upload file
- notification sytem, set push notifications based on:
  - time
  - location
  - API
- input display types
  - tile view for options
  - dropdown for options
  - calendar
  - time
  - number
  - string
  - button to start and stop tracking location
  - voice recorder

Plugins:
It should be easy to create own question-input-display plugins. 

The MVP will be setting one boolean question, having notifications once a day, and simply displaying a calendar with with green/red squares in a calendar view.